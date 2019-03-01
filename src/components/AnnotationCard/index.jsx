import {hot} from 'react-hot-loader';
import * as React from 'react';
import cnames from 'classnames';
import moment from 'moment';

import {Icon} from 'react-icons-kit';
import {ic_star} from 'react-icons-kit/md/ic_star';

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

const AnnotationDemagogCategories = {
	TRUE: 'TRUE',
	PTRUE: 'PTRUE',
	FALSE: 'FALSE',
	PFALSE: 'PFALSE',
	LIE: 'LIE',
	UNKNOWN: 'UNKNOWN',
}

const annotationDemagogCategoriesLabels = {
	TRUE: 'Prawda',
	PTRUE: 'Prawda',
	FALSE: 'Fałsz',
	PFALSE: 'Fałsz',
	LIE: 'Manipulacja',
	UNKNOWN: 'Nieweryfikowalne',
};

const ppCategoryToClass = {
	[AnnotationPPCategories.ADDITIONAL_INFO]: styles.additionalInfo,
	[AnnotationPPCategories.CLARIFICATION]: styles.clarification,
	[AnnotationPPCategories.ERROR]: styles.error,
};

const demagogCategoryToClass = {
	[AnnotationDemagogCategories.TRUE]: styles.dgCategoryTrue,
	[AnnotationDemagogCategories.PTRUE]: styles.dgCategoryTrue,
	[AnnotationDemagogCategories.FALSE]: styles.dgCategoryFalse,
	[AnnotationDemagogCategories.PFALSE]: styles.dgCategoryFalse,
	[AnnotationDemagogCategories.LIE]: styles.dgCategoryLie,
	[AnnotationDemagogCategories.UNKNOWN]: styles.dgCategoryUnknown,
};

function extractHostname(url) {
	let hostname;
	// find & remove protocol (http, ftp, etc.) and get hostname
	if (url.indexOf('://') > -1) {
		hostname = url.split('/')[2];
	} else {
		hostname = url.split('/')[0];
	}

	// find & remove port number
	hostname = hostname.split(':')[0];
	// find & remove "?"
	hostname = hostname.split('?')[0];

	hostname = hostname.replace('www.', '');

	return hostname;
}

class AnnotationCard extends React.Component {

	handleClick = (e) =>
		e.stopPropagation();

	render() {
		const annotationAttrs = this.props.annotation.attributes;
		const {annotationUpvote} = this.props.annotation.relationships;
		const totalUpvoteCount = this.props.annotation.attributes.upvoteCountExceptUser + (annotationUpvote.data ? 1 : 0);
		return (
			<div className={styles.annotationCard}>
				<a className={cnames(styles.left, ppCategoryToClass[annotationAttrs.ppCategory])} href={annotationAttrs.url + '#pp-annotation-' + this.props.annotation.id} target="_blank">
					<div className={styles.quoteWrapper}>
						<div className={cnames(styles.quote, ppCategoryToClass[annotationAttrs.ppCategory])}>
							{'"' + annotationAttrs.quote + '"'}
						</div>
					</div>
					<span className={cnames(styles.hostName)}>{extractHostname(annotationAttrs.url)}</span>
				</a>
				<div className={styles.separator} />
				<div className={styles.right}>
					<div className={styles.topBar}>
						<div className={cnames(styles.categoryMarker, ppCategoryToClass[annotationAttrs.ppCategory])} />
						<div className={cnames(annotationAttrs.publisher === AnnotationPublishers.DEMAGOG ? styles.demagogIcon : '')} />
						<p className={styles.date}>{moment(annotationAttrs.createDate).fromNow()}</p>
					</div>
					<p className={cnames(styles.comment, ppCategoryToClass[annotationAttrs.ppCategory])}>
						{annotationAttrs.publisher === AnnotationPublishers.DEMAGOG &&
							<span className={cnames(styles.demagogCategory, demagogCategoryToClass[annotationAttrs.demagogCategory])}>
								{annotationDemagogCategoriesLabels[annotationAttrs.demagogCategory]}
							</span>
						}
						{annotationAttrs.comment}
					</p>
					<div className={styles.upvoteCount}>
						<Icon icon={ic_star} size={18} />
						<span>{totalUpvoteCount}</span>
					</div>
				</div>

			</div>
		)
	}
}

export default hot(module)(AnnotationCard);
