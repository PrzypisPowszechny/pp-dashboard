import { hot } from 'react-hot-loader';
import * as React from 'react';
import Card from '@material-ui/core/Card';
import { withStyles } from '@material-ui/core/styles';


// import './styles/theme.sass';

import AnnotationView from './views/AnnotationView';
import Nav from './components/Nav';
import FeedbackCollector from './components/FeedbackCollector/index'
import Modal from './components/Modal/index'


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
				<button onClick={this.openModal}>
					Modal
				</button>
				{this.state.isModalOpen &&
				<Modal onModalClose={this.handleModalClose}>
					<FeedbackCollector />
				</Modal>
				}
			</div>
		);
	}
}
export default hot(module)(App);
