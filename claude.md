# 🥁 Drum Machine Project

A browser-based drum machine built with modern web technologies for creating beats and rhythms.

## Overview

This project is an interactive drum machine that allows users to create, play, and sequence drum patterns in real-time. Perfect for musicians, producers, and anyone who wants to experiment with rhythm and beat-making.

## Features

### Core Functionality
- **16-step sequencer** - Classic drum machine pattern programming
- **Multiple drum sounds** - Kick, snare, hi-hat, clap, toms, cymbals, and more
- **Real-time playback** - Instant audio feedback with precise timing
- **BPM control** - Adjustable tempo from 60-200 BPM
- **Pattern switching** - Save and load multiple patterns
- **Visual feedback** - Animated step indicators during playback

### Advanced Features (Planned)
- **Velocity control** - Adjust volume per step
- **Swing/shuffle** - Add groove to your beats
- **Pattern chaining** - Arrange patterns into songs
- **Sample loading** - Import your own drum sounds
- **Export functionality** - Save patterns and audio recordings
- **MIDI support** - Connect external controllers

## Technical Architecture

### Tech Stack
- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Audio Engine**: Web Audio API
- **UI Framework**: Vanilla JS or React (to be determined)
- **Build Tools**: Vite or Webpack
- **Testing**: Jest or Vitest

### Project Structure
```
drum-machine/
├── src/
│   ├── audio/
│   │   ├── AudioEngine.js      # Web Audio API wrapper
│   │   ├── Sequencer.js        # Step sequencer logic
│   │   └── SampleLoader.js     # Audio sample management
│   ├── ui/
│   │   ├── DrumPad.js          # Individual drum pad component
│   │   ├── StepSequencer.js    # 16-step grid component
│   │   ├── Controls.js         # Transport and BPM controls
│   │   └── PatternManager.js   # Pattern save/load UI
│   ├── utils/
│   │   ├── timing.js           # Precise timing utilities
│   │   └── storage.js          # Local storage helpers
│   ├── samples/                # Drum sound files
│   │   ├── kick.wav
│   │   ├── snare.wav
│   │   ├── hihat-closed.wav
│   │   └── ...
│   ├── styles/
│   │   └── main.css
│   └── main.js                 # Application entry point
├── public/
│   └── index.html
├── tests/
├── package.json
└── README.md
```

## Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn
- Modern web browser with Web Audio API support

### Installation
```bash
# Clone the repository
git clone <repository-url>
cd ubiquitous-waffle

# Install dependencies
npm install

# Start development server
npm run dev
```

### Basic Usage
1. Click on the grid to program your pattern
2. Press play to hear your beat
3. Adjust BPM using the tempo slider
4. Click individual pads to trigger sounds manually
5. Save your patterns for later

## Audio Architecture

### Web Audio API Implementation
The drum machine uses the Web Audio API for low-latency, precise audio playback:

- **AudioContext**: Central audio processing graph
- **AudioBufferSourceNode**: Playback of drum samples
- **GainNode**: Volume control per channel
- **DynamicsCompressorNode**: Master output compression
- **Scheduling**: Look-ahead scheduling for precise timing

### Timing System
To ensure tight, accurate timing:
- Uses `requestAnimationFrame` for visual updates
- Implements look-ahead scheduling (100-200ms)
- Schedules notes with `AudioContext.currentTime`
- Maintains separate audio and visual clocks

## Development Roadmap

### Phase 1: Core Foundation
- [ ] Set up project structure and build system
- [ ] Implement basic Web Audio API wrapper
- [ ] Load and play single drum samples
- [ ] Create basic UI layout

### Phase 2: Sequencer
- [ ] Build 16-step sequencer logic
- [ ] Implement playback engine with accurate timing
- [ ] Add play/stop/reset controls
- [ ] Create grid UI for pattern programming
- [ ] Add BPM control

### Phase 3: Multiple Tracks
- [ ] Support multiple drum tracks (8 channels)
- [ ] Load different samples per track
- [ ] Individual track mute/solo
- [ ] Volume control per track

### Phase 4: Pattern Management
- [ ] Save patterns to local storage
- [ ] Load saved patterns
- [ ] Pattern browser UI
- [ ] Clear/initialize patterns

### Phase 5: Polish & Features
- [ ] Add swing/shuffle
- [ ] Velocity control per step
- [ ] Visual feedback and animations
- [ ] Keyboard shortcuts
- [ ] Mobile responsive design

### Phase 6: Advanced Features
- [ ] Pattern chaining/song mode
- [ ] Audio export (WAV/MP3)
- [ ] Custom sample loading
- [ ] MIDI input support
- [ ] Preset patterns library

## Design Considerations

### Performance
- Efficient audio buffer management
- Minimal DOM manipulation during playback
- Optimized rendering with requestAnimationFrame
- Web Workers for heavy processing (if needed)

### User Experience
- Intuitive grid-based interface
- Immediate audio feedback
- Visual indication of current step
- Responsive controls
- Keyboard shortcuts for power users

### Browser Compatibility
- Modern browsers with Web Audio API
- Graceful degradation for older browsers
- Mobile touch support
- Cross-browser testing

## Resources

### Web Audio API
- [MDN Web Audio API Documentation](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API)
- [Web Audio API Best Practices](https://developers.google.com/web/updates/2017/09/autoplay-policy-changes)

### Drum Machine Design
- Classic drum machines: Roland TR-808, TR-909, Akai MPC
- Modern web implementations for inspiration
- Audio programming patterns and techniques

### Sound Design
- Royalty-free drum sample packs
- Sample rate and format considerations (WAV, 44.1kHz)
- Audio processing and effects

## Contributing

This project is in active development. Contributions welcome!

### Areas for Contribution
- Additional drum samples
- UI/UX improvements
- Performance optimizations
- Bug fixes and testing
- Documentation improvements

## License

To be determined

## Acknowledgments

Inspired by classic drum machines and the amazing web audio community.

---

**Let's make some beats! 🎵**
