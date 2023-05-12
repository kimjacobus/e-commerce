import { motion } from 'framer-motion'

const Motionh1 = () => {
  const sentence = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.1,
        staggerChildren: 0.03,
      },
    },
  }
  const letter = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
    },
  }

  const line1 = "Never mistake simplicity for stupidity"


  return (
    <motion.h1 className="text-3xl font-quicksand pb-5" variants={sentence} initial="hidden" animate="visible">
        {line1.split("").map((char,index) => {
            return(
                <motion.span key={char + "-" + index} variants={letter}>
                    {char}
                </motion.span>
            )
        })}
    </motion.h1>
  )
}

export default Motionh1
