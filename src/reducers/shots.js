import { ActionTypes } from '../actions'
import { simplifyShots } from '../utils/helpers'

export default ( state = [], action ) => {
	switch ( action.type ) {
		case ActionTypes.RECEIVE_SHOTS:
			return [
				...state,
				...simplifyShots( action.shots )
			]
		case ActionTypes.TOGGLE_LIKE:
			return state.map( shot => {
				if ( shot.id === action.id ) {
					shot.isLiked ? shot.likes-- : shot.likes++
					shot.isLiked = !shot.isLiked
				}
				return shot
			})
		case ActionTypes.NEW_COMMENT:
			return state.map( shot => {
				if ( shot.id === action.shotId ) {
					shot.comments.push( action.value )
				}
				return shot
			})
		default:
			return state
	}
}
