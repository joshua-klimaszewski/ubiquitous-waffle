import { useState } from 'react'
import Header from './components/Header'
import Navigation from './components/Navigation'
import GridView from './components/GridView'
import PadsView from './components/PadsView'
import MixerView from './components/MixerView'
import './App.css'

function App() {
  const [activeView, setActiveView] = useState('GRID')
  const [bpm] = useState(120)
  const [isPlaying, setIsPlaying] = useState(false)

  const renderView = () => {
    switch (activeView) {
      case 'GRID':
        return <GridView />
      case 'PADS':
        return <PadsView />
      case 'MIXER':
        return <MixerView />
      default:
        return <GridView />
    }
  }

  return (
    <div className="app">
      <Header
        bpm={bpm}
        isPlaying={isPlaying}
        onPlayToggle={() => setIsPlaying(!isPlaying)}
      />

      <main className="main-content">
        {renderView()}
      </main>

      <Navigation
        activeView={activeView}
        onViewChange={setActiveView}
      />
    </div>
  )
}

export default App
