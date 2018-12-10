import React from 'react'
import { css } from 'emotion'

import Button from '../Button'

const AddCommentForm = ({ shotId, onSubmit }) => (
	<form onSubmit={ e => onSubmit( e, shotId ) }>
		<label className={ styles.label } htmlFor='new-comment'>
			Add a new comment
		</label>
		<textarea className={ styles.textarea } id='new-comment' name='new-comment' />
		<Button className={ styles.button } type='submit'>
			Post comment
		</Button>
	</form>
)

const styles = {
	label: css`
		display: block;
		margin-top: 20px;
		color: #444;
		font-size: 16px;
		font-weight: bold;
	`,
	textarea: css`
		width: 100%;
		height: 100px;
		margin: 20px 0 5px;
		border: 0;
		border-radius: 3px 35px;
		padding: 14px 10px;
		box-shadow: inset 0 1px 2px rgba(0,0,0,0.15);
		background: rgba(0,0,0,0.07);
		font-size: 15px;
		font-weight: 500;
		color: #555;
		:focus {
			outline: none;
		}
	`,
	button: css`
		border: 0;
		border-radius: 4px 14px;
		padding: 10px 15px 11px;
		font-size: 13px;
		font-weight: 500;
		background-color: #ea4c89;
		color: #fff;
		cursor: pointer;
		:focus {
			outline: none;
		}
	`,
}

export default AddCommentForm
