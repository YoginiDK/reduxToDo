import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './redux/store'
import {Provider} from 'react-redux'
import { Snackbar } from 'react-redux-snackbar';

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
			<Snackbar />
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
);
