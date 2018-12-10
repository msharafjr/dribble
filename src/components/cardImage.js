import React, { Component } from 'react'
import { css } from 'emotion'

export default class Card extends Component {
	state = {
		loading: true,
	}
	onImageLoaded = () => {
		this.setState({ loading: false })
	}
	render() {
		const {
			src,
			title
		} = this.props
		const {
			loading,
		} = this.state

		return (
			<div className="ex-2">
				<img
					src={ src }
					alt={ title }
					className={ styles.img( loading ) }
					onLoad={ this.onImageLoaded }
				/>
				{
					loading &&
						<div className={ styles.loadingCard }
					/>
				}
			</div>
		)
	}
}

const styles = {
	img: loading => css`
		display: ${ loading ? 'none' : '' };
	`,
	loadingCard: css`
		position: relative;
		width: 245px;
		height: 184px;
		background: rgba(0, 0, 0, 0.1);
		border-radius: 5px;
		::after {
			content: '';
			position: absolute;
			top: 50%;
			left: 50%;
			width: 30px;
			height: 30px;
			margin: -15px 0 0 -15px;
			border: 2px solid rgba(255, 255, 255, 0.2);
			border-top-color: #fff;
			border-radius: 50%;
			animation: spin 800ms cubic-bezier(0.68,-0.41, 0.27, 1.4) infinite;
		}
	`,
}
