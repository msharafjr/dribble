import React from 'react'
import { css } from 'emotion'

const ShotImage = ({ src, alt }) => (
	<div className={ styles.wrapper }>
		<img className={ styles.img } src={ src } alt={ alt } />
	</div>
)

const styles = {
	wrapper: css`
		width: 100%;
		background: #fff;
		padding-top: 30px;
		padding-bottom: 30px;
		border-radius: inherit;
	`,
	img: css`
		width: 90%;
		margin: 0 auto;
		display: block;
		border-radius: inherit;
	`,
}

export default ShotImage
