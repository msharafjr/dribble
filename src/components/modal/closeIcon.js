import React from 'react'
import { css } from 'emotion'

const CloseIcone = ({ onClose }) => (
	<a
		href='javascript:'
		onClick={ onClose }
		className={ style }>
		<img
			alt='Icon shot x light'
			src='https://cdn.dribbble.com/assets/icon-shot-x-light-40c073cd65443c99d4ac129b69bf578c8cf97d69b78990c00c4f8c5873b0d601.png'
		/>
	</a>
)

const style = css`
	position: absolute;
	top: 20px;
	right: 25px;
	width: 20px;
	height: 20px;
	display: flex;
	padding: 20px;
	justify-content: center;
	align-items: center;
	opacity: .6;
	z-index: 20;
	background-repeat: no-repeat;
	background-position: 20px 20px;
	:hover {
		opacity: 1;
	}
`
export default CloseIcone
