import { combineReducers } from 'redux'

import login from './login'
import shots from './shots'
import modal from './modal'

export default combineReducers({ modal, shots, login })
