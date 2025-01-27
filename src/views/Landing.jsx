import { motion } from 'motion/react'
import { Badge } from "@/components/ui/badge"

import landing1 from '@/assets/landing-1.png'
import landing2 from '@/assets/landing-2.png'

export default function Landing() {
  return (
    <div className="h-full p-4 relative overflow-hidden">
      <h1 className="text-2xl font-semibold mb-8">Selamat Datang di MyBelovedSuciKeiva</h1>
      <p className="mb-4 text-justify">Nikmati setiap momen yang dirancang penuh cinta hanya untuk Suci Keiva Mulyana.</p>
      <h2 className="font-bold">Apa yang membuat ini berbeda?</h2>
      <ul className="list-disc ml-4 text-sm mb-4">
        <li className="text-justify">Eksklusif dan Berarti: Dibuat hanya untuk Suci Keiva Mulyana.</li>
        <li className="text-justify">Dibuat dengan Cinta: Dari hati untuk Suci Keiva Mulyana, karena setiap momen berharga.</li>
      </ul>
      <h2 className="font-bold">Ada beberapa konten loh</h2>
      <ul className="list-disc ml-4 text-sm mb-4">
        <li className="text-justify">Landing <Badge>Kamu disini</Badge></li>
        <li className="text-justify">Intro</li>
        <li className="text-justify">Grateful</li>
        <li className="text-justify">Sorry</li>
        <li className="text-justify">Thanks</li>
        <li className="text-justify">Related</li>
      </ul>
      <p className="text-xs font-light">Web nya ada suaranya</p>

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
        className="absolute top-[60px] right-[0px]"
        src={landing1}
      />
    </div>
  )
}
