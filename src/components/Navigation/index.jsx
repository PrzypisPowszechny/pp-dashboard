import {hot} from 'react-hot-loader';
import * as React from 'react';
import cnames from 'classnames';

import {Link} from 'react-router-dom';

import styles from './index.scss';


class Navigation extends React.Component {

	render() {
		return (
			<ul className={styles.navigation}>
				<li className={styles.navItem}>
					<Link to="/">
						<span className={styles.label}>Przeglądaj przypisy</span>
					</Link>
				</li>
				<li className={styles.navItem}>
					<Link to="/userAnnotations">
						<span className={styles.label}>Moje przypisy</span>
					</Link>
				</li>
			</ul>
		)
	}
}

export default hot(module)(Navigation);
