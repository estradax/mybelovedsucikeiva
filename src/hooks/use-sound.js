import { createContext, useContext } from 'react';

export const SoundContext = createContext({
  soundRef: null
})

export function useSound() {
  const sound = useContext(SoundContext)
  return sound
}
