import { hot } from 'react-hot-loader';
import * as React from 'react';



import './index.scss';


import FeedbackCollector from './components/FeedbackCollector/index'
import AnnotationGrid from './components/AnnotationGrid/index'
import Modal from './components/Modal/index'

import annotations from './fixtures/annotations.json'


class App extends React.Component { // eslint-disable-line react/prefer-stateless-function
	constructor() {
		super();
		this.state = {
			isModalOpen: false,
		}
}
	openModal = () => {
		this.setState({isModalOpen: !this.state.isModalOpen})
	}

	handleModalClose = () => {
		this.setState({isModalOpen: false})
	}

	render() {

		return (
			<div className="page-container">
				<AnnotationGrid annotations={annotations} />
			</div>
		);
	}
}
export default hot(module)(App);
