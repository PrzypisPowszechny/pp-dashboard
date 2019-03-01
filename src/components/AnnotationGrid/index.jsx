import {hot} from 'react-hot-loader';
import * as React from 'react';
import cnames from 'classnames';

import {Icon} from 'react-icons-kit';
import AnnotationCard from '../AnnotationCard/index'


import styles from './index.scss';

class AnnotationGrid extends React.Component {
	// constructor() {
	// 	super()
	// }

	handleClick = (e) =>
		e.stopPropagation();


	render() {
		return (
			<div className={styles.annotationGrid}>
				{this.props.annotations.map((annotation) =>
					(<div key={annotation.id} className={styles.cardContainer}>
						<AnnotationCard annotation={annotation} />
					</div>))}
			</div>
		)
	}
}

export default hot(module)(AnnotationGrid);
