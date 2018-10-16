import { hot } from 'react-hot-loader';
import * as React from 'react';


import { withStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';
import Collapse from '@material-ui/core/Collapse';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';


const styles = theme => ({
  root: {
    height: 70,
    fontSize: '20px',
    cursor: 'pointer',
    minWidth: 900,
  },
  priorityMarker: {
    width: 25,
    height: 25,
    backgroundColor: '#5679B0',
  },
});

@withStyles(styles)
class TableItem extends React.Component { // eslint-disable-line
  // react/prefer-stateless-function
  constructor() {
    super();
    this.state = {
      open: false,
    };
  }

  getHostname(href) {
    var l = document.createElement("a");
    l.href = href;
    return l;
};

  handleClick = () => {
    this.setState({ open: !this.state.open });
  };


  render() {
    const { classes, onClick } = this.props;
    const { annotation } = this.props;
    // const { annotation } = this.props;
    const l = this.getHostname(annotation.attributes.url);
    // const slicedComment = annotation.comment.slice(1, 20);
    return (
      <TableRow className={classes.root} hover onClick={() => { onClick(annotation); }}>
        <TableCell>
          <div className={classes.priorityMarker} />
        </TableCell>
        <TableCell component="th" scope="row">
          22 maja 2018
        </TableCell>
        <TableCell>
          <Typography variant="subheading">
            well meaning and kindly.<br />
            {'"a benevolent smile"'}
          </Typography>
          <Typography>
            well meaning and kindly.
          </Typography>
          <Typography>
            well meaning and kindly.
          </Typography>
        </TableCell>
        <TableCell>{l.hostname}</TableCell>
        <TableCell>dsd</TableCell>
      </TableRow>
    );
  }
}
export default hot(module)(TableItem);
