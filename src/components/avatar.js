import React from 'react'
import { css } from 'emotion'

const Avatar = ({ user, size }) => (
	<a href={ user.html_url } className={ styles.link } title={ user.bio }>
		<img
			width={ size }
			height={ size }
			src={ user.avatar_url }
			alt={ user.name }
			className={ styles.img }
			/>
		<span>{ user.name }</span>
	</a>
)

const styles = {
	link: css`
		padding-left: 15px;
		display: flex;
		align-items: center;
		margin-top: 10px;
		font-size: 14px;
		font-weight: bold;
		color: #2589e4;
		:hover {
			text-decoration: underline;
		}
	`,
	img: css`
		margin-right: 10px;
		border: 1px solid #DDD;
    border-radius: 50%;
	`,
}

export default Avatar
