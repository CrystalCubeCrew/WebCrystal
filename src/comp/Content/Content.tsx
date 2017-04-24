// Lib Import
import * as React from "react"

// Style Import
import './Content.scss'

// Component Import
import { Voice } from './Voice'

export interface ContentProps {
  page:any
}

export class Content extends React.Component<ContentProps, undefined> {
  render() {
    return (
      <div className="content">
        <div className="bokeh-underlay"/>
        <div className="page">
          {this.props.page}
        </div>
        <Voice onClick={() => alert('Coming Soon!')} />
      </div>
    )
  }
}