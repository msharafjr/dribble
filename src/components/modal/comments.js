import React from 'react'
import { css } from 'emotion'
import uuid from 'uuid/v4'

const Comment = ({ comment }) => (
	<li className={ style }>
		{ comment }
	</li>
)

const Comments = ({ comments }) => (
	<>
		{
			comments.length >= 1 &&
			<h3>
				{ `${comments.length} Response${comments.length > 1 ? 's' : '' }` }
			</h3>
		}
		<ol className='list'>
			{
				comments.map( comment =>
					<Comment key={ uuid() } comment={ comment } />
				)
			}
		</ol>
	</>
)

const style = css`
	padding: 15px;
	color: #555;
	border-bottom: 1px solid #ddd;
`

export default Comments
