import {hot} from 'react-hot-loader';
import * as React from 'react';
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










import './index.scss'


class FeedbackCollector extends React.Component {
	constructor() {
		super()
		// this.state =

	}
	handleClick = (e) =>
		e.stopPropagation();

	render() {
		console.log(this.props);

		return (
			<div className="feedback-collector" onClick={(e) => this.handleClick(e)}>
				feedback
				<div>
					<button className="feedback-type-button">
						<Icon icon={bug} size={30}/>
						Coś nie działa
					</button>
					<button className="feedback-type-button">
						<Icon icon={hand} size={30}/>
						Przeszkadza mi, że
					</button>
					<button className="feedback-type-button">
						<Icon icon={message} size={30}/>
						Inne uwagi
					</button>
				</div>
				<p>Co jest nie tak?</p>
				<textarea
					className="feedback-comment"
					name="comment"
					// onChange={}
					placeholder="Daj nam znać o błędzie, abyśmy mogli go naprawić"
				/>
				<p>Możesz też wrzucić screenshota</p>
				<button>Dodaj obrazek</button>
				<p>I podać linki do stron, na których wystąpił problem</p>
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
