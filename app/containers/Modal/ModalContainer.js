import React, { Component } from 'react'
import { Modal } from 'components'
import MainContainer from '../Main/MainContainer'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as modalActionCreators from 'redux/modules/modal'
import * as duckActionCreators from 'redux/modules/ducks'

function mapStateToProps ({modal, users}) {
  const duckTextLength = modal.duckText.length
  return {
    user: users[users.authedId] ? users[users.authedId].info : {},
    duckText: modal.duckText,
    isOpen: modal.isOpen,
    isSubmitDisabled: duckTextLength <=0 || duckTextLength > 140
  }
}

export default connect(
  mapStateToProps,
  (dispatch) => bindActionCreators({...modalActionCreators, ...duckActionCreators}, dispatch)
)(Modal)
