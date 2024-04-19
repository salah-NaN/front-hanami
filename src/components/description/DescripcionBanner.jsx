import { motion } from 'framer-motion'

export const DescripcionBanner = ({descY}) => {
  return (
    <motion.div className="relative mt-12 ml:w-72 mx:w-80 md:w-96 lg:w-fit px-1 z-30" style={{y: descY}}>
      <div className="absolute inset-0 bg-green-300 rounded-full blur-sm"></div>

      <div className="relative border-none bg-white rounded-full 
      py-2 bg-transparent md:px-6 lg:w-fit">

        <article className="text-wrap lg:text-nowrap text-black text-md 
        md:text-md lg:text-xl xl:text-2xl 2xl:text-3xl lg:w-fit px-3">
          <p className="text-center leading-normal">
            Explora, aprende y conecta con la esencia natural de Cataluña.
          </p>
        </article>
      </div>
    </motion.div>
  );
};

export default DescripcionBanner;
