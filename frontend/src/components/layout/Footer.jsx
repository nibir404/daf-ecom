import React from 'react'

const Footer = () => {
  return (
    <footer>
      <div className='footer-main w-full flex justify-between items-center'>
        <p>© 2026 DAF E-com. All rights reserved</p>
        <div className='terms-privacy flex gap-4'>
          <a href="#">Terms of Service</a>
          <a href="#">Privacy Policy</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
