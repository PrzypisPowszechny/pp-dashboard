import { hot } from 'react-hot-loader';
import * as React from 'react';

import './index.scss'


class Modal extends React.Component {
	render() {
		console.log(this.props);

		return (
			<div className="modal" onClick={() => this.props.onModalClose()}>
				{this.props.children}
			</div>
		)
	}
}

export default hot(module)(Modal);
