import { ActionTypes } from '../actions'

export default ( state = {}, action ) => {
	switch ( action.type ) {
		case ActionTypes.RECEIVE_USER:
			return {
				...state,
				...action.login
			}
		case ActionTypes.LIKE_SHOT:
			return {
				...state,
				likes: [
					...state.likes,
					action.id
				]
			}
		case ActionTypes.UNLIKE_SHOT:
			return {
				...state,
				likes: state.likes.filter( shotId => shotId !== action.id )
			}
		default:
			return state
	}
}
