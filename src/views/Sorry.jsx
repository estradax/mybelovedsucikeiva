import { useState, useEffect, useRef } from 'react'
import { motion } from 'motion/react'
import { Howl } from 'howler'
import Confetti from 'react-confetti'
import { useSound } from '@/hooks/use-sound.js'
import { Button } from '@/components/ui/button'
import Play from '@/components/icons/Play.jsx'
import Stop from '@/components/icons/Stop.jsx'

import sorry1 from '@/assets/sorry-1.png'
import sorrySound from '@/assets/sorry-sound.mp3'
import sorrySound2 from '@/assets/sorry-sound-2.mp3'

export default function Sorry() {
  const sound = useSound()
  const [isStopConfetti, setIsStopConfetti] = useState(false)
  const [isMusicPlaying, setIsMusicPlaying] = useState(false)
  const musicRef = useRef(null)

  useEffect(() => {
    const t = setTimeout(() => {
      setIsStopConfetti(true)
    }, 5000)
    return () => {
      clearTimeout(t)
    }
  }, [])

  function playSound() {
    sound.soundRef.value?.stop()
    const s = new Howl({
      src: [sorrySound]
    })
    s.play()
  }

  function playSound2() {
    sound.soundRef.value?.stop()
    if (!isMusicPlaying) {
      musicRef.value = new Howl({
        src: [sorrySound2],
        html5: true
      })
      musicRef.value.play()
      setIsMusicPlaying(true)
    } else {
      musicRef.value.stop()
      setIsMusicPlaying(false)
    }
  }

  return (
    <div className="p-4 h-full relative overflow-hidden">
      <p className="mb-2">Disini kreator ingin meminta maaf kepada Suci Keiva Mulyana karena melakukan kesalahan fatal.</p>
      <h2 className="font-light text-xs mb-1">Ini yang dikatakan kreator</h2>
      <blockquote className="border-l-2 pl-6 italic font-covered-by-your-grace mb-6 text-2xl">Dari lubuk hati yang paling dalam, aku ingin meminta maaf kepadamu. Aku sadar mungkin aku terlalu sering meminta maaf, tapi aku benar-benar tulus. Aku bahkan membuat website ini sebagai ungkapan hatiku, berharap kamu mau memaafkanku</blockquote>
      <Button onClick={playSound} className="mb-4"><Play />Mainkan</Button>
      <p className="text-sm font-light italic">Lagu Megah Diterima</p>
      <Button onClick={playSound2} className="mb-4">{ isMusicPlaying ? <Stop /> : <Play /> }{ isMusicPlaying ? 'Hentikan' : 'Mainkan' } lagu</Button>
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
        className="absolute w-[200px] right-[-20px] bottom-[60px] rotate-[-20deg]"
        src={sorry1}
      />
      <Confetti recycle={!isStopConfetti} wind={0.1} confettiSource={{y: 100}} />
      <Confetti recycle={!isStopConfetti} wind={0.1} confettiSource={{y: 400}} />
    </div>
  )
}
