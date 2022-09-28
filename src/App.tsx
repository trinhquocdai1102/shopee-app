import React from 'react';
import { createBrowserHistory } from 'history';
import { unstable_HistoryRouter as HistoryRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import RouterManager from './routes';

export const history = createBrowserHistory();

function App() {
    return (
        <HistoryRouter history={history}>
            <RouterManager />
            <ToastContainer autoClose={1000} />
        </HistoryRouter>
    );
}

export default App;
