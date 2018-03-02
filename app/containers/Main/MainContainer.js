import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import { Navigation } from 'components'
import { container, innerContainer } from './styles.css'
import { bindActionCreators } from 'redux'
import * as userActionCreators from 'redux/modules/users'
import { formatUserInfo } from 'helpers/utils'
import { firebaseAuth } from 'config/constants'

class MainContainer extends Component {
  componentDidMount () {
    //check if user is logged in
    firebaseAuth().onAuthStateChanged((user) => {
      if (user) { //if user exists
        const userData = user.providerData[0]
        const userInfo = formatUserInfo(userData.displayName, userData.photoURL, user.uid)
        this.props.authUser(user.uid) //dispatch the action creator
        this.props.fetchingUserSuccess(user.uid, userInfo, Date.now())
        if(this.props.location.pathname === '/') {
          this.context.router.history.replace('feed')
        }
      } else {
        this.props.removeFetchingUser()
      }
    })
  }

  render () {
    return this.props.isFetching === true
      ? null
      : 
      <div className={container}>
        <Navigation isAuthed={this.props.isAuthed}/>
        <div className={innerContainer}>
          {this.props.children}
        </div>
      </div>
  }
}

MainContainer.propTypes = {
  children: PropTypes.any,
  isAuthed: PropTypes.bool.isRequired,
  authUser: PropTypes.func.isRequired,
  fetchingUserSuccess: PropTypes.func.isRequired,
  isFetching: PropTypes.bool.isRequired,
  removeFetchingUser: PropTypes.func.isRequired
}

MainContainer.contextTypes = {
  router: PropTypes.object.isRequired
}

export default withRouter(connect(
  ({users}) => ({ isAuthed: users.isAuthed, isFetching: users.isFetching }),
  (dispatch) => bindActionCreators(userActionCreators, dispatch)
)(MainContainer))
