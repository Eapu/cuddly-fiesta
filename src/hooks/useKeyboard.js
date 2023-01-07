import { useEffect, useState } from "react"

const ACTION_KEYBOARD_MAP = {
  'KeyW':'moveForward',
  'KeyS':'moveBackward',
  'KeyA':'moveRight',
  'KeyD':'moveLeft',
  'Space':'jump',
  'Digit1':'dirt',
  'Digit2':'grass',
  'Digit3':'glass',
  'Digit4':'wood',
  'Digit4':'log'

}
export const useKeyboard = () => {
  const [actions, setActions] = useState({
    moveForward:false,
    moveBackward:false,
    moveLeft:false,
    moveRight:false,
    jump:false,
    dirt:false,
    grass:false,
    glass:false,
    wood:false,
    loog:false,
    moveLeft:false,
  })

  useEffect(()=>{
    const handleKeyDown = event => {
      const {code} = event
      const action = ACTION_KEYBOARD_MAP[code]

      if (action) {
        setActions(prevActions => ({
          ...prevActions,
          [action]: true

        }))

      }
      console.log(code,'code')
    }

    const handleKeyUp = event => {
      const {code} = event
      const action = ACTION_KEYBOARD_MAP[code]

      if (action) {
        setActions(prevActions => ({
          ...prevActions,
          [action]: false

        }))

      }
      console.log(code,'code')
    }
    document.addEventListener('keydown', handleKeyDown)
    document.addEventListener('keyup', handleKeyUp)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.removeEventListener('keyup', handleKeyUp)

    }
  },[])

  return actions
}
// tb los metodes pueden crearse fuera del useEffect
// y utilizar un useCallback