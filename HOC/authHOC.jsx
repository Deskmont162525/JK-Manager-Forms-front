import React from 'react';
import Router from 'next/router';
import { parseCookies, destroyCookie } from 'nookies'; 
import NoSession from '../content/utils/NoSessionRol';
import { validateTokenExpiration } from '../data/functions';

export function requireAuthentication(Component) {
  return class AuthenticatedComponent extends React.Component {
    state = {
      isAuthenticated: false,
      message:""
    };


    componentDidMount() {
      const { userJKMF } = parseCookies();
      const dataParse = userJKMF === undefined || userJKMF === ""    ? "" : JSON.parse(userJKMF)

      if (dataParse !== "") {
        // Verificar si la cookie ha expirado
        
        const temp = validateTokenExpiration(dataParse?.data?.exp)
        if(temp === "0000"){
          this.setState({ isAuthenticated: false,
            message:"Tu sesión ha expirado. Por favor, vuelve a iniciar sesión para continuar utilizando la aplicación."
           });
           destroyCookie(null,'userJKMF'); 
           this.redirectLogin();
        }

        if(temp === "0001"){
          this.setState({ isAuthenticated: true,
           });
        }


      }
       else {
        this.setState({ isAuthenticated: false,
          message:"No has iniciado sesión  . Por favor, inicia sesión para utilizar la aplicación."
         });
        this.redirectLogin();
      }
    }

    redirectLogin = () => {
      Router.push('/');
    };

    render() {
      return (
        <>
          {this.state.isAuthenticated === true ? (
            <Component {...this.props} />
          ) : (
            <NoSession message={this.state.message} />
          )}
        </>
      );
    }
  };
}

