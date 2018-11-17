import {hot} from 'react-hot-loader';
import * as React from 'react';
import cnames from 'classnames';
import moment from 'moment';

import {Icon} from 'react-icons-kit';

import './index.scss';

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

	hostname = hostname.replace('www.','');

	return hostname;
}

class AnnotationCard extends React.Component {
	constructor() {
		super()
		// this.state = {feedbackType: 'bug'}
	}

	handleClick = (e) =>
		e.stopPropagation();


	render() {
		const annotationAttrs = this.props.annotation.attributes;
		return (
			<a href={annotationAttrs.url} target="_blank">
				<div className="annotation-card">
					<div className="top-bar">
						<p className="host-name">{extractHostname(annotationAttrs.url)}</p>
					</div>
					<p className="quote">
						{annotationAttrs.quote}
					</p>
					<p className={cnames('comment', ppCategoryToClass[annotationAttrs.ppCategory])}>
						{annotationAttrs.comment}
					</p>
					<div className="middle-bar">
						<p className="host-name">{moment(annotationAttrs.createDate).fromNow()}</p>
						{annotationAttrs.publisher === AnnotationPublishers.DEMAGOG && <div className="demagog-icon" />}
					</div>
				</div>
			</a>
		)
	}
}

export default hot(module)(AnnotationCard);
