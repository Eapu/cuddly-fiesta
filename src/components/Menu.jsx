import { useStore } from '../hooks/useStore.js'

export const Menu = () => {
  const [saveWorld, resetWorld] = useStore((state) => [state.saveWorld, state.resetWorld])

  return ( <div className="menu">
    <button onClick={()=> saveWorld()}>save me</button>
    <button onClick={()=> resetWorld()}>reset me</button>
  </div>

  )
}