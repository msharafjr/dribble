import { access_token } from './CONSTANTS'

export default {
	user: `https://api.dribbble.com/v2/user?access_token=${ access_token }`,
	shots: `https://api.dribbble.com/v2/user/shots?access_token=${ access_token }`,
	pagination: page => `https://api.dribbble.com/v2/user/shots?access_token=${ access_token }&page=${page}&per_page=4`
}
