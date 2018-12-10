import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import { css } from 'emotion'

import CloseIcon from '../components/modal/closeIcon'
import Header from '../components/modal/header'
import ShotImage from '../components/modal/shotImage'
import Comments from '../components/modal/comments'
import Description from '../components/modal/description'
import AddCommentForm from '../components/modal/addCommentForm'
import Tags from '../components/modal/tags'

import { ActionTypes } from '../actions'

const root = document.createElement( 'div' )
root.id = 'modal'

class Modal extends Component {
	componentDidMount() {
		document.body.appendChild( root )
	}

	componentWillUnmount() {
		root.remove()
	}

	closeModal = () => this.props.dispatch({ type: ActionTypes.CLOSE_MODAL })

	handleLikeAsync = id => {
		setTimeout( () => this.props.dispatch({
			type: ActionTypes.TOGGLE_LIKE,
			id
		}), 500 )
	}

	addCommentAsync = ( e, shotId ) => {
		e.preventDefault()
		const value = e.currentTarget[ 0 ].value
		e.currentTarget[ 0 ].focus()
		if ( value.trim().length > 0 ) {
			e.currentTarget[ 0 ].value = ''
			setTimeout( () => this.props.dispatch({
				type: ActionTypes.NEW_COMMENT,
				shotId,
				value
			}), 500 )
		}
	}

	render() {
		const { modal, login } = this.props
		const { visibility, activeShot } = modal

		if ( !visibility ) {
			return null
		}
		return (
			ReactDOM.createPortal(
				<div className={ styles.modal }>
					<CloseIcon onClose={ this.closeModal } />
					<div className={ styles.container }>
						<Header
							shot={ activeShot }
							login={ login }
							handleLikeAsync={ this.handleLikeAsync }
						/>
						<ShotImage
							src={ activeShot.images.hidpi }
							alt={ activeShot.title }
						/>
						<div className={ styles.footer }>
							<div className='row row--3'>
								<div className='col col--2'>
									<Description val={ activeShot.description } />
									<Comments comments={ activeShot.comments } />
									<AddCommentForm shotId={ activeShot.id } onSubmit={ this.addCommentAsync } />
								</div>
								<div className='col'>
									{/* // TODO: implement actions and tags components */}

									<Tags tags={activeShot.tags} />
								</div>
							</div>
						</div>
					</div>
				</div>,
				root
			)
		)
	}
}

const styles = {
	modal: css`
		position: fixed;
		height: 100%;
		width: 100%;
		top: 0;
		left: 0;
		overflow-y: auto;
		background-color: rgba(0,0,0,0.76);
		z-index: 10;
		opacity: 0.1;
		animation: 100ms fadeIn cubic-bezier(0.71, 0.01, 0.26, 0.94) forwards;
		@keyframes fadeIn {
			to {
				opacity: 1;
			}
		}
	`,
	container: css`
		position: absolute;
		top: 20px;
		left: 50%;
		width: 800px;
		margin-left: -400px;
		margin-bottom: 20px;
		padding: 30px;
		background: #f4f4f4;
		border-radius: 3px 35px;
		transition: all 0.1s ease-in;
	`,
	footer: css`
		padding: 20px 0;
	`,
}

const mapStateToProps = ({ modal, login }) => ({ modal, login });
export default connect( mapStateToProps )( Modal )
