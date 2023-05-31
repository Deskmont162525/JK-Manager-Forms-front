import React, { useContext } from 'react';
const url_serve = process.env.NEXT_PUBLIC_BASE_PATH;
const AppFooter = () => {

    return (
        <div className="layout-footer">
            <img src={`/${url_serve}/layout/images/LogoEmpresaMK-dark.png`} alt="Logo" height="50" className="mr-2" />
            by
            <span className="font-medium ml-2">Antonio Foronda</span>
        </div>
    );
};

export default AppFooter;
