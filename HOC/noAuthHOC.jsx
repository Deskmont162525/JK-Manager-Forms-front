import React from 'react';
import Router from 'next/router';
import { parseCookies } from 'nookies';

export function requireNoAuthentication(Component) {
    return class AuthenticatedComponent extends React.Component {
        state = {
            isAuthenticated: true,
        };

        componentDidMount() {
            const { usuario_invitado } = parseCookies();
            const dataParse = usuario_invitado === undefined || usuario_invitado === '' ? '' : JSON.parse(usuario_invitado);

            if (dataParse?.codigo !== 500) {
                this.setState({ isAuthenticated: false });
            } else {
                Router.push('/404');
            }
        }

        render() {
            return <>{this.state.isAuthenticated === false ? <Component {...this.props} /> : ""}</>;
        }
    };
}
