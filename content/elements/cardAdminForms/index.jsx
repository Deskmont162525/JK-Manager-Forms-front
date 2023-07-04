import { useRouter } from 'next/router';
import React from 'react';

const url_serve = process.env.NEXT_PUBLIC_BASE_PATH;
const code = "$2a$10$VKysE8WMzdBajAm1pWpUDu.8j6C9Xt9CyChKa0LilF0nQPItoVkIK";

const CardAdminF = ({ ...props }) => {
    const [titleCahnge, setTitleChage] = React.useState("Copiar link")
    const router = useRouter();
    const copyLink = () => {
        const urlServe = window.location.origin; // Obtener la URL del servidor
        const link = `${urlServe}/${url_serve}/forms/${props.nameForm}/codigo=${code}&idform=${props.id}`;
        navigator.clipboard
            .writeText(link)
            .then(() => {
                setTitleChage("Link Copiado")
            })
            .catch((error) => {
                console.error('Error al copiar el enlace: ', error);
            });
    };
    return (
        <div className="col-12 md:col-6 lg:col-4">
            <div className="surface-card shadow-2 p-3 border-round card-ad2">
                <div className="icon-container-ad2">
                    <i className="pi pi-file"></i>
                </div>
                <div className="card-body-ad2">
                    <h3 className="card-title-ad2">{props.name}</h3>
                    <p className="card-description-ad2">{props.description}</p>
                    <div className="card-info-ad2">
                        <div className="card-info-ad2-ico">
                            <i className="pi pi-users">
                                <span style={{ margin: 5 }}>{props.count}</span>
                            </i>
                        </div>
                    </div>
                    <a href={`/${url_serve}/${props.url}/${props.id}`} className="card-button-ad2">
                        <i className="pi pi-eye"></i>
                        Ver más información
                    </a>{' '}
                    <a className="card-button-ad2" onClick={copyLink}>
                        <i className="pi pi-copy"></i>
                        {titleCahnge}
                    </a>
                </div>
            </div>
        </div>
    );
};

export default CardAdminF;
