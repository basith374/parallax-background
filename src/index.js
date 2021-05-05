import React, { useEffect, useRef } from 'react'
import styles from './styles.module.css'

const MARGIN = 100
const STEP = 0.2

export const Parallax = ({ images }) => {
  const refs = useRef({})
  const parent = useRef()
  useEffect(() => {
    for (const i in refs.current) {
      const el = refs.current[i]
      el.style.width = el.offsetWidth + MARGIN + 'px'
      el.style.height = el.offsetHeight + MARGIN + 'px'
      el.style.left = -(MARGIN / 2) + 'px'
      el.style.top = -(MARGIN / 2) + 'px'
    }
  }, [])
  function onMouseMove({ clientX, clientY, target }) {
    const width = target.offsetWidth
    const height = target.offsetHeight
    const left = ((clientX - parent.current.offsetLeft) / width) * MARGIN
    const top = ((clientY - parent.current.offsetTop) / height) * MARGIN
    for (const i in refs.current) {
      const el = refs.current[i]
      const ratio = 1 - STEP * i
      el.style.left = ratio * (left - MARGIN) + 'px'
      el.style.top = ratio * (top - MARGIN) + 'px'
    }
  }
  return (
    <div className={styles.container} ref={parent} onMouseMove={onMouseMove}>
      {images.map((f, k) => (
        <img
          ref={(ref) => {
            refs.current[k] = ref
          }}
          src={f}
          key={k}
        />
      ))}
    </div>
  )
}
