import React from 'react'

import InstagramIcon from '@mui/icons-material/Instagram'
import TwitterIcon from '@mui/icons-material/Twitter'
import FacebookIcon from '@mui/icons-material/Facebook'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import '../styles/footer.css'


function footer() {
  return (
    <div className='footer'>
      <div className='socialMedia'> 
        <InstagramIcon/>
        <TwitterIcon/>
        <FacebookIcon/>
        <LinkedInIcon/>
      </div>
      <p> &copy; 2021 Pedropzza.com</p>

    </div>
  )
}

export default footer
