import { motion, useMotionValue, useTransform } from 'framer-motion';
import { useState } from 'react';

/**
 * Komponen internal yang menangani logika drag dan rotasi 3D untuk setiap kartu.
 * @param {object} props - Props untuk komponen.
 * @param {React.ReactNode} props.children - Elemen anak yang akan dirender (kartu).
 * @param {Function} props.onSendToBack - Callback untuk mengirim kartu ke belakang.
 * @param {number} props.sensitivity - Jarak minimum drag untuk memicu onSendToBack.
 */
function CardRotate({ children, onSendToBack, sensitivity }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Mengubah posisi mouse (x, y) menjadi nilai rotasi 3D
  const rotateX = useTransform(y, [-100, 100], [30, -30]);
  const rotateY = useTransform(x, [-100, 100], [-30, 30]);

  // Fungsi yang dijalankan setelah pengguna selesai men-drag kartu
  function handleDragEnd(_, info) {
    // Jika kartu di-drag cukup jauh, kirim ke belakang tumpukan
    if (Math.abs(info.offset.x) > sensitivity || Math.abs(info.offset.y) > sensitivity) {
      onSendToBack();
    } else {
      // Jika tidak, kembalikan kartu ke posisi semula dengan mulus
      x.set(0);
      y.set(0);
    }
  }

  return (
    <motion.div className="absolute w-full h-full cursor-grab" style={{ x, y, rotateX, rotateY }} drag dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }} dragElastic={0.6} whileTap={{ cursor: 'grabbing' }} onDragEnd={handleDragEnd}>
      {children}
    </motion.div>
  );
}

/**
 * Komponen utama yang mengatur dan menampilkan tumpukan kartu interaktif dan responsif.
 * @param {object} props - Props untuk komponen.
 * @param {boolean} [props.randomRotation=false] - Aktifkan rotasi acak kecil.
 * @param {number} [props.sensitivity=200] - Jarak drag minimum dalam piksel.
 * @param {Array<object>} props.cardsData - Array data untuk kartu. Setiap objek harus memiliki `id` dan `img`.
 * @param {object} [props.animationConfig] - Konfigurasi animasi pegas (spring).
 * @param {boolean} [props.sendToBackOnClick=false] - Kirim kartu ke belakang saat diklik.
 */
export default function Stack({ randomRotation = false, sensitivity = 200, cardsData = [], animationConfig = { stiffness: 260, damping: 20 }, sendToBackOnClick = false }) {
  const [cards, setCards] = useState(cardsData);

  // Fungsi untuk memindahkan kartu yang dipilih ke bagian paling belakang tumpukan
  const sendToBack = (id) => {
    setCards((prev) => {
      const newCards = [...prev];
      const index = newCards.findIndex((card) => card.id === id);
      const [card] = newCards.splice(index, 1);
      newCards.unshift(card); // Pindahkan ke awal array (render di paling bawah)
      return newCards;
    });
  };

  return (
    // Kontainer utama yang responsif
    <div
      className="relative w-full aspect-[16/10] max-w-[250px]"
      style={{ perspective: 600 }} // `perspective` penting untuk efek 3D
    >
      {cards.map((card, index) => {
        const randomRotate = randomRotation ? Math.random() * 10 - 5 : 0;
        // Menghitung kedalaman kartu dari tumpukan teratas (0 = teratas)
        const depth = cards.length - 1 - index;

        return (
          <CardRotate key={card.id} onSendToBack={() => sendToBack(card.id)} sensitivity={sensitivity}>
            <motion.div
              className="absolute w-full h-full rounded-2xl overflow-hidden border-4 border-white"
              onClick={() => sendToBackOnClick && sendToBack(card.id)}
              animate={{
                rotateZ: depth * 4 + randomRotate,
                // ✅ Formula yang sudah diperbaiki: kartu teratas selalu scale: 1
                scale: 1 - depth * 0.06,
                transformOrigin: '90% 90%', // Titik pivot untuk rotasi dan skala
              }}
              initial={false}
              transition={{
                type: 'spring',
                stiffness: animationConfig.stiffness,
                damping: animationConfig.damping,
              }}
            >
              <img src={card.img} alt={`card-${card.id}`} className="w-full h-full object-cover pointer-events-none" />
            </motion.div>
          </CardRotate>
        );
      })}
    </div>
  );
}
