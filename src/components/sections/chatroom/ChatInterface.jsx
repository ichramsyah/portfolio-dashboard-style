import React, { useRef, useState, useEffect } from 'react';
import { db, auth } from '../../../firebase';
import { collection, query, orderBy, limit, onSnapshot, addDoc, serverTimestamp } from 'firebase/firestore';
import { GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import { useAuth } from '../../../contexts/AuthContext';
import { AiOutlineSend } from 'react-icons/ai';
import { FaSignOutAlt } from 'react-icons/fa';
import { MdShield } from 'react-icons/md';
import { MdReplyAll } from 'react-icons/md';

const ChatInterface = () => {
  const { currentUser } = useAuth();
  const dummy = useRef();
  const [messages, setMessages] = useState([]);
  const [formValue, setFormValue] = useState('');
  const [error, setError] = useState('');
  const [replyingTo, setReplyingTo] = useState(null);

  const AUTHOR_EMAIL = 'iamabdulrahman15@gmail.com';

  useEffect(() => {
    const q = query(collection(db, 'messages'), orderBy('createdAt', 'asc'), limit(100));
    const unsubscribe = onSnapshot(
      q,
      (querySnapshot) => {
        const messagesData = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setMessages(messagesData);
      },
      (err) => {
        console.error('Gagal mengambil pesan:', err);
        setError('Tidak dapat memuat pesan.');
      }
    );
    if (!currentUser) {
      setMessages([]);
    }

    return unsubscribe;
  }, [currentUser]);

  const scrollToBottom = () => {
    dummy.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const signInWithGoogle = () => {
    signInWithPopup(auth, new GoogleAuthProvider()).catch((err) => setError('Gagal login.'));
  };

  const handleSignOut = () => {
    signOut(auth).catch((err) => setError('Gagal logout.'));
  };

  const sendMessage = async (e) => {
    e.preventDefault();
    if (formValue.trim() === '' || !currentUser) return;

    const { uid, photoURL, displayName, email } = currentUser;
    const newMessageData = {
      text: formValue,
      createdAt: serverTimestamp(),
      uid,
      photoURL,
      displayName,
      email,
    };
    if (replyingTo) {
      newMessageData.replyTo = {
        id: replyingTo.id,
        text: replyingTo.text,
        displayName: replyingTo.displayName,
      };
    }
    await addDoc(collection(db, 'messages'), newMessageData);
    setFormValue('');
    setReplyingTo(null);
  };

  const cancelReply = () => setReplyingTo(null);

  const handleReplyClick = (message) => {
    setReplyingTo(message);
    scrollToBottom();
  };

  return (
    <section>
      <main className="h-94 overflow-y-auto overflow-x-hidden p-4 space-y-2">
        {messages.length > 0 ? (
          messages.map((msg) => {
            const isSender = currentUser && msg.uid === currentUser.uid;
            const isAuthor = msg.email === AUTHOR_EMAIL;
            const messageTime = msg.createdAt?.toDate().toLocaleString('id-ID', {
              dateStyle: 'medium',
              timeStyle: 'short',
            });

            const ReplyButton = ({ className }) => (
              <button onClick={() => handleReplyClick(msg)} className={`opacity-0 group-hover:opacity-100 p-1 rounded-full text-gray-7 dark:text-gray-2 transition-all duration-300 cursor-pointer ${className}`}>
                <MdReplyAll size={18} />
              </button>
            );

            return (
              <div key={msg.id} className={`flex items-end gap-2 ${isAuthor ? 'justify-end' : 'justify-start'}`}>
                <div className={`flex items-start gap-2 ${isAuthor ? 'flex-row-reverse' : 'flex-row'}`}>
                  <img src={msg.photoURL || 'https://www.pngall.com/wp-content/uploads/5/Profile-PNG-File.png'} alt="avatar" className="w-10 h-10 rounded-full self-start" />

                  <div className="flex flex-col mb-3.5">
                    <div className={`flex items-center gap-2 mb-1.5 ${isAuthor ? 'justify-end' : 'justify-start'}`}>
                      {isAuthor ? (
                        <>
                          <p className="text-xs text-gray-5 dark:text-gray-4">{messageTime}</p>
                          <span className="text-[11px] font-semibold px-2 py-0.5 bg-sky-500/20 text-sky-500 rounded-full flex items-center">
                            <MdShield className="w-2.8 h-2.8 mr-[3px]" /> Author
                          </span>
                          <p className="text-[13px] font-semibold text-gray-5 dark:text-gray-4">{msg.displayName}</p>
                        </>
                      ) : (
                        <>
                          <p className="text-xs font-semibold text-gray-5 dark:text-gray-4">{msg.displayName}</p>
                          <p className="text-xs text-gray-5 dark:text-gray-4">{messageTime}</p>
                        </>
                      )}
                    </div>

                    <div className={`group flex items-center gap-2 w-full ${isAuthor ? 'justify-end' : 'justify-start'}`}>
                      {/* Untuk Author, tombol muncul di KIRI bubble */}
                      {isAuthor && currentUser && !isSender && <ReplyButton className="transform -scale-x-100" />}

                      {/* Bubble chat */}
                      <div className={`px-3 pb-3 pt-2 max-w-xs md:max-w-md bg-gray-2 dark:bg-gray-8 text-gray-8 dark:text-gray-1 ${isAuthor ? 'self-end rounded-br-2xl rounded-l-2xl' : 'self-start rounded-bl-2xl rounded-r-2xl'}`}>
                        {msg.replyTo && (
                          <div className="mb-2 mt-1 p-2 border-l-4 border-gray-4 bg-gray-3 dark:bg-gray-9 dark:border-gray-5 rounded">
                            <p className="text-xs font-bold">{msg.replyTo.displayName}</p>
                            <p className="text-sm italic opacity-80 truncate">{msg.replyTo.text}</p>
                          </div>
                        )}
                        <p className="text-base break-words">{msg.text}</p>
                      </div>

                      {/* Untuk BUKAN Author, tombol muncul di KANAN bubble */}
                      {!isAuthor && currentUser && !isSender && <ReplyButton />}
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <div className="h-full flex flex-col justify-center items-center text-gray-500">
            <p className="font-semibold">Selamat Datang!</p>
            <p>Belum ada percakapan. Jadilah yang pertama!</p>
          </div>
        )}
        <div ref={dummy}></div>
      </main>

      {/* Bagian form dan footer  */}
      {currentUser && (
        <div className="py-5 border-t border-gray-3 dark:border-gray-6">
          {replyingTo && (
            <div className="relative w-full flex justify-between items-center p-2 mb-2 bg-gray-2 dark:bg-gray-9 rounded-lg overflow-x-hidden">
              <div className="text-sm pl-2 py-1">
                <p className="text-gray-6 dark:text-gray-3">
                  Replying to <span className="font-bold">{replyingTo.displayName}</span>
                </p>
                <p className="text-gray-5 dark:text-gray-4 italic truncate break-words w-60 md:w-[90%]">{replyingTo.text}</p>
              </div>
              <button onClick={cancelReply} className="absolute right-0 font-bold text-2xl text-gray-5 hover:text-gray-8 pr-2">
                &times;
              </button>
            </div>
          )}
          <form onSubmit={sendMessage} className="flex">
            <input
              value={formValue}
              onChange={(e) => setFormValue(e.target.value)}
              placeholder="Ketik pesan..."
              className="text-blackk dark:text-whitee bg-gray-1 dark:bg-gray-8 flex-grow p-3 rounded-l-lg focus:outline-none focus:ring-none transition-all duration-300 placeholder:text-gray-4 dark:placeholder:text-gray-5"
            />
            <button
              type="submit"
              disabled={!formValue.trim()}
              className={`p-2 transition-all duration-300 px-4 rounded-r-lg ${
                !formValue.trim() ? 'cursor-not-allowed bg-gray-1 dark:bg-gray-8' : 'bg-gray-6 dark:bg-gray-7 cursor-pointer hover:scale-105 hover:bg-gray-8 dark:hover:bg-gray-6'
              }`}
            >
              <AiOutlineSend size={24} className={!formValue.trim() ? 'text-gray-4 transition-all duration-300' : 'dark:text-white text-white transition-all duration-300'} />
            </button>
          </form>
        </div>
      )}

      <div className="">
        {currentUser ? (
          <div className="flex justify-between">
            <div className="flex items-center text-sm">
              <p className="text-gray-5">
                Sign in as <span className="font-bold text-gray-5">{currentUser.displayName}</span> <span className="text-gray-5">({currentUser.email})</span>
              </p>
            </div>
            <button onClick={handleSignOut} className="bg-red-600 text-white py-1 px-3 rounded-md text-sm transition duration-300 hover:scale-104 flex items-center">
              <FaSignOutAlt className="inline mb-0.5 mr-1" />
              <span className="">Logout</span>
            </button>
          </div>
        ) : (
          <div className="py-5 flex justify-center border-t border-gray-3 dark:border-gray-6">
            <div className="flex flex-col justify-center items-center">
              <p className="text-center text-sm text-gray-6 dark:text-gray-4 mb-5">Please sign in to join the conversation. Don't worry, your data is safe with us.</p>
              <button onClick={signInWithGoogle} className="px-4 py-2.5 flex items-center border border-gray-300 rounded-lg hover:scale-105 transition-all duration-300 bg-whitee dark:bg-gray-9">
                <img src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png" className="w-7" alt="Google icon" />
                <span className="px-1 text-gray-7 dark:text-gray-2">Sign in with Google</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ChatInterface;
