import './Navigation.css'

const VIEWS = ['GRID', 'PADS', 'MIXER']

function Navigation({ activeView, onViewChange }) {
  return (
    <nav className="nav-tabs">
      {VIEWS.map(view => (
        <button
          key={view}
          className={`nav-tab ${activeView === view ? 'active' : ''}`}
          onClick={() => onViewChange(view)}
        >
          {view}
        </button>
      ))}
    </nav>
  )
}

export default Navigation
