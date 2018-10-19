import {hot} from 'react-hot-loader';
import * as React from 'react';
import cnames from 'classnames';

import { Icon } from 'react-icons-kit';
import {hammer} from 'react-icons-kit/icomoon/hammer'
import {confused} from 'react-icons-kit/icomoon/confused'
import {wondering} from 'react-icons-kit/icomoon/wondering'
import {cog} from 'react-icons-kit/entypo/cog'
import {bug} from 'react-icons-kit/entypo/bug'
import {hand} from 'react-icons-kit/entypo/hand'
import {bulb} from 'react-icons-kit/entypo/bulb'
import {plane} from 'react-icons-kit/entypo/plane'
import {message} from 'react-icons-kit/entypo/message'



import './index.scss';

const FeedbackTypes = {
	BUG: 'bug',
	ANNOYING: 'annoying',
	OTHER: 'other',
}


class FeedbackCollector extends React.Component {
	constructor() {
		super()
		this.state = {feedbackType: 'bug'}
	}

	handleClick = (e) =>
		e.stopPropagation();

	handleTypeChange = (type) =>
		this.setState({feedbackType: type})

	render() {
		console.log(this.props);
		console.log(this.state);

		return (
			<div className="feedback-collector" onClick={(e) => this.handleClick(e)}>
				<div>
					<button
						className={cnames('feedback-type-button', this.state.feedbackType === FeedbackTypes.BUG ? 'selected' : '')}
						onClick={() => this.handleTypeChange('bug')}
					>
						<Icon icon={bug} size={30} className="button-icon"/>
						<span>Coś nie działa</span>
					</button>
					<button
						className={cnames('feedback-type-button', this.state.feedbackType === FeedbackTypes.ANNOYING ? 'selected' : '')}
						onClick={() => this.handleTypeChange('annoying')}
					>
						<Icon icon={hand} size={30} className="button-icon"/>
						<span>Przeszkadza mi, że</span>
					</button>
					<button
						className={cnames('feedback-type-button', this.state.feedbackType === FeedbackTypes.OTHER ? 'selected' : '')}
						onClick={() => this.handleTypeChange('other')}
					>
						<Icon icon={message} size={30} className="button-icon"/>
						<span>Inne uwagi</span>
					</button>
				</div>
				<p className="label">Co jest nie tak?</p>
				<textarea
					className="feedback-comment"
					name="comment"
					// onChange={}
					placeholder="Daj nam znać o błędzie, abyśmy mogli go naprawić"
				/>
				<p className="label">Możesz też wrzucić screenshota</p>
				<button>Dodaj obrazek</button>
				<p className="label">I podać linki do stron, na których wystąpił problem</p>
				<input
					type="text"
					name="websiteLink"
					// onChange={this.handleInputChange}
					placeholder="Wklej link do źródła"
				/>
				<div>
					<button>Anuluj</button>
					<button>Wyślij</button>
				</div>
			</div>
		)
	}
}

export default hot(module)(FeedbackCollector);
