// Lib Import
import * as React from "react"

// Assets Import
import './Nav.scss'

// Component Import
import { NavItems } from './NavItems'
import { NavLogo } from './NavLogo'

// Props Interface
export interface NavProps {
  logo:string
  items:any[]
}

export class Nav extends React.Component<NavProps, undefined> {
  render() {
    return (
      <div className="nav container">
        <NavLogo logo={this.props.logo} />
        <NavItems items={this.props.items} />
      </div>
    )
  }
}