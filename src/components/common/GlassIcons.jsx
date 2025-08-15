const colorClassMapping = {
  react: 'bg-gradient-to-br from-cyan-500 to-blue-600',
  nextjs: 'bg-gradient-to-br from-gray-800 to-gray-900',
  laravel: 'bg-gradient-to-br from-red-500 to-orange-500',
  express: 'bg-gradient-to-br from-gray-600 to-gray-700',
  javascript: 'bg-gradient-to-br from-yellow-400 to-yellow-500',
  typescript: 'bg-gradient-to-br from-blue-500 to-blue-700',
  php: 'bg-gradient-to-br from-indigo-400 to-purple-500',
  tailwind: 'bg-gradient-to-br from-teal-400 to-cyan-600',
  bootstrap: 'bg-gradient-to-br from-purple-600 to-indigo-700',
  mysql: 'bg-gradient-to-br from-blue-500 to-orange-400',
  mongodb: 'bg-gradient-to-br from-green-500 to-emerald-600',
  html: 'bg-gradient-to-br from-orange-500 to-red-600',
  css: 'bg-gradient-to-br from-blue-500 to-sky-600',
  git: 'bg-gradient-to-br from-red-600 to-red-800',
  github: 'bg-gradient-to-br from-gray-800 to-gray-900',
  postman: 'bg-gradient-to-br from-purple-500 to-fuchsia-600',
  figma: 'bg-gradient-to-br from-fuchsia-400 to-pink-500',
  adobeillustrator: 'bg-gradient-to-br from-orange-500 to-red-600',
  cpanel: 'bg-gradient-to-br from-teal-400 to-cyan-500',
  python: 'bg-gradient-to-br from-blue-500 to-yellow-400',
  default: 'bg-gradient-to-br from-gray-500 to-gray-600',
};

const GlassIcons = ({ items, className }) => {
  return (
    <div className={`flex flex-wrap md:justify-start justify-center space-x-8 space-y-14 mx-auto pt-[3em] overflow-visible ${className || ''}`}>
      {items.map((item, index) => {
        const backgroundClasses = colorClassMapping[item.colorKey] || colorClassMapping.default;

        return (
          <button
            key={index}
            type="button"
            aria-label={item.label}
            className={`relative bg-transparent outline-none w-[3.7em] h-[3.7em] [perspective:24em] [transform-style:preserve-3d] [-webkit-tap-highlight-color:transparent] group ${item.customClass || ''}`}
          >
            <span
              className={`absolute top-0 left-0 w-full h-full rounded-[1.25em] block transition-[opacity,transform] duration-300 ease-[cubic-bezier(0.83,0,0.17,1)] origin-[100%_100%] rotate-[15deg] group-hover:[transform:rotate(25deg)_translate3d(-0.5em,-0.5em,0.5em)] ${backgroundClasses}`}
            ></span>

            <span
              className="absolute top-0 left-0 w-full h-full rounded-[1.25em] bg-[hsla(0,0%,100%,0.15)] transition-[opacity,transform] duration-300 ease-[cubic-bezier(0.83,0,0.17,1)] origin-[80%_50%] flex backdrop-blur-[0.75em] [-webkit-backdrop-filter:blur(0.75em)] transform group-hover:[transform:translateZ(2em)]"
              style={{
                boxShadow: '0 0 0 0.1em hsla(0, 0%, 100%, 0.3) inset',
              }}
            >
              <span className="m-auto w-[1.9em] h-[1.9em] flex items-center justify-center" aria-hidden="true">
                {item.icon}
              </span>
            </span>

            <span className="absolute top-full left-0 right-0 text-center text-gray-8 dark:text-gray-2 whitespace-nowrap leading-[2] text-base opacity-0 transition-[opacity,transform] duration-300 ease-[cubic-bezier(0.83,0,0.17,1)] translate-y-0 group-hover:opacity-100 group-hover:[transform:translateY(20%)]">
              {item.label}
            </span>
          </button>
        );
      })}
    </div>
  );
};

export default GlassIcons;
