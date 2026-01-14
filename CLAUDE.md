# Drum Machine - The Vertical Composer

A mobile-first browser-based drum machine built with React and Vite.

## Tech Stack

- **Framework**: React 18+
- **Build Tool**: Vite
- **Audio Engine**: Web Audio API
- **Styling**: CSS Modules or Tailwind CSS
- **Testing**: Vitest
- **CI/CD**: GitHub Actions
- **Hosting**: GitHub Pages

## UI Design

### Views (Bottom Navigation)
1. **GRID** - Step sequencer view
2. **PADS** - Drum pad trigger view
3. **MIXER** - Channel mixer view

### Drum Tracks (6 channels)
| Track | Color | Icon |
|-------|-------|------|
| KICK | Red (#E74C3C) | Kick drum |
| SNARE | Blue (#3498DB) | Snare drum |
| CL HI | Teal (#1ABC9C) | Closed hi-hat |
| OP HI | Orange (#E67E22) | Open hi-hat |
| RIDE | Purple (#9B59B6) | Ride cymbal |
| TAMB | Green (#2ECC71) | Tambourine |

### Grid View
- Header: Menu button | BPM display | Play button
- 6 track rows, each with icon + label + 8 step buttons
- Steps are color-coded per track
- Filled circle = active step, hollow circle = inactive

### Pattern Edit State
- Tap track row to expand
- Shows "DONE" button in header
- Sliders for: VOL, PITCH, DECAY, FILTER
- Collapsed tracks visible below

### Mixer View
- 6 vertical faders (color-coded)
- Percentage display per fader
- Pan knobs below each fader
- Track icons at top

## Project Structure

```
ubiquitous-waffle/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Pages deployment
├── src/
│   ├── components/
│   │   ├── Header.jsx          # App header with BPM/play
│   │   ├── Navigation.jsx      # Bottom tab navigation
│   │   ├── GridView.jsx        # Step sequencer grid
│   │   ├── TrackRow.jsx        # Single track row
│   │   ├── TrackEditor.jsx     # Expanded track controls
│   │   ├── PadsView.jsx        # Drum pad interface
│   │   ├── MixerView.jsx       # Channel mixer
│   │   ├── Fader.jsx           # Vertical fader component
│   │   └── PanKnob.jsx         # Pan control knob
│   ├── hooks/
│   │   ├── useAudioEngine.js   # Web Audio API hook
│   │   ├── useSequencer.js     # Sequencer state/logic
│   │   └── usePattern.js       # Pattern management
│   ├── audio/
│   │   ├── AudioEngine.js      # Web Audio wrapper class
│   │   └── samples/            # Drum sound files (.wav)
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
├── public/
│   └── samples/                # Drum samples (public access)
├── index.html
├── package.json
├── vite.config.js
└── CLAUDE.md
```

## Development Plan

### Phase 1: Project Setup & Deploy (Current)
- [x] Initialize repository
- [ ] Create Vite + React project
- [ ] Configure GitHub Actions for Pages deployment
- [ ] Deploy empty app to GitHub Pages
- [ ] Verify deployment pipeline works

### Phase 2: Layout & Navigation
- [ ] Create responsive mobile-first layout
- [ ] Implement Header component (static BPM, play button)
- [ ] Implement bottom Navigation tabs
- [ ] Create view switching (GRID/PADS/MIXER)
- [ ] Add dark theme styling

### Phase 3: Grid View (Static)
- [ ] Create TrackRow component
- [ ] Render 6 tracks with icons and labels
- [ ] Add 8 step buttons per track
- [ ] Implement step toggle (visual only)
- [ ] Color-code steps by track

### Phase 4: Audio Engine
- [ ] Set up Web Audio API context
- [ ] Load drum samples
- [ ] Implement sample playback
- [ ] Create useAudioEngine hook
- [ ] Test individual sound triggers

### Phase 5: Sequencer
- [ ] Implement sequencer timing logic
- [ ] Connect grid state to sequencer
- [ ] Add play/stop functionality
- [ ] Visual step indicator during playback
- [ ] BPM control (60-200)

### Phase 6: Pattern Editor
- [ ] Implement track expansion on tap
- [ ] Create TrackEditor with sliders
- [ ] Add VOL/PITCH/DECAY/FILTER controls
- [ ] Connect controls to audio parameters
- [ ] "DONE" button to collapse

### Phase 7: Mixer View
- [ ] Create Fader component
- [ ] Create PanKnob component
- [ ] Implement MixerView layout
- [ ] Connect faders to track volume
- [ ] Connect pan to stereo positioning

### Phase 8: Pads View
- [ ] Create drum pad grid
- [ ] Touch/click to trigger sounds
- [ ] Visual feedback on trigger
- [ ] Velocity sensitivity (optional)

### Phase 9: Polish & Extras
- [ ] Pattern save/load (localStorage)
- [ ] Swing/shuffle control
- [ ] Preset patterns
- [ ] PWA support for mobile install
- [ ] Performance optimization

## Commands

```bash
# Development
npm install          # Install dependencies
npm run dev          # Start dev server
npm run build        # Production build
npm run preview      # Preview production build
npm run test         # Run tests

# Deployment (automated via GitHub Actions)
git push origin main # Triggers deploy to GitHub Pages
```

## Design Tokens

```css
/* Colors */
--color-kick: #E74C3C;
--color-snare: #3498DB;
--color-clhi: #1ABC9C;
--color-ophi: #E67E22;
--color-ride: #9B59B6;
--color-tamb: #2ECC71;

/* Background */
--bg-primary: #2C3E50;
--bg-secondary: #34495E;
--bg-header: #1a252f;

/* Text */
--text-primary: #ECF0F1;
--text-muted: #95A5A6;
```

## Audio Specs

- Sample format: WAV, 44.1kHz, 16-bit
- Latency target: <20ms
- Scheduling: Look-ahead (100ms buffer)
- BPM range: 60-200
- Steps per pattern: 8

## References

- [Web Audio API - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API)
- [Vite Documentation](https://vitejs.dev/)
- [React Documentation](https://react.dev/)
- [GitHub Pages Deployment](https://vitejs.dev/guide/static-deploy.html#github-pages)
