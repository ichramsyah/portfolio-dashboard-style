import { motion } from 'framer-motion';
import { Search } from 'lucide-react';

const SearchInput = ({ searchTerm, setSearchTerm, t }) => {
  return (
    <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, ease: 'easeOut', delay: 0.3 }} viewport={{ once: true }} className="relative flex-1 max-w-md">
      <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-4" />
      <input
        type="text"
        placeholder={t('projects.search')}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full transition-all  pl-10 pr-4 py-2 border-2 border-gray-2 dark:border-gray-5/50 hover:border-blue-3 dark:hover:border-gray-5 rounded-[50px] bg-whitee dark:bg-gray-9/20 focus:text-blue-4 focus:dark:text-gray-3 focus:border-transparent focus:ring-2 focus:ring-blue-3 dark:focus:ring-gray-5 outline-none dark:placeholder:text-gray-5 placeholder:text-gray-4 placeholder:font-normal"
      />
    </motion.div>
  );
};

export default SearchInput;
