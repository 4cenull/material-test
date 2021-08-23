import './App.css';
import { theme } from './styles/theme';
import { MuiThemeProvider } from '@material-ui/core/styles';

//component
import PrimarySearchAppBar from './components/inputFieldDemo.js'

function App() {
  return (
    <div className="App">
      <MuiThemeProvider theme={theme}>
        <PrimarySearchAppBar />
      </MuiThemeProvider>
    </div>
  );
}

export default App;
