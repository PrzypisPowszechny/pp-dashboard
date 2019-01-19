import {hot} from 'react-hot-loader';
import * as React from 'react';
import cnames from 'classnames';
import Spinner from '@atlaskit/spinner';
import AnnotationGrid from '../../components/AnnotationGrid'
import CircularProgress from '@material-ui/core/CircularProgress';

import styles from './index.scss';


class PageAnnotationsFeed extends React.Component {
	constructor() {
		super();
		this.state = {
			loaded: false,
			annotations: [],
		}
	}


	componentDidMount() {
		fetch('https://app.przypispowszechny.pl/api/annotations?page%5Blimit%5D=400')
			.then((response) => {
				return response.json();
			})
			.then((myJson) => {
				this.setState({loaded: true, annotations: myJson.data});
			})
	}


	render() {
		return (
			<div className={styles.page}>
				{this.state.loaded ?
					<AnnotationGrid annotations={this.state.annotations} />
					:
					<div className={styles.onLoading}>
						<CircularProgress />
					</div>
				}
			</div>
		)
	}
}

export default hot(module)(PageAnnotationsFeed);
