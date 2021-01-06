import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import App from './App';
import { createMuiTheme , ThemeProvider} from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import { BrowserRouter } from 'react-router-dom';
import { red,blueGrey } from '@material-ui/core/colors';



const theme = createMuiTheme({
  palette: {
    primary: red,
    secondary:blueGrey,
  },
});





ReactDOM.render(
  <React.StrictMode>
  <ThemeProvider theme={theme}>
  <BrowserRouter>
    <App />
    </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

