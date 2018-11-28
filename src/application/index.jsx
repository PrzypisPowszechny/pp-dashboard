import { hot } from 'react-hot-loader';
import * as React from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import styles from './index.scss';

import Navigation from '../components/Navigation'
import PageAnnotationsFeed from '../pages/PageAnnotationsFeed'
import PageUserAnnotations from '../pages/PageUserAnnotations'

import annotations from '../fixtures/annotations.json'


class UserPanel extends React.Component { // eslint-disable-line react/prefer-stateless-function
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
			<Router>
				<div className={styles.panel}>
					<div className={styles.topBar}>
						<Navigation />
					</div>
					<div className={styles.pageContainer}>
						<Switch >
							<Route
								exact
								path="/"
								render={() => <PageAnnotationsFeed />}
							/>
							<Route
								exact
								path="/userAnnotations"
								render={() => <PageUserAnnotations />}
							/>

						</Switch>
					</div>
				</div>
			</Router>
		);
	}
}
export default hot(module)(UserPanel);
