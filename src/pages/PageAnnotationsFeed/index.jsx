import {hot} from 'react-hot-loader';
import * as React from 'react';
import cnames from 'classnames';
import AnnotationCard from '../../components/AnnotationCard/index'
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
		fetch(`${PPSettings.API_URL}/annotations?page%5Blimit%5D=150`)
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
					<div className={styles.annotationFeed}>
						{this.state.annotations.map((annotation) =>
							(<div key={annotation.id} className={styles.cardContainer}>
								<AnnotationCard annotation={annotation} />
							</div>))}
					</div>
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
