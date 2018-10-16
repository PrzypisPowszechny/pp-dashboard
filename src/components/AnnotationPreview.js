import { hot } from 'react-hot-loader';
import * as React from 'react';
import { withStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  root: {
    maxWidth: 1000,
    backgroundColor: theme.palette.background.paper,
  },
  container: {
    display: 'flex',
    justifyContent: 'space-around',
  },
  card: {
    minWidth: 475,
    margin: 45,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    marginBottom: 16,
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});


@withStyles(styles)
class AnnotationPreview extends React.Component { // eslint-disable-line
  // react/prefer-stateless-function

  render() {
    const { annotation, classes } = this.props;
    return (
      <Card className={classes.card}>
        <CardContent>
          <Typography className={classes.title} color="textSecondary">
            dd
          </Typography>
          <Typography variant="headline" component="h2">
            Dziękujemy,
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            że pomagasz nam ulepszać internet.
          </Typography>
          <Typography component="p">
            well meaning and kindly.<br />
            {'"a benevolent smile"'}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    );
  }
}
export default hot(module)(AnnotationPreview);
