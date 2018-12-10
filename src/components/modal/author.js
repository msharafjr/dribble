import React from 'react'
import { css } from 'emotion'

const AuthorOf = ({ size, src, alt, title, children }) => (
	<div>
		<div className={ styles.wrapper }>
			<img
				className={ styles.img }
				width={ size }
				height={ size }
				src={ src }
				alt={ alt }
			/>
		</div>
		<div className={ styles.author }>
			<h2 className={ styles.h2 }>
				{ title }
			</h2>
			{ children }
		</div>
	</div>
)

const styles = {
	wrapper: css`
		float: left;
	`,
	img: css`
		border-radius: 50%;
	`,
	author: css`
		padding-left: 60px;
	`,
	h2: css`
		font-size: 18px;
	`,
}

export default AuthorOf
