import { hot } from 'react-hot-loader';
import * as React from 'react';


import AnnotationTable from '../components/AnnotationTable';
import AnnotationPreview from '../components/AnnotationPreview';


import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';

import '../styles/theme.sass';
import './AnnotationView.sass';


const NAV_MENU_BUTTONS = [
  { id: 'features-button', label: 'Features', link: '' },
  { id: 'case-studies-button', label: 'Case studies', link: '' },
  { id: 'about-button', label: 'About', link: '' },
  { id: 'contact-button', label: 'Contact', link: '' },
];

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
class AnnotationView extends React.Component { // eslint-disable-line
  // react/prefer-stateless-function
  constructor() {
    super();
    this.state = {
      annotations: []
    };
  }

  componentDidMount() {
    fetch('http://localhost:8000/api/annotations')
      .then((response) => {
        return response.json();
      })
      .then((myJson) => {
        // console.log(myJson.data);
        const annotations = myJson.data;
        this.setState({ annotations });
      });
  }

  render() {
    const { annotations } = this.state;
    const { classes } = this.props;
    return (
      <main className={classes.container}>
        <div>
          <AnnotationPreview />
        </div>
      </main>
    );
  }
}
export default hot(module)(AnnotationView);




// {annotations && <AnnotationTable data={annotations} />}
