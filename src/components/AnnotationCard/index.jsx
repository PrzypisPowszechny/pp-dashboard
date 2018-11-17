import {hot} from 'react-hot-loader';
import * as React from 'react';
import cnames from 'classnames';
import moment from 'moment';

import {Icon} from 'react-icons-kit';
import { ic_star } from 'react-icons-kit/md/ic_star';

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
		const { annotationUpvote } = this.props.annotation.relationships;
    const totalUpvoteCount = this.props.annotation.attributes.upvoteCountExceptUser + (annotationUpvote.data ? 1 : 0);
		return (
			<a href={annotationAttrs.url} target="_blank">
				<div className="annotation-card">
					<div className="top-bar">
						<div className={cnames(annotationAttrs.publisher === AnnotationPublishers.DEMAGOG ? "demagog-icon" : '')} />
						{/* {annotationAttrs.publisher === AnnotationPublishers.DEMAGOG && <div className="demagog-icon" />} */}
						<p className="host-name">{extractHostname(annotationAttrs.url)}</p>
					</div>
					<div className="content-wrapper">
						<p className="quote">
							{annotationAttrs.quote}
						</p>
						<p className={cnames('comment', ppCategoryToClass[annotationAttrs.ppCategory])}>
							{annotationAttrs.comment}
						</p>
					</div>
					<div className="bottom-bar">
						<div>
							<p className="host-name">{moment(annotationAttrs.createDate).fromNow()}</p>
						</div>
						<p className="upvote-count">
							<Icon icon={ic_star} size={18} />
							<span>{totalUpvoteCount}</span>
						</p>
					</div>
				</div>
			</a>
		)
	}
}

export default hot(module)(AnnotationCard);
