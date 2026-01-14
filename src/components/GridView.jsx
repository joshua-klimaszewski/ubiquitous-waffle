import './GridView.css'

const TRACKS = [
  { id: 'kick', name: 'KICK', color: '#E74C3C' },
  { id: 'snare', name: 'SNARE', color: '#3498DB' },
  { id: 'clhi', name: 'CL HI', color: '#1ABC9C' },
  { id: 'ophi', name: 'OP HI', color: '#E67E22' },
  { id: 'ride', name: 'RIDE', color: '#9B59B6' },
  { id: 'tamb', name: 'TAMB', color: '#2ECC71' },
]

function GridView() {
  return (
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
                style={{ borderColor: track.color }}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default GridView
