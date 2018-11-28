import {hot} from 'react-hot-loader';
import * as React from 'react';
import cnames from 'classnames';
import moment from 'moment';

import {Icon} from 'react-icons-kit';
import { ic_star } from 'react-icons-kit/md/ic_star';
import {Link} from 'react-router-dom';

import styles from './index.scss';


class Navigation extends React.Component {
	constructor() {
		super()
		// this.state = {feedbackType: 'bug'}
	}

	handleClick = (e) => {
		const w = window.open('https://devdeploy1.przypispowszechny.pl/api/annotations?page%5Blimit%5D=6');
		w.scrollTo(0,150);

	}


	render() {
		return (
			<ul className={styles.navigation}>
				<li className={styles.navItem}>
					<Link to="/">
						<span>Przeglądaj przypisy</span>
					</Link>
				</li>
				<li className={styles.navItem}>
					<Link to="/userAnnotations">
						<span>Moje przypisy</span>
					</Link>
				</li>
			</ul>
		)
	}
}

export default hot(module)(Navigation);
