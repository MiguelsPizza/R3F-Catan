import { createRef, useCallback, useEffect } from 'react'
import { useFrame } from '@react-three/fiber'
import { usePointToPointConstraint, useSphere } from '@react-three/cannon'

const cursor = createRef()


//This is an work in progress to get make items draggable and throwable

function useDragConstraint(child, setToggleOrbit) {
  const [, , api] = usePointToPointConstraint(cursor, child, { pivotA: [0, 0, 0], pivotB: [0, 0, 0] })
  useEffect(() => void api.disable(), [])
  const onPointerUp = useCallback((e) => {
    setToggleOrbit(true)
    document.body.style.cursor = 'grab'
    e.target.releasePointerCapture(e.pointerId)
    api.disable()
  }, [])
  const onPointerDown = useCallback((e) => {
    setToggleOrbit(false)
    document.body.style.cursor = 'grabbing'
    e.stopPropagation()
    e.target.setPointerCapture(e.pointerId)
    api.enable()
  }, [])
  return { onPointerUp, onPointerDown }
}

function Cursor() {
  const [, api] = useSphere(() => ({ collisionFilterMask: 0, type: 'Kinematic', mass: 0, args: [0.5] }), cursor)
  return useFrame((state) => {
    // console.log(state.camera.rotation.z)
    // const eX = state.camera.rotation.x
    // const eY = state.camera.rotation.y
    // const eZ = state.camera.rotation.z
    // const x = state.mouse.x * state.viewport.width
    // const y = (state.mouse.y * state.viewport.height) / 1.9 + -x / 3.5

    const y = state.mouse.y * state.viewport.height * Math.abs(Math.cos(state.camera.rotation.x))// -(Math.PI/4)
    const x = state.mouse.x * state.viewport.width * Math.cos(state.camera.rotation.z) // + state.mouse.y * state.viewport.height * Math.abs(Math.sin(state.camera.rotation.x))
    const z = state.mouse.x * state.viewport.width * -Math.sin(state.camera.rotation.z) //+ state.mouse.y * state.viewport.height * Math.abs(Math.sin(state.camera.rotation.x))
    // const x = state.mouse.x * state.viewport.width * Math.cos(state.camera.rotation.y)
    // console.log(Math.cos(state.camera.rotation.))

    api.position.set(x -5 , y-5, z-5)
  })
}

export { useDragConstraint, cursor, Cursor }
