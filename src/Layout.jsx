import { useRef } from 'react'
import { useLocation, useNavigate, Outlet } from "react-router";
import { Howl } from 'howler'
import { motion } from "motion/react"
import { SoundContext } from '@/hooks/use-sound.js'
import { Button } from "@/components/ui/button"
import ArrowRight from '@/components/icons/ArrowRight.jsx'
import ArrowLeft from '@/components/icons/ArrowLeft.jsx'

import onNextSound from '@/assets/on-next-sound.mp3'
import onPrevSound from '@/assets/on-prev-sound.mp3'
import safeAndSound from '@/assets/safe-and-sound.mp3'
import chillSound from '@/assets/chill.mp3'
import pianoSound from '@/assets/piano.mp3'
import loveStorySound from '@/assets/love-story.mp3'

const ROUTES = [
  '/',
  '/intro',
  '/grateful',
  '/sorry',
  '/thanks',
  '/related',
]

export default function Layout() {
  const soundRef = useRef(null)
  const location = useLocation()
  const navigate = useNavigate()
  const nextRouteIdx = ROUTES.indexOf(location.pathname) + 1
  const prevRouteIdx = ROUTES.indexOf(location.pathname) - 1

  function onNext() {
    soundRef.value?.stop()
    if (ROUTES[nextRouteIdx] == '/related') {
      soundRef.value = new Howl({
        src: [safeAndSound],
        html5: true
      })
      soundRef.value.play()     
    } else if (ROUTES[nextRouteIdx] == '/intro') {
      soundRef.value = new Howl({
        src: [chillSound],
        loop: true,
        html5: true
      })
      soundRef.value.play()     
    } else if (ROUTES[nextRouteIdx] == '/sorry') {
      soundRef.value = new Howl({
        src: [pianoSound],
        html5: true
      })
      soundRef.value.play()     
    } else if (ROUTES[nextRouteIdx] == '/grateful') {
      soundRef.value = new Howl({
        src: [loveStorySound],
        html5: true
      })
      soundRef.value.play()          
    } else {
      soundRef.value = new Howl({
        src: [onNextSound],
        html5: true
      })
      soundRef.value.play()
    }
    navigate(ROUTES[nextRouteIdx])
  }

  function onPrev() {
    soundRef.value?.stop()
    soundRef.value = new Howl({
      src: [onPrevSound],
      html5: true
    })
    soundRef.value.play()
    navigate(ROUTES[prevRouteIdx]) 
  }

  return (
    <div className="w-screen h-screen flex flex-col">
      <motion.div 
        className="flex-1"
        key={location.pathname}
        initial={{
          opacity: 0,
          y: 100,
        }}
        animate={{
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.3,
          },
        }}
      >
        <SoundContext.Provider value={{
          soundRef,
        }}>
          <Outlet />
        </SoundContext.Provider>
      </motion.div>

      <div className="flex justify-between px-8 pb-12">
        { prevRouteIdx > -1 ? <Button onClick={onPrev}>
          <ArrowLeft /> Kembali
        </Button> : <div></div> }
        { nextRouteIdx < ROUTES.length && <Button onClick={onNext}>
            Lanjutkan <ArrowRight />
        </Button> }
      </div>
    </div>
  )
}
