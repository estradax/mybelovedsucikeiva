import { motion } from 'motion/react'

import img1 from '@/assets/landing-1.png'
import img2 from '@/assets/landing-2.png'
import img3 from '@/assets/sorry-1.png'

export default function Thanks() {
  return (
    <div className="p-4 relative h-full overflow-hidden">
      <p>Kreator sangat berterima kasih kepada Suci Keiva Mulyana yang selalu ada dalam hidupnya.</p>

      <motion.img
        initial={{
          opacity: 0,
          x: 100,
        }}
        animate={{
          opacity: 1,
          x: 0,
          rotate: '-30deg',
          transition: {
            duration: 0.3,
            delay: 0.3
          },
        }}
        className="absolute right-[-50px] rotate-[-30deg] top-[-160px]"
        src={img1}
      />
      <motion.img
        initial={{
          opacity: 0,
          y: 100,
        }}
        animate={{
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.3,
            delay: 0.6
          },
        }}
        className="absolute top-[0px]"
        src={img2}
      />
      <motion.img
        initial={{
          opacity: 0,
          x: 100,
        }}
        animate={{
          opacity: 1,
          x: 0,
          rotate: '20deg',
          transition: {
            duration: 0.3,
            delay: 0.9
          },
        }}
        className="absolute left-[-20px] top-[60px] rotate-[20deg] w-[200px]"
        src={img3}
      />
    </div>
  )
}
