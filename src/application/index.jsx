import { hot } from 'react-hot-loader';
import * as React from 'react';

import 'moment/locale/pl';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import styles from './index.scss';

import Navigation from '../components/Navigation'
import PageAnnotationsFeed from '../pages/PageAnnotationsFeed'
import PageUserAnnotations from '../pages/PageUserAnnotations'


class Dasboard extends React.Component {

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
								render={(props) => <PageAnnotationsFeed {...props} />}
							/>
							<Route
								exact
								path="/userAnnotations"
								render={(props) => <PageUserAnnotations {...props} />}
							/>
						</Switch>
					</div>
				</div>
			</Router>
		);
	}
}
export default hot(module)(Dasboard);
