import React from 'react'
import { motion } from 'framer-motion'
import "../App.css"

const Info = () => {
  return (
    <div>
    <div>Info</div>
    
    <motion.img 
      id='zvezda'
      src='/img/img1.png'
      alt=''
      width={'200px'} 
      animate={{ scale:1, rotate:360 }}
      transition={{ duration: 3, times: [0, 0.2, 1], repeat: true }}
      whileHover={{
        scale:1.5
      }}
    />

    <motion.div
      id='text1'
      initial={{
        y:-1000,
        opasity: 0
      }}
      
      animate={{ 
        y:0, 
        opacity:1
      }}

      transition={{
        delay:1,
        duration:4
      }}
    >
      Еду. Тихо. Слышны звоны
      Под копытом на снегу.
      Только серые вороны
      Расшумелись на лугу.

      Заколдован невидимкой,
      Дремлет лес под сказку сна.
      Словно белою косынкой
      Повязалася сосна.
    </motion.div>
    <motion.div
      className="box"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 2,
        delay: 3,
        ease: [0, 0.71, 0.2, 1.01],
        repeat: Infinity,
        repeatDelay: 1
      }}
      whileHover={{ scale: 1.1 ,
        
      }}
      
    />
    </div>
  )
}

export default Info