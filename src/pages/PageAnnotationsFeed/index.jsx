import {hot} from 'react-hot-loader';
import * as React from 'react';
import cnames from 'classnames';
import AnnotationCard from '../../components/AnnotationCard/index'
import CircularProgress from '@material-ui/core/CircularProgress';
import {loggedAxios} from '../../requests';
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
		loggedAxios.get('https://devdeploy1.przypispowszechny.pl/api/annotations?page%5Blimit%5D=150', {user: this.props.user})
			.then((myJson) => {
				this.setState({loaded: true, annotations: myJson.data.data});
			})
	}
	
	
	render() {
		return (
			<div className={styles.page}>
				{this.state.loaded ?
					<div className={styles.annotationFeed}>
						{this.state.annotations.map((annotation) =>
							(<div key={annotation.id} className={styles.cardContainer}>
								<AnnotationCard annotation={annotation}/>
							</div>))}
					</div>
					:
					<div className={styles.onLoading}>
						<CircularProgress/>
					</div>
				}
			</div>
		)
	}
}

export default hot(module)(PageAnnotationsFeed);
