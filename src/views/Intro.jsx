import { useState, useEffect, useRef } from 'react'
import { Howl } from 'howler'
import Confetti from 'react-confetti'
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Link from '@/components/icons/Link.jsx'

import intro1 from '@/assets/intro-1.jpg'
import intro2 from '@/assets/intro-2.jpg'
import intro3 from '@/assets/intro-3.jpg'

import introSound from '@/assets/intro-sound.mp3'

const IMAGES = [
  intro1,
  intro2,
  intro3
]

export default function Intro() {
  const [isStopConfetti, setIsStopConfetti] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => {
      setIsStopConfetti(true)
    }, 5000)
    return () => {
      clearTimeout(t)
    }
  }, [])

  function playSound() {
    const s = new Howl({
      src: [introSound]
    })
    s.play()
  }

  return (
    <>
      <div className="p-4">
        <h1 className="text-xl font-bold mb-4">Siapa sih Suci Keiva Mulyana</h1>
        <p className="mb-2">Dia adalah orang terkeren terbaik yang ada didunia ini tau. Dia itu Sarjana Lingkungan di <a className="underline text-blue-400" href="https://www.unand.ac.id/" target="_blank">Universitas Andalas <Link className="inline w-4 h-4" /></a> dan Magister Lingkungan di <a className="underline text-blue-400" href="https://itb.ac.id/" target="_blank">Institut Teknologi Bandung <Link className="inline w-4 h-4" /></a>. Keren banget kan, terus dia baru aja lolos jadi PNS peringkat satu lagi dengan skor paling tinggi. Gila keren banget kan, didunia ini mana yang gaakan suka dengan Suci Keiva Mulyana.</p> 
        <p className="text-xs font-light">Bisa di slide tau</p>
        <Carousel className="w-full">
          <CarouselContent>
            {IMAGES.map((d, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <Card>
                    <CardContent className="flex aspect-square items-center justify-center p-6">
                      <img className="rounded" src={d} />
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <p onClick={playSound} className="italic text-sm underline">Uang nya ga habis habis</p>
      </div>
      <Confetti recycle={!isStopConfetti} />
    </>
  ) 
}
