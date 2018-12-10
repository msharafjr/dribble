import React from 'react'
import { css } from 'emotion'
import Moment from 'react-moment'

import Button from '../Button'
import Author from './author'

const Header = ({ shot, login, handleLikeAsync }) => {
	const likeState = shot.isLiked ? 'Liked' : 'Like'
	return (
		<header className={ styles.header }>
			<Author
				size='50'
				src={ login.avatar_url }
				alt={ login.name }
				title={ shot.title }>
				<p className={ styles.paragragh }>
					{`by `}
					<a href={ login.html_url } className='link'>
						{ login.name }
					</a>
					{` on `}
					<Moment className={ styles.moment }
						format="D MMM YYYY" withTitle>
						{ shot.published_at }
					</Moment>
				</p>
			</Author>
			<div className={ styles.buttonWrapper }>
				<Button
					title={ likeState }
					className={ styles.button( shot.isLiked ) }
					onClick={ () => handleLikeAsync( shot.id ) }>
					<svg
						className={ styles.svg }
						xmlns='http://www.w3.org/2000/svg'
						enableBackground='new 0 0 24 24'
						viewBox='0 0 24 24'
						role='img'>
						<path
							className={ styles.path( shot.isLiked ) }
							d='m18.199 2.04c-2.606-.284-4.262.961-6.199 3.008-2.045-2.047-3.593-3.292-6.199-3.008-3.544.388-6.321 4.43-5.718 7.96.966 5.659 5.944 9 11.917 12 5.973-3 10.951-6.341 11.917-12 .603-3.53-2.174-7.572-5.718-7.96z'>
						</path>
					</svg>
					{ likeState }
				</Button>
			</div>
		</header>
	)
}

const styles = {
	header: css`
		display: grid;
		grid-template-columns: 2fr 1fr;
		margin-bottom: 2em;
	`,
	paragraph: css`
		color: #424242;
	`,
	moment: css`
		color: #808080;
		font-style: italic;
		font-size: 14px;
	`,
	buttonWrapper: css`
		text-align: right;
	`,
	button: isLiked => css`
		padding: 10px 15px 11px;
		font-size: 13px;
		font-weight: bold;
		border-radius: 4px 14px;
		letter-spacing: .02em;
		vertical-align: middle;
		cursor: pointer;
		border: none;
		background-color: ${ isLiked ? '#ea4c89' : '#ffffff' };
		color: ${ isLiked ? '#fff' : '#777' };
		transition: .2s;
		box-shadow: 0 2px 0px 0 rgba(0, 0, 0, 0.25);
		:hover {
			box-shadow: 0px 8px 2px 0 rgba(0, 0, 0, 0.075);
			transform: translateY(-2px);
		};
		:focus {
			outline: none;
		};
	`,
	svg: css`
		height: 13px;
		width: 13px;
		vertical-align: middle;
		margin-top: -3px;
		margin-right: 10px;
	`,
	path: isLiked => css`
		fill: ${ isLiked ? '#fff' : '#777' };
	`,
}

export default Header
