import React, { useState, useContext } from 'react';
import { Button } from 'primereact/button';
import FormDinamico1 from '../formDina1';
import FormDinamico5 from '../formDina5';
import FormDinamico4 from '../formDina4';
import FormDinamico3 from '../formDina3';
import FormDinamico2 from '../formDina2';
import { infoStepContext } from '../../../context/infoStepContext';
import EditFormStep from '../stepDinami';
import { items } from '../../../data/arrays';
import { onchangeStep, onchangeStepBack, validarFamiliares, validateSection, validateSectionImages } from '../../../data/functions';
import DinamicModal from '../../utils/Modals';
import { addInfoStepContacto, addInfoStepFamiliar, addInfoStepFinanciera, addInfoStepPersonal } from '../../../actions/infoStepsActions';

export const CardStepFormDinami = () => {
    const { infoSteps, dispatchInfoSteps } = useContext(infoStepContext);
    const [activeIndex, setActiveIndex] = useState(0);
    const [stateTemp, setStateTemp] = React.useState(infoSteps?.info_p);
    const [stateTemp1, setStateTemp1] = React.useState(infoSteps?.info_uc);
    const [stateTemp2, setStateTemp2] = React.useState(infoSteps?.info_ilf);
    const [stateTemp3, setStateTemp3] = React.useState(infoSteps?.info_dgfb);
    const [stateTemp4, setStateTemp4] = React.useState(infoSteps?.info_images);
    const stateError = {
        title: 'Error al guardar información',
        message: 'Se produjo un error al guardar la información. Inténtalo de nuevo más tarde.',
        status: 'error'
    };
    const stateError2 = {
        title: 'Error en familiares',
        message: 'Debes agregar almenos un familiar O, No puedes dejar campos vacios de familiares',
        status: 'error'
    };
    const [errorF, setErrorF] = React.useState(Object.fromEntries(stateTemp3?.familiares.map((_, index) => [index, {}])));
    const [error, setError] = React.useState({});
    const [openModal, setOpenModal] = React.useState(false);
    const changeModal = () => setOpenModal(!openModal);
    const [stateModal, setStateModal] = React.useState({
        title: '',
        message: '',
        status: ''
    });

    const onChangePageNext = async (event) => {
        event.preventDefault();
        let valid = true;
        if (activeIndex === 0) {
            valid = validateSection(stateTemp, setStateModal, changeModal, error, setError);
            if (valid) {
                const response = await addInfoStepPersonal({ stateTemp, dispatchInfoSteps });

                if (response.code === 200) {
                    onchangeStep({ activeIndex, setActiveIndex });
                } else {
                    if (response?.code === 540) {
                        setError({
                            ...error,
                            email: true
                        });
                    }
                    setStateModal(stateError);
                    changeModal();
                }
            }
        } else if (activeIndex === 1) {
            valid = validateSection(stateTemp1, setStateModal, changeModal, error, setError);
            if (valid) {
                const response = addInfoStepContacto({ stateTemp1, dispatchInfoSteps });
                if (response) {
                    onchangeStep({ activeIndex, setActiveIndex });
                } else {
                    setStateModal(stateError);
                    changeModal();
                }
            }
        } else if (activeIndex === 2) {
            valid = validateSection(stateTemp2, setStateModal, changeModal, error, setError);
            if (valid) {
                const response = addInfoStepFinanciera({ stateTemp2, dispatchInfoSteps });
                if (response) {
                    onchangeStep({ activeIndex, setActiveIndex });
                } else {
                    setStateModal(stateError);
                    changeModal();
                }
            }
        } else if (activeIndex === 3) {
            const validaFami = validarFamiliares(stateTemp3?.familiares, errorF, setErrorF);
            if (validaFami) {
                setStateModal(stateError2);
                changeModal();
                setError({
                    ...error,
                    familiares: true
                });
            } else {
                valid = validateSection(stateTemp3, setStateModal, changeModal, error, setError);
                if (valid) {
                    const response = addInfoStepFamiliar({ stateTemp3, dispatchInfoSteps });
                    if (response) {
                        onchangeStep({ activeIndex, setActiveIndex });
                    } else {
                        setStateModal(stateError);
                        changeModal();
                    }
                }
            }
        }
    };

    const onChangePageBack = (event) => {
        event.preventDefault();
        onchangeStepBack({ activeIndex, setActiveIndex });
    };
    return (
        <>
            <EditFormStep items={items} activeIndex={activeIndex} />

            <div>
                {activeIndex === 0 && (
                    <div className="card">
                        <div className="text-700 text-left">
                            <div className="text-600 font-bold text-3xl mb-3">INFORMACIÓN PERSONAL</div>
                            <div className="text-700 text-1xl mb-2">Por favor lea muy bien los enunciados para garantizar el correcto diligenciamiento del formulario de afiliación.</div>
                        </div>
                        <FormDinamico1 stateTemp={stateTemp} setStateTemp={setStateTemp} error={error} setError={setError} />
                    </div>
                )}
                {activeIndex === 1 && (
                    <div className="card">
                        <div className="text-700 text-left">
                            <div className="text-600 font-bold text-3xl mb-3">INFORMACIÓN DE UBICACIÓN Y CONTACTO</div>
                            <div className="text-700 text-1xl mb-2">Diligencia su información de contacto, asegurándose que quede correcta.</div>
                        </div>
                        <FormDinamico2 stateTemp1={stateTemp1} setStateTemp1={setStateTemp1} error={error} setError={setError} />
                    </div>
                )}
                {activeIndex === 2 && (
                    <div className="card">
                        <div className="text-700 text-left">
                            <div className="text-600 font-bold text-3xl mb-3">INFORMACIÓN LABORAL FINANCIERA</div>
                        </div>
                        <FormDinamico3 stateTemp2={stateTemp2} setStateTemp2={setStateTemp2} error={error} setError={setError} />
                    </div>
                )}

                {activeIndex === 3 && (
                    <div className="card">
                        <div className="text-700 text-left">
                            <div className="text-600 font-bold text-3xl mb-3">DATOS GRUPO FAMILIAR BÁSICO</div>
                            <div className="text-700 text-1xl mb-2">Favor diligenciar todos los espacios de manera completa, al igual que el porcentaje que le otorgara a los beneficiarios para la entrega de los aportes en caso de fallecimiento.</div>
                            <div className="text-700 text-1xl mb-2">Puedes agregar hasta 4 familiares y debes indicar la cantidad de porcentaje que le corresponderá en caso de fallecimiento a cada uno de ellos</div>
                            <div className="text-600 font-bold text-3xl mb-3">Ejemplo: mama 70%, hermano 15% papa 15% etc..</div>
                        </div>
                        <FormDinamico4 stateTemp3={stateTemp3} setStateTemp3={setStateTemp3} error={error} setError={setError} errorF={errorF} setErrorF={setErrorF} />
                    </div>
                )}

                {activeIndex === 4 && (
                    <div className="card">
                        <div className="text-700 text-left">
                            <div className="text-600 font-bold text-3xl mb-3">DOCUMENTOS</div>
                            <div className="text-700 text-1xl mb-2">Ingreso de documentos requeridos.</div>
                        </div>
                        <FormDinamico5 stateTemp4={stateTemp4} setStateTemp4={setStateTemp4} error={error} setError={setError} />
                    </div>
                )}
                <div style={{ paddingTop: 10, display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }} className="col-12">
                    {activeIndex !== 0 && <Button type="button" label="ANTERIOR" className="p-button-raised p-button-warning" onClick={onChangePageBack} />}
                    {activeIndex !== 4 && <Button type="button" label="SIGUIENTE" className="p-button-raised p-button-warning" onClick={onChangePageNext} />}
                </div>
            </div>
            <DinamicModal title={stateModal?.title} message={stateModal?.message} status={stateModal?.status} openModal={openModal} toggleModal={changeModal} />
        </>
    );
};
