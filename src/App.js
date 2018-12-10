import React from 'react'

import Header from './containers/Header'
import Dribbles from './containers/Dribbles'
import Footer from './containers/Footer'
import Modal from './containers/Modal'
import { Provider } from 'react-redux'

import configureStore from './store'
import './App.css'

const store = configureStore()

export default () => (
	<Provider store={ store }>
		<>
			<Header />
			<Dribbles />
			<Footer />
			<Modal />
		</>
	</Provider>
)
