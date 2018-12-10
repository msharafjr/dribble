import React from 'react'
import { css } from 'emotion'

const Description = ({ val }) => (
	<div className={ styles.div }>
		<blockquote className={ styles.blockquote }>
			{ val }
		</blockquote>
	</div>
)

const styles = {
	div: css`
		font-size: 16px;
		line-height: 1.5;
		color: #555;
		overflow: hidden;
		margin-bottom: 20px;
		padding-bottom: 20px;
		border-bottom: 1px solid #ddd;
	`,
	blockquote: css`
		font-size: 14px;
	`,
}

export default Description
