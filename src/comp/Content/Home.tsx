// Lib Import
import * as React from "react"

// Style Import
import './Home.scss'

import { Features } from './Features'

export const Home = () => (
  <div className="home">
    <h1 className="home-title font-effect-anaglyph">CrystalCube</h1>
    <h4 className="home-subtitle">Holographic Virtual Assistant</h4>
    <Features />
  </div>
)