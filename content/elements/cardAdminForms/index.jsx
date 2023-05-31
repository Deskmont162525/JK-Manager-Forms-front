import { useRouter } from 'next/router';

const url_serve = process.env.NEXT_PUBLIC_BASE_PATH;

const CardAdminF = ({...props}) => {
    console.log("ver que necesito para enviar ", props);
    const router = useRouter();
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
                                <i className="pi pi-users"><span style={{margin: 5}}>{props.count}</span></i>
                                
                            </div>                            
                        </div>
                        <a href={`/${url_serve}/${props.url}/${props.id}`} className="card-button-ad2">
                            <i className="pi pi-eye"></i>
                            Ver más información
                        </a>
                    </div>
            </div>
        </div>
    );
};

export default CardAdminF;
