import { useState } from 'react'
import { Howl } from 'howler'
import { useSound } from '@/hooks/use-sound.js'
import { Button } from '@/components/ui/button'
import Play from '@/components/icons/Play.jsx'

import gratefulSound from '@/assets/grateful-sound.mp3'
const gratefulVideo = 'https://firebasestorage.googleapis.com/v0/b/educonnect-examedu.appspot.com/o/grateful-video.mov?alt=media&token=7d996796-b070-4cc9-bb37-adf8066341eb'

export default function Grateful() {
  const sound = useSound()
  const [isShowVideo, setIsShowVideo] = useState(false)

  function playSound() {
    sound.soundRef.value?.stop()
    const s = new Howl({
      src: [gratefulSound],
      html5: true
    })
    s.play()
  }

  return <>
    <div className="p-4">
      <p className="mb-2">Disini sang kreator sangat bersyukur memiliki Suci Keiva Mulyana dalam hidupnya</p>
      <p className="mb-2">Suci Keiva Mulyana mengajarkan banyak sekali pembelajaran dalam hidup ini</p>
      <p className="text-xs font-light mb-1">Kreator pernah bilang gini:</p>
      <blockquote className="border-l-2 pl-6 text-2xl italic mb-6 font-covered-by-your-grace">
        Akan ku lakukan apapun untuk Dirimu, even itu berbuat yang dilarang. Dan kematian
      </blockquote>
      <Button onClick={playSound} className="mb-4"><Play />Mainkan</Button>
      <p className="mb-2">Sekali lagi kreator sangat bersyukur sekali memiliki Suci Keiva Mulyana di hidupnya</p>
      <p className="mb-2 text-xs font-light">Maaf ya load video nya agak lemot</p> 
      { isShowVideo ? (
        <video preload="auto" className="w-full" controls>
          <source src={gratefulVideo} type="video/mp4" />
        </video>
      ) : (
        <Button onClick={() => setIsShowVideo(true)}><Play />Lihat video</Button>
      ) }
      
      
    </div>
  </>
}
