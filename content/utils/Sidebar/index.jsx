import React from 'react';
import { MegaMenu } from 'primereact/megamenu';
import { authContext } from '../../../context/authContext';
import { logOut } from '../../../actions/authActions';
import { useRouter } from 'next/router';
import { parseCookies } from 'nookies';


export default function Menu({ items }) {
    const router = useRouter()
    const { userJKMF } = parseCookies();
      const dataParse = userJKMF === undefined || userJKMF === ""    ? "" : JSON.parse(userJKMF)
    const {dispatchAuth} = React.useContext(authContext)
    const logoutChange = () => {
        logOut({dispatchAuth, router})
    }

    
    const end = (
        <>
            <span className="pi pi-fw pi-user span-menu" />
            <span className="menu-item-right span-menu">{dataParse?.data?.username}</span>
            <button className="p-link span-menu" onClick={logoutChange}>
                <span className="pi pi-sign-out span-menu"></span>
                <span>Salir</span>
            </button>
        </>
    );

    return (
        <div className="sticky" style={{ marginTop: 70 }}>
            <MegaMenu model={items ? items : []} orientation="horizontal" end={end} breakpoint="960px" />
            
        </div>
    );
}
