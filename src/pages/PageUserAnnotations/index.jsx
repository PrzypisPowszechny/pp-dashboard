import {hot} from 'react-hot-loader';
import * as React from 'react';
import cnames from 'classnames';
import _ from 'lodash';
import AnnotationGrid from '../../components/AnnotationGrid'

import CircularProgress from '@material-ui/core/CircularProgress';
import styles from './index.scss';
import {Icon} from 'react-icons-kit';
import {ic_help_outline} from 'react-icons-kit/md/ic_help_outline';


class PageUserAnnotations extends React.Component {
	constructor() {
		super();
		this.state = {
			loaded: false,
			annotations: [],
		}
	}

	componentDidMount() {
		fetch('https://app.przypispowszechny.pl/api/annotations?page%5Blimit%5D=150', {credentials: 'include'})
			.then((response) => {
				return response.json();
			})
			.then((myJson) => {
				const userAnnotations = _.filter(myJson.data, (annotation) => annotation.attributes.doesBelongToUser === true);
				this.setState({loaded: true, annotations: userAnnotations});
			})
	}


	render() {
		return (
			<div className={styles.page}>
				{this.state.loaded ?
					this.state.annotations.length > 0 ?
						<AnnotationGrid annotations={this.state.annotations} />
						:
						<div className={styles.welcomeMessage}>
							<p className={styles.welcomeText}>Wygląda na to, że nie dodałeś jeszcze żadnych przypisów!</p>
							<a className={styles.linkHelp}>
								{/* <Icon icon={ic_help_outline} /> */}
							Dowiedz się, jak to zrobić
							</a>
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
