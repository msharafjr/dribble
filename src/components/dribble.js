import React from 'react'
import Moment from 'react-moment'
import { css } from 'emotion'

import CardImage from './cardImage'

const Dribble = ({ shot, openShot, likeShotAsync, children }) => {
	const {
		id,
		title,
		description,
		published_at,
		html_url,
		images,
		views,
		likes,
		comments,
		isLiked
	} = shot
	return (
		<li className='col dribble'>
			<div className='card'>
				<div
					className='card__img'
					onClick={ () => openShot( shot )}>
					<div className='card__layer'>
						<p className={ styles.paragraph  }>
							<strong>{ title }</strong>
						</p>
						<blockquote>{ description }</blockquote>
						<em className='timestamp'>
							{'about '}
							<Moment fromNow>
								{ published_at }
							</Moment>
						</em>
					</div>
					<CardImage
						src={ images.hidpi }
						title={ title }
					/>
				</div>
				<a
					href={ html_url }
					target='_blank'
					rel='noopener noreferrer'
					className={ styles.shotLink }>
					<img
						width="16"
						height="16"
						alt="Attachments"
						src="https://cdn.dribbble.com/assets/icon-attach-16-2x-e9c3932a8f6aea66c54a2971b83349a8b6fac457fcaff1117cb13f74fe6766b4.png"
					/>
				</a>
				<ul className={ styles.actionsList }>
					<li className={ styles.actionItem }>
						<span className={ styles.span( 'eye' ) }>
							{views}
						</span>
					</li>
					<li className={ styles.actionItem }>
						<span className={ styles.span( 'comment' ) }>
							{comments.length}
						</span>
					</li>
					<li className={ styles.actionItem }>
						<a
							className={ styles.anchor( isLiked ) }
							href='javascript:'
							title={ isLiked ? 'Liked' : 'Like' }
							onClick={ () => likeShotAsync( id ) }>
							{likes}
						</a>
					</li>
				</ul>
			</div>
			{ children }
		</li>
	)
}

const styles = {
	paragraph: css`
		margin: 1em 0;
	`,
	shotLink: css`
		position: absolute;
		bottom: 5px;
		left: 15px;
		opacity: .7;
		z-index: 10;
		&&:hover {
			opacity: 1;
		}
	`,
	actionsList: css`
		margin-right: 15px;
		padding: 10px 0;
		text-align: right;
		font-size: 12px;
		color: #868686;
	`,
	actionItem: css`
		margin-left: 7px;
		display: inline-block;
	`,
	span: val => css`
		background-image: url(/images/${val}.png);
		background-size: 17px;
		padding-left: 18px;
		background-repeat: no-repeat;
		background-position: 0 -1.5px;
	`,
	anchor: isLiked => css`
		background-image: url(/images/like.png);
		background-size: 13px;
		padding-left: 18px;
		color: inherit;
		background-repeat: no-repeat;
		background-position: ${isLiked ? '0 -35px': '0 -17px' };
	`
}

export default Dribble
