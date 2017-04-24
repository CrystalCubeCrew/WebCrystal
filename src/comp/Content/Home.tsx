declare var require: any

// Lib Import
import * as React from "react"

const webcrystalLogo = require('../../assets/logo.png')

// Style Import
import './Home.scss'

import { Features } from './Features'

export const Home = () => (
  <div className="home">
    <img src={webcrystalLogo} alt="WebCrystal Logo" width="120px"/>
    <h1 className="home-title">CrystalCube</h1>
    <h4 className="home-subtitle font-effect-anaglyph">Holographic Virtual Assistant</h4>
    <Features />
  </div>
)