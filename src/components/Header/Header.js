import React from 'react'

function Header() {
  return (
    <div className='header'>
      <div className='header_name'>
        <h6>V.Naletski</h6>
      </div>
      <div className='header_about'>
        <a href='#about'>
          <h6 variant='h6'>About me</h6>
        </a>
      </div>
      <div className='header_projects'>
        <a href='#projects'>
          <h6 variant='h6'>My projects</h6>
        </a>
      </div>
      <div className='header_skills'>
        <a href='#skills'>
          <h6 variant='h6'>Skills</h6>
        </a>
      </div>
      <div className='header_contact'>
        <h6 className='header_contact_btn'>Contact me</h6>
      </div>
    </div>
  )
}

export default Header