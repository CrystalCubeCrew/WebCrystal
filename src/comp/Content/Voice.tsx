import * as React from 'react'

import './Voice.scss'

interface VoiceProps {
  onClick:any
}

export class Voice extends React.Component<VoiceProps, undefined> {
  render() {
    return (
      <div className="voice-button" onClick={this.props.onClick}>
        <img src="http://iconshow.me/media/images/ui/ios7-icons/png/128/mic.png" width="24px" alt=""/>
      </div>
    )
  }
}