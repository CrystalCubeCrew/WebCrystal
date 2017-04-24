declare var require: any

// Lib Import
import * as React from "react"
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

// Assets Import
import './WebCrystal.scss'
const logo = require('../assets/logo.png')

// Component Import
import { Nav } from './Nav/Nav'
import { Content } from './Content/Content'
import { About } from './Content/About'
import { Home } from './Content/Home'
import { Crystal } from './Crystal/Crystal'
import { FirebaseLogin } from './FirebaseLogin/FirebaseLogin'
import { Footer } from './Footer/Footer'

interface WebCrystalProps {
  db:any
}

interface WebCrystalState {
  time:Date
  content:any
  items:any
}

export class WebCrystal extends React.Component<WebCrystalProps, WebCrystalState> {
  componentWillMount() {
    this.setState({
      content: <Home />,
      items : [
        {
          key: 1,
          content: <div>Features</div>,
          onClick: () => this.setContent(<Home />)
        },
        {
          key: 2,
          content: <div>About</div>,
          onClick: () => this.setContent(<About />)
        },
        {
          key: 3,
          style: {
            backgroundColor:"#3366ff",
            color: "white"
          },
          content: <div>Login</div>,
          onClick: () => this.setContent(<FirebaseLogin />)
        }
      ]
    })
  }

  render() {
    this.props.db.ref('/').once('value', (snap: any) => {
      console.log(snap.val())
    })

    return (
      <div className="webcrystal">
        <Nav logo={logo} items={this.state.items} />
        <Content page={this.state.content}/>
        <Footer />
      </div>
    )
  }

  setContent(value: any) {
    this.setState({
      content: value
    })
  }
}