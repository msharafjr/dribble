import API from '../utils/api'

export const ActionTypes = {
	RECEIVE_SHOTS: 'RECEIVE_SHOTS',
	RECEIVE_USER: 'RECEIVE_USER',
	OPEN_MODAL: 'OPEN_MODAL',
	CLOSE_MODAL: 'CLOSE_MODAL',
	TOGGLE_LIKE: 'TOGGLE_LIKE',
	NEW_COMMENT: 'NEW_COMMENT'
}

export const receiveShots = shots => ({
	type: ActionTypes.RECEIVE_SHOTS,
	shots
})

const receiveUser = login => ({
	type: ActionTypes.RECEIVE_USER,
	login
})


export const fetchShots = page => dispatch =>
	fetch( API.pagination( page ) )
		.then( res => res.json() )
		.then( shots => dispatch( receiveShots( shots ) ) )

export const fetchUser = () => dispatch =>
	fetch( API.user )
		.then( res => res.json() )
		.then( user => dispatch( receiveUser( user ) ) )
