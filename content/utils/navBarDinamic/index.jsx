const url_serve = process.env.NEXT_PUBLIC_BASE_PATH;
const NavbarDinamic = ({perfil, dataClient}) => {
    return ( <>
    {perfil === "user" &&(
        <>
        <div className="header">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="float-left">
                                <div className="hamburger sidebar-toggle">
                                    <span className="line"></span>
                                    <span className="line"></span>
                                    <span className="line"></span>
                                </div>
                            </div>
                            <div className="float-right">                               
                                
                                <div className="dropdown dib">
                                    <div className="header-icon" data-toggle="dropdown">
                                        <span className="user-avatar">
                                            {dataClient?.name}
                                            <i className="ti-angle-down f-s-10"></i>
                                        </span>
                                        <div className="drop-down dropdown-profile dropdown-menu dropdown-menu-right">
                                            <div className="dropdown-content-heading">
                                                <span className="text-left">seccion para mensaje</span>
                                                <p className="trial-day">30 actualizacion</p>
                                            </div>
                                            <div className="dropdown-content-body">
                                                <ul>
                                                    <li>
                                                        <a href={`/${url_serve}/users-perfil`}>
                                                            <i className="ti-user"></i>
                                                            <span>Profile</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <i className="ti-lock"></i>
                                                            <span>Lock Screen</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <i className="ti-power-off"></i>
                                                            <span>Logout</span>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )}
    {perfil === "admin" &&(
        <>
        <div className="header">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="float-left">
                                <div className="hamburger sidebar-toggle">
                                    <span className="line"></span>
                                    <span className="line"></span>
                                    <span className="line"></span>
                                </div>
                            </div>
                            <div className="float-right">                               
                                
                                <div className="dropdown dib">
                                    <div className="header-icon" data-toggle="dropdown">
                                        <span className="user-avatar">
                                            {dataClient?.name} 
                                             <i className="ti-angle-down f-s-10"></i>
                                        </span>
                                        <div className="drop-down dropdown-profile dropdown-menu dropdown-menu-right">                                           
                                            <div className="dropdown-content-body">
                                                <ul>
                                                    <li>
                                                        <a href={`/${url_serve}/users-perfil`}>
                                                            <i className="ti-user"></i>
                                                            <span>Profile</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <i className="ti-lock"></i>
                                                            <span>Lock Screen</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <i className="ti-power-off"></i>
                                                            <span>Logout</span>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )}
    </> );
}
 
export default NavbarDinamic;