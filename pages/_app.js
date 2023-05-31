import React from 'react';
import { LayoutProvider } from '../layout/context/layoutcontext';
import 'primereact/resources/themes/saga-blue/theme.css'; // importa el tema que quieras utilizar
import 'primereact/resources/primereact.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';
import '../styles/layout/layout.scss';
import '../styles/demo/Demos.scss';
import '../styles/404.style.css';
import '../styles/demo2.style.css';
import '../styles/sidebar.styles.css';
import '../styles/admin.styles.css';
import infoStepReducer from '../reducers/infoStepReducer';
import { infoStepState } from '../states/infoStepState';
import { infoStepContext } from '../context/infoStepContext';
import { userContext } from '../context/userContext';
import { authContext } from '../context/authContext';
import userReducer from '../reducers/userReducer';
import { userState } from '../states/userState';
import authReducer from '../reducers/authReducer';
import { authState } from '../states/authState';

export default function MyApp({ Component, pageProps }) {
    const [auth, dispatchAuth] = React.useReducer(authReducer, authState);
    const [infoSteps, dispatchInfoSteps] = React.useReducer(infoStepReducer, infoStepState);
    const [userStep, dispatchUserState] = React.useReducer(userReducer, userState);

    return (
        <LayoutProvider>
            <authContext.Provider value={{ auth, dispatchAuth }}>
                <infoStepContext.Provider value={{ infoSteps, dispatchInfoSteps }}>
                    <userContext.Provider value={{ userStep, dispatchUserState }}>
                        <Component {...pageProps} />
                    </userContext.Provider>
                </infoStepContext.Provider>
            </authContext.Provider>
        </LayoutProvider>
    );
}
