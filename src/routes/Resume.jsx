import React from 'react'

const Resume = () => {
  return (
    <div 
      style={{
        height: '100vh',    // 父容器占满整个屏幕高度
        display: 'flex', 
        flexDirection: 'column', 
        margin: 0,
      }}
    >

    <div style={{ flex: 1 }}>
      {/* <Navbar/> */}
      <embed src="/Portfolio/assets/resume.pdf" width="100%" height="100%" style={{ border: 'none' }}  />
      {/* <a href="/assets/resume.pdf" target="_blank" rel="noopener noreferrer">View Resume</a> */}
      {/* <Footer/> */}
    </div>
    </div>

  )
}

export default Resume
