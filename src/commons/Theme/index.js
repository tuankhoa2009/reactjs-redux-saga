import { createMuiTheme } from '@material-ui/core/styles';
import { typography } from '@material-ui/system';

const theme = createMuiTheme({
  color: {
    primary: '#f44336',
    secondary: '#8e24aa'
  },
  typography: {
    fontFamily: 'Roboto'
  },
  shape: {
    backgroundColor: '#0d47a1',
    borderColor: '#009688',
    textColor: '#f4ff81'
  }
});

export default theme;
