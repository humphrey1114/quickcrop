import { useState, useCallback, useRef } from 'react'

export default function useHistory(initial) {
  const [state, setState] = useState(initial)
  const pastRef = useRef([])
  const futureRef = useRef([])
  const skipRef = useRef(false)
  const [, forceUpdate] = useState(0)

  const set = useCallback((updater, { track = true } = {}) => {
    setState(prev => {
      const next = typeof updater === 'function' ? updater(prev) : updater
      if (track && !skipRef.current) {
        pastRef.current = [...pastRef.current, prev]
        futureRef.current = []
      }
      return next
    })
    if (track) forceUpdate(n => n + 1)
  }, [])

  const undo = useCallback(() => {
    if (pastRef.current.length === 0) return
    setState(prev => {
      const previous = pastRef.current[pastRef.current.length - 1]
      pastRef.current = pastRef.current.slice(0, -1)
      futureRef.current = [...futureRef.current, prev]
      return previous
    })
    forceUpdate(n => n + 1)
  }, [])

  const redo = useCallback(() => {
    if (futureRef.current.length === 0) return
    setState(prev => {
      const next = futureRef.current[futureRef.current.length - 1]
      futureRef.current = futureRef.current.slice(0, -1)
      pastRef.current = [...pastRef.current, prev]
      return next
    })
    forceUpdate(n => n + 1)
  }, [])

  const undoAll = useCallback(() => {
    if (pastRef.current.length === 0) return
    setState(prev => {
      const first = pastRef.current[0]
      futureRef.current = [...futureRef.current, prev, ...pastRef.current.slice(1).reverse()]
      pastRef.current = []
      return first
    })
    forceUpdate(n => n + 1)
  }, [])

  const redoAll = useCallback(() => {
    if (futureRef.current.length === 0) return
    setState(prev => {
      const last = futureRef.current[0]
      pastRef.current = [...pastRef.current, prev, ...futureRef.current.slice(1).reverse()]
      futureRef.current = []
      return last
    })
    forceUpdate(n => n + 1)
  }, [])

  const canUndo = pastRef.current.length > 0
  const canRedo = futureRef.current.length > 0
  const historyInfo = {
    pastLength: pastRef.current.length,
    futureLength: futureRef.current.length,
  }

  return [state, set, { undo, redo, undoAll, redoAll, canUndo, canRedo, historyInfo }]
}
