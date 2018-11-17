import { hot } from 'react-hot-loader';
import * as React from 'react';



import './index.scss';


import FeedbackCollector from './components/FeedbackCollector/index'
import AnnotationCard from './components/AnnotationCard/index'
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
		console.log(this.state);

		return (
			<div className="page-container">
				{/* <button onClick={this.openModal}>
					Modal
				</button> */}
				<div className="annotation-wrapper">
					{annotations.map((annotation) => <AnnotationCard annotation={annotation} />)}
				</div>
				{/* {this.state.isModalOpen &&
				<Modal onModalClose={this.handleModalClose}>
					<FeedbackCollector />
				</Modal>
				} */}
			</div>
		);
	}
}
export default hot(module)(App);
