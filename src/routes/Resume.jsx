import React from 'react'

const Resume = () => {
  return (
    <div 
      style={{
        height: '100vh',    
        display: 'flex', 
        flexDirection: 'column', 
        margin: 0,
      }}
    >

    <div style={{ flex: 1 }}>
      <embed src="/Portfolio/assets/resume.pdf" width="100%" height="100%" style={{ border: 'none' }}  />
    </div>
    </div>

  )
}

export default Resume
