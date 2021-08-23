// Color - Material-UI https://material-ui.com/customization/color/
import { createMuiTheme } from '@material-ui/core/styles';

export const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#60c58f',
      main: '#39B774',
      dark: '#278051',
      contrastText: '#fff',
      weakLight: '#effff7',
    },
    secondary: {
      light: '#ffffff',
      main: '#ffffff',
      dark: '#b2b2b2',
      contrastText: '#000',
    },
    blue: {
      light: '#33aaf7',
      main: '#0095f6',
      dark: '#0068ac',
      contrastText: '#fff',
    },
    gray: {
      dark: '#919191',
      main: '#c3c3c3',
      light: '#f8f8f8',
    },
    yellow: {
      light: '#F2E529',
      main: '#ebb206',
      weakMain: '#fff9e5',
    },
    red: {
      main: '#f44336',
    },
    sns: {
      twitter: '#55acee',
      facebook: '#3b5998',
      instagram: '#e1306c',
    },
    typography: {
      htmlFontSize: 10,
      fontFamily: '游ゴシック体',
    },
    boxShadow: {
      dark: 'rgba(0, 0, 0, 0.26) 0px 5px 9px, rgba(0, 0, 0, 0.33) 0px 5px 9px',
      main: 'rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px',
      light: 'rgba(0, 0, 0, 0.10) 0px 2px 4px, rgba(0, 0, 0, 0.17) 0px 2px 4px',
    },
  },
  shape: {
    borderRadius: '10px',
  }
});
