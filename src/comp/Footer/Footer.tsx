import * as React from 'react'

const footerStyle = {
  backgroundColor: '#111111',
  padding: '24px',
  textAlign: 'center',
  color: 'white'
}

export const Footer = () => {
  return (
    <div style={footerStyle}>
      CrystalCube &copy; 2017
    </div>
  )
}