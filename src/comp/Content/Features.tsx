declare var require: any

import * as React from 'react'

import './Features.scss'

const ft1 = require('../../assets/ft1.png')
const ft2 = require('../../assets/ft2.png')
const ft3 = require('../../assets/ft3.png')

export const Features = () => (
  <div className="features">
    <h3>Features</h3>
    <div className="fts ctn">
      <div className="ft">
        <img src={ft1} alt="Speech Recognition" />
        <h4>Speech Recognition</h4>
        <small>Natural language processing powered by API.AI</small>
      </div>
      <div className="ft">
        <img src={ft2} alt="Interactive Avatar" />
        <h4>Interactive Avatar</h4>
        <small>Crystal-chan is an energetic chatbot, designed in Blender and displayed through Unity3D</small>
      </div>
      <div className="ft">
        <img src={ft3} alt="User Personalization" />
        <h4>User Personalization</h4>
        <small>Sync user data across the cloud, powered by Amazon Web Services</small>
      </div>
    </div>
  </div>
)