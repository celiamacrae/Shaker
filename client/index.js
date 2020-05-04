import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {Router} from 'react-router-dom'
import history from './history'
import store from './store'
import App from './app'
import {createMuiTheme} from '@material-ui/core/styles'
import {ThemeProvider} from '@material-ui/styles'

const THEME = createMuiTheme({
  typography: {
    fontFamily: '"Courier New", "Courier", "monospace", sans-serif',
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500
  }
})

// establishes socket connection
import './socket'

ReactDOM.render(
  <ThemeProvider theme={THEME}>
    <Provider store={store}>
      <Router history={history}>
        <App />
      </Router>
    </Provider>
  </ThemeProvider>,
  document.getElementById('app')
)
