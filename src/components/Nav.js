import { hot } from 'react-hot-loader';
import * as React from 'react';
import { withStyles } from '@material-ui/core/styles';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import indigo from '@material-ui/core/colors/indigo';

import styles from './NavStyles';


@withStyles(styles)
class Nav extends React.Component { // eslint-disable-line
  // react/prefer-stateless-function
  constructor() {
    super();
    this.state = {
      value: 0,
    };
  }

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;
    return (
      <div>
        <AppBar position="static">
          <Tabs
            value={value}
            onChange={this.handleChange}
            classes={{ indicator: classes.tabIndicator, root: classes.root }}
          >
            <Tab label="Dodane przypisy" className={classes.tabRoot}/>
            <Tab label="Prośby o przypis" className={classes.tabRoot}/>
            <Tab label="Ankieta" href="#basic-tabs" className={classes.tabRoot}/>
          </Tabs>
        </AppBar>
      </div>
    );
  }
}
export default hot(module)(Nav);
