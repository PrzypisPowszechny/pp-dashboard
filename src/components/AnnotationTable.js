import { hot } from 'react-hot-loader';
import * as React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import AnnotationItem from './AnnotationItem';


const styles = theme => ({
  root: {
    width: '100%',
    overflowX: 'auto',
    margin: 45,
  },
  table: {
    minWidth: 700,
  },
});


@withStyles(styles)
class AnnotationTable extends React.Component { // eslint-disable-line
  // react/prefer-stateless-function
  constructor() {
    super();
    this.state = {
      selectedItem: undefined,
    };
  }

  onItemClick = (annotation) => {
    const selectedItem = annotation;
    console.log(selectedItem);
    this.setState({
      selectedItem,
    });
  }

  render() {
    const { classes, data } = this.props;
    const { selectedItem } = this.state;
    return (
      <Paper className={classes.root}>
        {selectedItem && <span>{selectedItem.attributes.url}</span>}
        <Table className={classes.table}>
          <TableBody>
            {data && data.map(annotation => (
              <AnnotationItem annotation={annotation} onClick={this.onItemClick} />
              ))
          }
          </TableBody>
        </Table>
      </Paper>
    );
  }
}
export default hot(module)(AnnotationTable);
