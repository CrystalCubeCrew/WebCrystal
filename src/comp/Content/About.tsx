declare var require: any

// Lib Import
import * as React from "react"

// Style Import
import './About.scss'

const logo = require('../../assets/crystalcube.md.png')

export const About = () => (
  <div className="about">
    <img src={logo} alt="CrystalCube Logo" width="80px"/>
    <h1 className="home-title">About the CrystalCube Project</h1>
  </div>
)