import * as React from 'react'

export interface NavItemsProps {
  items:any[]
}

export class NavItems extends React.Component<NavItemsProps, undefined> {
  render() {
    return (
      <div className="nav-items-ctn drop-shadow">
        {this.props.items.map(item => {
          return (
            <div tabIndex={item.key} key={item.key} className="nav-item" style={item.style} onClick={item.onClick}>
              {item.content}
            </div>
          )
        })}
      </div>
    )
  }
}