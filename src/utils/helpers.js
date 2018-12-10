/*
	Helper Functions
*/

import { COMMENTS } from './CONSTANTS'

// remove any html tag e.g. ( <p>, </p> ) from a string
export const removeHTMLTagFromString = str => str.replace(/<\/?[^>]+(>|$)/g, '');

// get a random number
const randomNumber = ( max, min = 0 ) => Math.round( Math.random() * max );

const randomComments = num => {
	let comments = [];
	while ( comments.length < num ) {
		comments.push( COMMENTS[ randomNumber( 5 ) ] )
	}
	return comments
}

// modify shots( remove unnecessary properties and add views, likes, and comments )
export const simplifyShots = shots => {
	return shots.map( shot => {
		const { id, title, description, html_url, images, tags, published_at } = shot
		return {
			id,
			title,
			html_url,
			images,
			tags,
			published_at,
			isLiked: false,
			description: removeHTMLTagFromString( description ),
			// set arbitrary views, likes, and comments( dribbble API does not provid these )
			views: randomNumber( 500 ),
			likes: randomNumber( 100 ),
			comments: randomComments( randomNumber( 10 ) )
		}
	})
}
