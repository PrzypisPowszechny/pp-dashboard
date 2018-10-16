import { hot } from 'react-hot-loader';
import * as React from 'react';
import figure from '../assets/kolko_kwadrat.svg';
import twitter from '../assets/t2.svg';
import logo from '../assets/logo_awesome.svg';
import fb from '../assets/f1.svg';
import google from '../assets/google+.svg';

import NavMenu from '../components/NavMenu';
import SocialLinks from '../components/SocialLinks';

import '../styles/theme.sass';
import './LandingPage.sass';


const NAV_MENU_BUTTONS = [
  { id: 'features-button', label: 'Features', link: '' },
  { id: 'case-studies-button', label: 'Case studies', link: '' },
  { id: 'about-button', label: 'About', link: '' },
  { id: 'contact-button', label: 'Contact', link: '' },
];

const SOCIAL_LINKS = [
  { id: 'facebook-link', icon: fb, link: '' },
  { id: 'twitter-link', icon: twitter, link: '' },
  { id: 'google-link', icon: google, link: '' },
];


class LandingPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="page">
        <header className="header">
          <div className="logo-container">
            <img
              className="header__logo"
              src={logo}
              alt="Awesome logo"
            />
          </div>
          <NavMenu items={NAV_MENU_BUTTONS} />
        </header>
        <main>
          <div className="centered-container">
            <p className="motto">
              Not to make you feel dizzy but the&#160;challenge is worth it.
              Aim high, have fun,
              <span className="motto__emphasis"> be awesome. </span>
            </p>
            <div className="figure-container">
              <object className="figure" data={figure} type="image/svg+xml" />
            </div>
            <div className="links-container">
              <p className="text-block">
                Look carefully and notice every detail, nothing tricky though.
              </p>
              <SocialLinks items={SOCIAL_LINKS} />
            </div>
            <div className="triangle">
              <span className="triangle__text">More</span>
            </div>
          </div>
        </main>
      </div>
    );
  }
}
export default hot(module)(LandingPage);
