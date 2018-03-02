import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Duck } from 'components'
const { func, object, bool, number } = PropTypes

class DuckContainer extends Component {
 
  getDefaultProps () {
    return {
      hideReplyBtn: false,
      hideLikeCount: true,
    }
  }

  goToProfile (e) {
    e.stopPropagation()
    this.context.router.push('/' + this.props.duck.uid)
  }

  handleClick (e) {
    e.preventDefault()
    this.context.router.push('/duckDetail/' + this.props.duck.duckId)
  }

  render () {
    return (
      <Duck
        goToProfile={this.goToProfile}
        onClick={this.props.hideReplyBtn === true ? null : this.handleClick}
        {...this.props} />
    )
  }

}

DuckContainer.propTypes = {
  duck: object.isRequired,
  handleClick: func,
  hideLikeCount: bool.isRequired,
  hideReplyBtn: bool.isRequired,
  isLiked: bool.isRequired,
  numberOfLikes: number,
  addAndHandleLike: func.isRequired,
  handleDeleteLike: func.isRequired,
}

DuckContainer.contextTypes =  {
  router: PropTypes.object.isRequired,
}

function mapStateToProps ({ducks, likeCount, usersLikes}, props) { //second param of mapstatetoprops is this components passed down props
  return {
    duck: ducks[props.duckId],
    hideLikeCount: props.hideLikeCount,
    hideReplyBtn: props.hideReplyBtn,
    isLiked: usersLikes[props.duckId] === true,
    numberOfLikes: likeCount[props.duckId],
  }
}

export default connect(
  mapStateToProps
)(DuckContainer)