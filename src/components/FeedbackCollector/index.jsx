import { hot } from 'react-hot-loader';
import * as React from 'react';

import './index.scss'


class FeedbackCollector extends React.Component {
	render() {
		console.log(this.props);

		return (
			<div className="modal" onClick={() => this.props.onModalClose()}>
				feedback
			</div>
		)
	}
}

export default hot(module)(FeedbackCollector);
