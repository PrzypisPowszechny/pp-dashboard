import {hot} from 'react-hot-loader';
import * as React from 'react';
import cnames from 'classnames';

import {Link} from 'react-router-dom';
import { withRouter } from "react-router";

import styles from './index.scss';

class Navigation extends React.Component {


	render() {
		return (
			<ul className={styles.navigation}>
				<div className={styles.groupHeader}>
					<div className={styles.ppLogo} />
				</div>
				<li className={cnames(
					styles.navItem,
					(this.props.location.pathname === '/') ? styles.active : ''
				)}>
					<Link to="/">
						<span className={styles.label}>Przypisy</span>
					</Link>
				</li>
				<li className={cnames(
					styles.navItem,
					(this.props.location.pathname === '/userAnnotations') ? styles.active : ''
				)}>
					<Link to="/userAnnotations">
						<span className={styles.label}>Moje przypisy</span>
					</Link>
				</li>
			</ul>
		)
	}
}


export default hot(module)(withRouter(Navigation));
