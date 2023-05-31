import React from 'react';
import Login from '../content/components/pageLogin';
const url_serve = process.env.NEXT_PUBLIC_BASE_PATH;

const Dashboard = () => {
    return (
        <div className="surface-0 container-in" style={{marginLeft:'15%'}}>
            <div className="text-900 font-bold text-6xl mb-4 text-center">JK-Manager-Forms</div>
            <div className="text-700 text-xl mb-6 text-center line-height-3">¡Gracias por volver! Estamos aquí para ayudarte en lo que necesites.</div>
            <div className="grid">
                <div className="row">
                    <div className="col-md-6">
                        <img src={`/${url_serve}/demo/images/login/bg-login.gif`} alt="bg-login.gif" />
                    </div>
                    <div className="col-md-6" style={{ marginTop: 40 }}>
                        <Login />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
