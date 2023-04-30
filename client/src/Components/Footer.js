import './Footer.css'

function Footer() {

  const curYear = new Date().getFullYear();

  return <footer className='foot'>
    <p id='fid'>  Copyright ©️ {curYear} </p>
  </footer>
}

export default Footer;