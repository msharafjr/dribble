import { ActionTypes } from '../actions'

const initialState = {
	visibility: false,
	activeShot: {}
}

export default ( state = initialState, action ) => {
	switch ( action.type ) {
		case ActionTypes.OPEN_MODAL:
			return {
				visibility: true,
				activeShot: action.shot
			}
		case ActionTypes.CLOSE_MODAL:
			return initialState
		case ActionTypes.TOGGLE_LIKE:
			return {
				...state,
				activeShot: {
					...state.activeShot,
					isLiked: !state.activeShot.isLiked,
					likes: state.activeShot.isLiked? state.activeShot.likes-- : state.activeShot.likes++
				}
			}
		case ActionTypes.NEW_COMMENT:
			return {
				...state,
				activeShot: {
					...state.activeShot,
					comments: [
						...state.activeShot.comments,
						action.value
					]
				}
			}
		default:
			return state
	}
}
