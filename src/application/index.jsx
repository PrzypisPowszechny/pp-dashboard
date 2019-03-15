import {hot} from 'react-hot-loader';
import * as React from 'react';

import 'moment/locale/pl';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import styles from './index.scss';

import Navigation from '../components/Navigation'
import PageAnnotationsFeed from '../pages/PageAnnotationsFeed'
import PageUserAnnotations from '../pages/PageUserAnnotations'
import ExtensionUserManager from 'ExtensionUserManager';


class Dashboard extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {
			user: null,
		};
		this.userManager = new ExtensionUserManager();
	}
	
	componentDidMount() {
		this.userManager.addUserUpdatedListener(this.onLogin);
		this.userManager.init();
		this.userManager.pollForUserData();
	}
	
	onLogin = (user) => {
		this.setState({user: user});
	}
	
	render() {
		return (
			<Router>
				<div className={styles.panel}>
					<div className={styles.topBar}>
						<Navigation user={this.state.user}/>
					</div>
					<div className={styles.pageContainer}>
						<Switch>
							<Route
								exact
								path="/"
								render={(props) => <PageAnnotationsFeed {...props} user={this.state.user}/>}
							/>
							<Route
								exact
								path="/userAnnotations"
								render={(props) => <PageUserAnnotations {...props} user={this.state.user}/>}
							/>
						</Switch>
					</div>
				</div>
			</Router>
		);
	}
}

export default hot(module)(Dashboard);
