import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { container, navContainer, link} from './styles.css'

const NavLinks = ({isAuthed}) => {
  return isAuthed === true
  ? <ul>
      <li><Link to='/' className={link}>{'Home'}</Link></li>
    </ul>
  : null
}
  
const ActionLinks = ({isAuthed}) => {
  return isAuthed === true
  ? <ul>
      <li>New Duck</li>
      <li><Link to='/logout' className={link}>{'Logout'}</Link></li>
    </ul>
  : <ul>
      <li><Link to='/' className={link}>{'Home'}</Link></li>
      <li><Link to='/auth' className={link}>{'Authenticate'}</Link></li>
    </ul>
}

const Navigation = ({isAuthed}) => (
  <div className={container}>
      <nav className={navContainer}>
        <NavLinks isAuthed={isAuthed} />
        <ActionLinks isAuthed={isAuthed}/>
      </nav>
  </div>
);

Navigation.propTypes = ActionLinks.propTypes = NavLinks.propTypes = {
  isAuthed: PropTypes.bool.isRequired
}

export default Navigation;