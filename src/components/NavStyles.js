import indigo from '@material-ui/core/colors/indigo';

export const styles = theme => ({
  root: {
    backgroundColor: indigo[700],
    color: theme.palette.background.paper,
  },
  tabIndicator: {
    backgroundColor: theme.palette.background.paper,
  },
  tabRoot: {
    height: '60px',
  },
});
export { styles as default }
