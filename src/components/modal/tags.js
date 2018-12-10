import React from 'react'
import { css } from 'emotion'

const Tag = ({ tag }) => (
	<li className={styles.li}>
		<a
			href='javascript:'
			className={styles.anchor}>
			{ tag }
		</a>
	</li>
)

const Tags = ({ tags }) => (
	<>
		<svg
			xmlns='http://www.w3.org/2000/svg'
			enableBackground='new 0 0 24 24'
			viewBox='0 0 24 24'
			role='img'
			className={styles.svg}>
			<path
				className={styles.path}
				d='m21.818 0h-7.644c-.574 0-1.125.226-1.534.629l-12.001 11.823c-.852.853-.852 2.234 0 3.087l7.823 7.823c.852.852 2.234.852 3.087 0l11.822-12.002c.403-.409.629-.96.629-1.534v-7.644c0-1.205-.977-2.182-2.182-2.182zm-3.818 8c-1.104 0-2-.896-2-2s.896-2 2-2 2 .896 2 2-.895 2-2 2z'></path>
		</svg>
		<ol className={styles.list}>
			{
				tags.map( tag => <Tag key={ tag } tag={ tag } /> )
			}
		</ol>
	</>
)

const styles = {
	svg: css`
		height: 15px;
		position: absolute;
		margin-top: 5px;
	`,
	path: css`
		fill: #777;
	`,
	list: css`
		margin: 0;
		padding-left: 30px;
		list-style: none;
	`,
	li: css`
		display: inline-block;
		margin-right: 8px;
		font-size: 14px;
	`,
	anchor: css`
		color: rgb(134, 134, 134);
		text-decoration: none;
		:hover {
			color: #2589e4;
			text-decoration: underline;
		}
	`,
}

export default Tags
