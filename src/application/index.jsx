import { hot } from 'react-hot-loader';
import * as React from 'react';



import styles from './index.scss';

import AnnotationGrid from '../components/AnnotationGrid'

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
			<div className={styles.panel}>
				<div className={styles.pageContainer}>

				</div>
				<AnnotationGrid annotations={annotations} />
			</div>
		);
	}
}
export default hot(module)(UserPanel);
