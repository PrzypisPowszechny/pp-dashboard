import {hot} from 'react-hot-loader';
import * as React from 'react';
import cnames from 'classnames';
import AnnotationGrid from '../../components/AnnotationGrid'


import styles from './index.scss';


class PageUserAnnotations extends React.Component {
	constructor() {
		super();
		this.state = {
			annotations: []
		}
}

componentDidMount() {
	fetch('https://devdeploy1.przypispowszechny.pl/api/annotations?page%5Blimit%5D=10')
		.then((response) => {
			return response.json();
		})
		.then((myJson) => {
			this.setState({annotations: myJson.data});

		})
}


	render() {
		return (
			<div className={styles.page}>
				<h2>Moje przypisy</h2>
				<AnnotationGrid annotations={this.state.annotations} />
			</div>
		)
	}
}

export default hot(module)(PageUserAnnotations);
