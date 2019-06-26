import {hot} from 'react-hot-loader';
import * as React from 'react';
import cnames from 'classnames';
import _ from 'lodash';
import AnnotationCard from '../../components/AnnotationCard/index';

import CircularProgress from '@material-ui/core/CircularProgress';
import styles from './index.scss';
import {Icon} from 'react-icons-kit';
import {ic_help_outline} from 'react-icons-kit/md/ic_help_outline';
import {loggedAxios} from "requests";


class PageUserAnnotations extends React.Component {
	constructor() {
		super();
		this.state = {
			loaded: false,
			annotations: [],
		}
	}

	componentDidMount() {
		// TODO: make it possible to customise between devdeploy1 and prod base on PP_API environment
		loggedAxios.get('https://devdeploy1.przypispowszechny.pl/api/annotations?page%5Blimit%5D=150', {user: this.props.user})
			.then((myJson) => {
				const userAnnotations = _.filter(myJson.data.data, (annotation) => annotation.attributes.doesBelongToUser === true);
				this.setState({loaded: true, annotations: userAnnotations});
			})
	}


	render() {
		return (
			<div className={styles.page}>
				{this.state.loaded ?
					this.state.annotations.length > 0 ?
						<div className={styles.annotationFeed}>
							{this.state.annotations.map((annotation) =>
								(<div key={annotation.id} className={styles.cardContainer}>
									<AnnotationCard annotation={annotation} />
								</div>))}
						</div>
						:
						<div className={styles.welcomeMessage}>
							<p className={styles.welcomeText}>Wygląda na to, że nie dodałeś jeszcze żadnych przypisów!</p>
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

export default hot(module)(PageUserAnnotations);
