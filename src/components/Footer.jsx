import { motion, MotionConfig } from "framer-motion";


export default function Footer() {

    return (

        <>
            <motion.div className="mt-40 flex flex-col justify-between w-full bg-[#c0c0c0] "
                initial={{ scale: 0.1 }}
                animate={{ scale: 1 }}
                transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                    duration: 0.5
                }}
            >
                <div className="flex flex-row justify-around h-24 items-center">
                    <a>Privacidad</a>
                    <a>Política de cookies</a>
                    <a>Mapa del sitio</a>
                </div>
                <div className="pt-7 pb-5 text-center border-t border-[#d2d2d2]">Financiado por la Generalitat. &copy;2024 Hanami, Inc. Todos los derechos reservados</div>
            </motion.div>
        </>
    )
}