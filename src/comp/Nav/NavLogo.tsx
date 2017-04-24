import * as React from 'react'

interface NavLogoProps {
  logo:any
}

export class NavLogo extends React.Component<NavLogoProps, undefined> {
  render() {
    return (
      <div className="nav-logo-ctn drop-shadow">
        <img src={this.props.logo} alt="WebCrystal Logo" className="nav-logo"/>
      </div>
    )
  }
}