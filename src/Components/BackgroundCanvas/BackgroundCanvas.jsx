import React, { useEffect, useRef } from 'react'
import './BackgroundCanvas.css'

const NODE_COLORS = [
  [0,   245, 200],
  [185,  35, 225],
  [8,   223, 162],
  [255,  21, 251],
]

const NODE_COUNT   = 70
const CONNECT_DIST = 140
const BASE_SPEED   = 0.9   // increase this to go faster

function makeNode(W, H) {
  const angle = Math.random() * Math.PI * 2
  const speed = BASE_SPEED * (0.6 + Math.random() * 0.8)
  return {
    x:        Math.random() * W,
    y:        Math.random() * H,
    vx:       Math.cos(angle) * speed,
    vy:       Math.sin(angle) * speed,
    r:        1.4 + Math.random() * 2.6,
    col:      NODE_COLORS[Math.floor(Math.random() * NODE_COLORS.length)],
    pulse:    Math.random() * Math.PI * 2,
    pulseSpd: 0.025 + Math.random() * 0.02,
  }
}

const BackgroundCanvas = () => {
  const canvasRef = useRef(null)
  const frameRef  = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')

    let W = window.innerWidth
    let H = window.innerHeight
    canvas.width  = W
    canvas.height = H

    const nodes = Array.from({ length: NODE_COUNT }, () => makeNode(W, H))

    const onResize = () => {
      W = window.innerWidth
      H = window.innerHeight
      canvas.width  = W
      canvas.height = H
    }
    window.addEventListener('resize', onResize, { passive: true })

    const draw = () => {
      ctx.clearRect(0, 0, W, H)

      /* update nodes — pure autonomous movement */
      nodes.forEach(n => {
        n.pulse += n.pulseSpd
        n.x += n.vx
        n.y += n.vy

        /* bounce off walls */
        if (n.x < 0) { n.x = 0; n.vx *= -1 }
        if (n.x > W) { n.x = W; n.vx *= -1 }
        if (n.y < 0) { n.y = 0; n.vy *= -1 }
        if (n.y > H) { n.y = H; n.vy *= -1 }
      })

      /* connections */
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i], b = nodes[j]
          const dx = a.x - b.x, dy = a.y - b.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < CONNECT_DIST) {
            const t  = 1 - dist / CONNECT_DIST
            const al = t * t * 0.45
            const lg = ctx.createLinearGradient(a.x, a.y, b.x, b.y)
            lg.addColorStop(0, `rgba(${a.col[0]},${a.col[1]},${a.col[2]},${al})`)
            lg.addColorStop(1, `rgba(${b.col[0]},${b.col[1]},${b.col[2]},${al})`)
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.strokeStyle = lg
            ctx.lineWidth   = t * 1.2
            ctx.stroke()
          }
        }
      }

      /* nodes */
      nodes.forEach(n => {
        const [r, g, b] = n.col
        const pr = n.r + Math.sin(n.pulse) * 0.9

        /* outer glow */
        const glow = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, pr * 6)
        glow.addColorStop(0,   `rgba(${r},${g},${b},0.28)`)
        glow.addColorStop(0.4, `rgba(${r},${g},${b},0.08)`)
        glow.addColorStop(1,   `rgba(${r},${g},${b},0)`)
        ctx.beginPath()
        ctx.arc(n.x, n.y, pr * 6, 0, Math.PI * 2)
        ctx.fillStyle = glow
        ctx.fill()

        /* mid ring */
        ctx.beginPath()
        ctx.arc(n.x, n.y, pr * 2.2, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${r},${g},${b},0.12)`
        ctx.fill()

        /* colored core */
        ctx.beginPath()
        ctx.arc(n.x, n.y, pr, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${r},${g},${b},0.85)`
        ctx.fill()

        /* white center */
        ctx.beginPath()
        ctx.arc(n.x, n.y, pr * 0.38, 0, Math.PI * 2)
        ctx.fillStyle = 'rgba(255,255,255,0.9)'
        ctx.fill()
      })

      frameRef.current = requestAnimationFrame(draw)
    }
    draw()

    return () => {
      cancelAnimationFrame(frameRef.current)
      window.removeEventListener('resize', onResize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="bg-neural-canvas"
      aria-hidden="true"
    />
  )
}

export default BackgroundCanvas