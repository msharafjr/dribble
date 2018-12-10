import React from 'react'
import { connect } from 'react-redux'
import { css } from 'emotion'

import Avatar from '../components/avatar'
import Spinner from '../components/spinner'
import Dribble from '../components/dribble'
import Button from '../components/Button'

import { ActionTypes, fetchUser, fetchShots, receiveShots } from '../actions'
import API from '../utils/api'

class Dribbles extends React.PureComponent {
	state = {
		page: 1,
		isLoading: false,
	}
	componentDidMount() {
		// TODO: this does not look right, fix this. DRY code!
		const { dispatch } = this.props
		dispatch( fetchUser() )
		dispatch( fetchShots( this.state.page ))
	}
	openShot = shot => {
		this.props.dispatch({
			type: ActionTypes.OPEN_MODAL,
			shot
		})
	}
	loadMoreShots = () => {
		this.setState( state =>
			({
				isLoading: true,
				page: state.page + 1
			}), this.sendRequest )
	}
	sendRequest = () => {
		return fetch( API.pagination( this.state.page ) )
			.then( res => res.json() )
			.then( shots => this.props.dispatch( receiveShots( shots )))
			.then( () => this.setState({ isLoading: false }))
	}
	likeShotAsync = id => {
		setTimeout( () => this.props.dispatch({
			type: ActionTypes.TOGGLE_LIKE,
			id
		}), 500 )
	}
	render() {
		const { shots, login } = this.props
		const { isLoading } = this.state
		return (
			<main className='dribbles'>
				<div className='container'>
					<h1 className={ styles.h1 }>Dribbles</h1>
					<ul className='list row row--4'>
						{
							!shots.length ? <Spinner />
							:
							shots.map( shot => {
								return (
									<Dribble
										key={ shot.id }
										shot={ shot }
										openShot={ this.openShot }
										likeShotAsync={ this.likeShotAsync }>
										<Avatar user={ login } size='30' />
									</Dribble>
								)
							})
						}
					</ul>
					{ shots.length > 0 &&
						<Button
							className={ styles.button( isLoading ) }
							onClick={ this.loadMoreShots }>
							{ isLoading ? <Spinner /> : 'Load More!' }
						</Button>
					}
				</div>
			</main>
		)
	}
}

const styles = {
	h1: css`
		padding: .75em 0;
	`,
	button: loading => css`
		display: block;
		position: relative;
		width: 50%;
		height: 50px;
		margin: 0 auto;
		border: none;
		border-radius: 4px 14px;
		font-weight: bold;
		font-size: 16px;
		color: #fff;
		background: ${ loading ? '#e2e2e2' : '#f6467f' };
		transition: .2s;
		cursor: ${ loading ? 'not-allowed' : 'pointer' };
		:focus {
			outline: none;
		}
	`
}

const mapStateToProps = ({ login, shots }) => ({ login, shots })
export default connect( mapStateToProps )( Dribbles )
