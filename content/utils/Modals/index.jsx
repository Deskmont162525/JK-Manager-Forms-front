import React from 'react';
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import { classNames } from 'primereact/utils';
import 'primeicons/primeicons.css';

const DinamicModal = ({ title, message, status, openModal, toggleModal }) => {
    // Función que devuelve el icono correspondiente según el estado
    const getStatusIcon = () => {
        switch (status) {
            case 'alert':
                return <i className="pi pi-exclamation-triangle p-mr-2" style={{ fontSize: '2rem', color: '#FFA500' }}></i>;
            case 'error':
                return <i className="pi pi-times-circle p-mr-2" style={{ fontSize: '2rem', color: '#FF0000' }}></i>;
            case 'success':
                return <i className="pi pi-check-circle p-mr-2" style={{ fontSize: '2rem', color: '#008000' }}></i>;
            default:
                return null;
        }
    };

    return (
        <Dialog
            header={
                <div className="p-d-flex p-ai-center">
                    {getStatusIcon()}
                    <h4 className="p-m-0">{title}</h4>
                </div>
            }
            visible={openModal}
            onHide={toggleModal}
            modal
            style={{margin: "20%"}}
            className={classNames({ 'p-dialog-success': status === 'success', 'p-dialog-warning': status === 'alert', 'p-dialog-danger': status === 'error' })}
            footer={<Button label="OK" onClick={toggleModal} />}
        >
            <div>{message}</div>
        </Dialog>
    );
};

export default DinamicModal;
