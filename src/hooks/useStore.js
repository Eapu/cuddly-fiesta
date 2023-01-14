import { nanoid } from 'nanoid'
import create from 'zustand'

const getLocalStorage = (key) => JSON.parse(window.localStorage.getItem(key))
const setLocalStorage = (key, value) => window.localStorage.setItem(key, JSON.stringify(value))

export const useStore = create(set => ({
  texture: 'dirt',
  override: false,
  spheres:getLocalStorage('spheres') ||[],
  cubes: getLocalStorage('cubes') || [],
  addCube: (x, y, z) => {
    set(prev => ({
      cubes: [...prev.cubes, {
        key: nanoid(),
        texture: prev.texture,
        pos: [x, y, z]
      }]
    }))
  },
  removeCube: (x, y, z) => {
    set((prev) => ({
      cubes: prev.cubes.filter(cube => {
        const[X, Y, Z] = cube.pos
        return X !== x || Y !== y || Z !== z
      })
    }))
  },
  addSphere: (x, y, z) => {
    set(prev => ({
      spheres: [...prev.spheres, {
        key: nanoid(),
        texture: prev.texture,
        pos: [x, y, z]
      }]
    }))
  },
  removeSphere: (x, y, z) => {
    set((prev) => ({
      spheres: prev.spheres.filter(sphere => {
        const[X, Y, Z] = sphere.pos
        return X !== x || Y !== y || Z !== z
      })
    }))
  },
  setOverride: () => set((state) => ({ override: !state.override })),

  setTexture: (texture) => {
    set(() => ({ texture }))
  },
  saveWorld: () => {
    set((prev)=> {
      setLocalStorage('cubes', prev.cubes)
      setLocalStorage('spheres', prev.spheres)

    })
  },
  resetWorld: () => {
    set(()=> ({
      cubes:[],
      spheres:[]
    }))
  },
}))

/*
{
  id: nanoid(),
  pos: [1, 1, 1],
  texture: 'dirt'
},{
  id: nanoid(),
  pos: [1, 5, 1],
  texture: 'dirt'
},{
  id: nanoid(),
  pos: [1, 2, 1],
  texture: 'dirt'
}
*/