import { useState } from 'react'
import './App.css'

const TRACKS = [
  { id: 'kick', name: 'KICK', color: '#E74C3C' },
  { id: 'snare', name: 'SNARE', color: '#3498DB' },
  { id: 'clhi', name: 'CL HI', color: '#1ABC9C' },
  { id: 'ophi', name: 'OP HI', color: '#E67E22' },
  { id: 'ride', name: 'RIDE', color: '#9B59B6' },
  { id: 'tamb', name: 'TAMB', color: '#2ECC71' },
]

function App() {
  const [activeView, setActiveView] = useState('GRID')
  const [bpm] = useState(120)
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <div className="app">
      <header className="header">
        <button className="menu-btn">
          <span></span>
          <span></span>
          <span></span>
        </button>
        <div className="bpm-display">{bpm} BPM</div>
        <button
          className={`play-btn ${isPlaying ? 'playing' : ''}`}
          onClick={() => setIsPlaying(!isPlaying)}
        >
          {isPlaying ? '■' : '▶'}
        </button>
      </header>

      <main className="main-content">
        {activeView === 'GRID' && (
          <div className="grid-view">
            {TRACKS.map(track => (
              <div key={track.id} className="track-row">
                <div className="track-info">
                  <div
                    className="track-icon"
                    style={{ borderColor: track.color }}
                  />
                  <span className="track-name">{track.name}</span>
                </div>
                <div className="steps">
                  {[...Array(8)].map((_, i) => (
                    <div
                      key={i}
                      className="step"
                      style={{
                        borderColor: track.color,
                        backgroundColor: 'transparent'
                      }}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {activeView === 'PADS' && (
          <div className="pads-view">
            <p>Pads View - Coming Soon</p>
          </div>
        )}

        {activeView === 'MIXER' && (
          <div className="mixer-view">
            <p>Mixer View - Coming Soon</p>
          </div>
        )}
      </main>

      <nav className="nav-tabs">
        {['GRID', 'PADS', 'MIXER'].map(view => (
          <button
            key={view}
            className={`nav-tab ${activeView === view ? 'active' : ''}`}
            onClick={() => setActiveView(view)}
          >
            {view}
          </button>
        ))}
      </nav>
    </div>
  )
}

export default App
