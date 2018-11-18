import {hot} from 'react-hot-loader';
import * as React from 'react';
import cnames from 'classnames';
import moment from 'moment';

import {Icon} from 'react-icons-kit';
import AnnotationCard from '../AnnotationCard/index'


import styles from './index.scss';

// url: string;
// range: RangeAPIModel;
// quote: string;
// publisher: AnnotationPublishers;
// quoteContext: string;
// ppCategory: AnnotationPPCategories;
// demagogCategory: AnnotationDemagogCategories;
// comment: string;
// annotationLink: string;
// annotationLinkTitle: string;
// createDate?: Date;
// upvoteCountExceptUser: number;
// doesBelongToUser: boolean;

const AnnotationPublishers = {
	PP: 'PP',
	DEMAGOG: 'DEMAGOG',
}

const AnnotationPPCategories = {
	ADDITIONAL_INFO: 'ADDITIONAL_INFO',
	CLARIFICATION: 'CLARIFICATION',
	ERROR: 'ERROR',
}

const ppCategoryToClass = {
	[AnnotationPPCategories.ADDITIONAL_INFO]: 'additional-info',
	[AnnotationPPCategories.CLARIFICATION]: 'clarification',
	[AnnotationPPCategories.ERROR]: 'error',
};


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
					(<div className={styles.cardContainer}>
						<AnnotationCard annotation={annotation} />
					</div>))}
			</div>
		)
	}
}

export default hot(module)(AnnotationGrid);
