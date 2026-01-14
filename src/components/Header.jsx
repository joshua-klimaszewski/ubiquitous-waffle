import './Header.css'

function Header({ bpm, isPlaying, onPlayToggle }) {
  return (
    <header className="header">
      <button className="menu-btn" aria-label="Menu">
        <span></span>
        <span></span>
        <span></span>
      </button>
      <div className="bpm-display">{bpm} BPM</div>
      <button
        className={`play-btn ${isPlaying ? 'playing' : ''}`}
        onClick={onPlayToggle}
        aria-label={isPlaying ? 'Stop' : 'Play'}
      >
        {isPlaying ? '■' : '▶'}
      </button>
    </header>
  )
}

export default Header
