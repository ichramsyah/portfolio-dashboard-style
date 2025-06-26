const SectionHeader = ({ title, description }) => {
  return (
    <div className="pb-8 mb-5 border-b border-gray-3 dark:border-gray-7">
      <h1 className="text-3xl font-medium text-gray-9 dark:text-whitee mb-3">{title}</h1>
      <p className="text-[17px] text-gray-6 dark:text-gray-4">{description}</p>
    </div>
  );
};

export default SectionHeader;
