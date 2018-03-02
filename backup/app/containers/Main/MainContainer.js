import React, { Component } from 'react'
import { container, innerContainer } from './styles.css'
import { Navigation } from 'components'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import PropTypes from 'prop-types'

class MainContainer extends Component {

render () {
    return (
      <div className={container}>
        <Navigation isAuthed={this.props.isAuthed} />
        <div className={innerContainer}>
          {this.props.children}
        </div>
      </div>
    )
  }
}

MainContainer.propTypes = {
  isAuthed: PropTypes.bool.isRequired
}

//maps store state to this components props. On update forces a refresh
const mapStateToProps = (state) => {
  return {
    isAuthed: state.isAuthed
  }
}

export default withRouter(connect(
  (state) => ({ isAuthed: state.isAuthed })
)(MainContainer))