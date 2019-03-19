import {hot} from 'react-hot-loader';
import * as React from 'react';

import 'moment/locale/pl';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import styles from './index.scss';

import Navigation from '../components/Navigation'
import PageAnnotationsFeed from '../pages/PageAnnotationsFeed'
import PageUserAnnotations from '../pages/PageUserAnnotations'
import ExtensionUserManager, {UserRoles} from "ExtensionUserManager";

class Dashboard extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {
			user: null,
			userLoaded: false,
		};
		this.userManager = new ExtensionUserManager();
	}
	
	componentDidMount() {
		this.userManager.addUserUpdatedListener(this.onUserUpdate);
		this.userManager.init();
		this.userManager.pollForUserData();
	}
	
	onUserUpdate = (user) => {
		this.setState({
			user: user,
			userLoaded: true,
		});
	}
	
	render() {
		const {
			user,
			userLoaded,
		} = this.state;
		
		if (false) {// todo if (extension not installed) ask to install
			return (<span>please install extension</span>);
			
		}
		
		if (!userLoaded) {
			// Todo "loading screen"
			return (<span>syncing with extenion</span>);
			
		}
		
		if (!user) {
			// Todo invite to login
			return (<span>please log in</span>);
		}
		
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
							< Route
								exact
								path="/userAnnotations"
								render={(props) => <PageUserAnnotations {...props} user={this.state.user}/>}
							/>
							{user.userRole === UserRoles.editor &&
							<Aux>
								{/* < Route only available to editor (...) >*/}
							</Aux>
							}
						</Switch>
					</div>
				</div>
			</Router>
		);
	}
}

export default hot(module)(Dashboard);
