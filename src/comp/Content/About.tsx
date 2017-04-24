declare var require: any

// Lib Import
import * as React from "react"

// Style Import
import './About.scss'

const logo = require('../../assets/crystalcube.md.png')
const ft2 = require('../../assets/ft2.png')

const team = [
  {
    pic: "",
    name: "John Nguyen",
    team: "WebCrystal"
  },
  {
    pic: "",
    name: "Belcky Bayard",
    team: "Crystal-chan"
  },
  {
    pic: "",
    name: "Mckenzie Cunningham",
    team: "Crystal-chan"
  },
  {
    pic: "",
    name: "Swati Shrivastava",
    team: "Crystal-chan"
  },
  {
    pic: "",
    name: "Chethtra Yen",
    team: "CrystalCloud"
  },
  {
    pic: "",
    name: "Sujen Timila",
    team: "CrystalCloud"
  },
  {
    pic: "",
    name: "Gus Kenion",
    team: "CrystalCube"
  },
  {
    pic: "",
    name: "Michael Bomban",
    team: "CrystalCube"
  },
  {
    pic: "",
    name: "Hong Ear",
    team: "PocketCrystal"
  },
]

export const About = () => (
  <div className="about">
    <img src={logo} alt="CrystalCube Logo" width="80px"/>
    <h1 className="home-title">About Project CrystalCube</h1>
    <div className="about-description">
      <p>
        &emsp;The CrystalCube holographic virtual assistant is a smart home platform centered around the smart home device, the CrystalCube, which aims to improve upon the immersion and accessibility of other smart home devices.
      </p>
      <p>
        &emsp;Like other smart home devices, the CrystalCube platform allows users to use voice commands to retrieve information and perform actions such as retrieving the weather or news, or listening to a song in their music library. Additionally, the CrystalCube synchronizes user data seamlessly with its web platform and Android app through our CrystalCloud platform, allowing users to utilize the platform both at home and on the go.
      </p>
      <p>
        &emsp;Where the CrystalCube differentiates itself is in its use of a visual layer which includes a projected screen and camera. These additional peripherals allow features such as facial recognition for user profiling, gesture recognition for assistant control, and a projection of the Crystal assistant as a mini 3D avatar, providing users with a more immersive and accessible experience than they would be able to have before with other smart home platforms.
      </p>
    </div>
    <hr/>
    <img src={ft2} alt="CrystalCube Logo" height="80px"/>
    <h1 className="home-title">The CrystalCube Crew</h1>
    <div className="team-ctn">
      {
        team.map(member => (
          <div key={member.name}>
            <strong>{member.name}</strong> - {member.team}
          </div>
        ))
      }
    </div>
  </div>
)