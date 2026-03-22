import './ProcessingRing.css'

export default function ProcessingRing({ status }) {
  if (status === 'done') {
    return (
      <div className="ring-wrap ring-done">
        <svg viewBox="0 0 36 36" className="ring-svg">
          <circle className="ring-bg-done" cx="18" cy="18" r="15" />
          <path className="ring-check" d="M10 18l5 5 11-11" />
        </svg>
      </div>
    )
  }

  if (status === 'error') {
    return (
      <div className="ring-wrap ring-error">
        <svg viewBox="0 0 36 36" className="ring-svg">
          <circle className="ring-bg-error" cx="18" cy="18" r="15" />
          <path className="ring-x" d="M13 13l10 10M23 13l-10 10" />
        </svg>
      </div>
    )
  }

  return (
    <div className="ring-wrap ring-processing">
      <svg viewBox="0 0 36 36" className="ring-svg">
        <circle className="ring-track" cx="18" cy="18" r="15" />
        <circle className="ring-fill" cx="18" cy="18" r="15" />
      </svg>
    </div>
  )
}
