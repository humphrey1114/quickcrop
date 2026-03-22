import { Component } from 'react'

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch(error, info) {
    console.error('TapCrop error:', error, info)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
          minHeight: '100vh', padding: '40px', textAlign: 'center', fontFamily: 'system-ui, sans-serif',
          background: '#f5f2ed', color: '#333',
        }}>
          <div style={{ fontSize: '48px', marginBottom: '16px' }}>:(</div>
          <h1 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '8px' }}>Something went wrong</h1>
          <p style={{ fontSize: '14px', color: '#666', marginBottom: '24px', maxWidth: '400px' }}>
            An unexpected error occurred. Your images are safe — TapCrop processes everything locally.
          </p>
          <button
            onClick={() => window.location.reload()}
            style={{
              padding: '10px 24px', fontSize: '14px', fontWeight: 600,
              background: '#1a1a1a', color: '#fff', border: 'none',
              borderRadius: '8px', cursor: 'pointer',
            }}
          >
            Reload TapCrop
          </button>
        </div>
      )
    }
    return this.props.children
  }
}
