import {hot} from 'react-hot-loader';
import * as React from 'react';
import cnames from 'classnames';

import {Link} from 'react-router-dom';
import { withRouter } from "react-router";

import styles from './index.scss';

class Navigation extends React.Component {

	renderUser() {
		const user = this.props.user;
		if (user) {
			return (
				<span> {user.userEmail} </span>
			);
		} else {
			return null;
		}
	}
	
	render() {
		return (
			<div className={styles.navigation}>
				<div className={styles.groupHeader}>
					<div className={styles.ppLogo} />
				</div>
				<Link
					className={cnames(
						styles.navItem,
						(this.props.location.pathname === '/') ? styles.active : ''
					)}
					to="/"
					href
				>
					<span className={styles.label}>Przypisy</span>
				</Link>
				<Link
					className={cnames(
						styles.navItem,
						(this.props.location.pathname === '/userAnnotations') ? styles.active : ''
					)}
					to="/userAnnotations"
					href
				>
					<span className={styles.label}>Moje przypisy</span>
				</Link>
				{this.renderUser()}
			</div>
		)
	}
}


export default hot(module)(withRouter(Navigation));
