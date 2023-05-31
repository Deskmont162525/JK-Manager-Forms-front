import { Accordion, AccordionTab } from 'primereact/Accordion';
import { Checkbox } from 'primereact/checkbox';
import React from 'react';
import { FormsDinamicosFamiliars } from '../../components/formsFamiliDina';
import { ImputSelect } from '../../utils/InputSelect';
import { ImputType } from '../../utils/InputType';
import { onChangeInput } from '../../../data/functions';
import { dataPeriodo } from '../../../data/arrays';

const FormDinamico4 = ({ stateTemp3, setStateTemp3, error, setError, errorF, setErrorF }) => {
    React.useEffect(() => {
        window.scrollTo(0, 0); // Establece el foco al inicio de la página
    }, []);
    const handleChange = (event) => {
        const dataSend = {
            target: {
                name: event.target.name,
                value: event.checked
            }
        };
        onChangeInput(dataSend, { error, setError }, stateTemp3, setStateTemp3);
    };

    const onChangeInputForm = (e) => {
        onChangeInput(e, { error, setError }, stateTemp3, setStateTemp3);
    };

    // console.log('que pasa 4', error, stateTemp3);
    return (
        <div className="col-12">
            <div className="card">
                <div className="p-fluid formgrid grid">
                    <form className="row g-3">
                        <div className={error?.familiares ? 'form-container error-div' : 'form-container'}>
                            <FormsDinamicosFamiliars stateTemp3={stateTemp3} familiares={stateTemp3?.familiares} error={error} setError={setError} setStateTemp3={setStateTemp3} errorF={errorF} setErrorF={setErrorF} />
                            {error?.familiares && (
                                <div id="termino_condiciones" className="error-label">
                                    Debes nombrar almenos un familiar *
                                </div>
                            )}
                        </div>

                        <Accordion activeIndex={0}>
                            <AccordionTab header="Información Legal por Fallecimiento">
                                <p className="m-2">
                                    En caso de fallecimiento del asociado, el fondo de empleados Grupo Empresarial Uno A - FOET, hará entrega a sus beneficiarios dentro de los términos establecidos en los estatutos y de acuerdo con la normatividad
                                    legal vigente (Decreto 564 de 1996 y Decreto 2349 de 1965) Sera obligación del asociado mantener actualizada la información de sus beneficiarios.
                                </p>
                                <p className="m-2">
                                    En mi calidad de empleado en misión de TEMPORALES UNO A S.A, TEMPORALES UNO A BOGOTA S.A. SERVICOMPETENTES,IMS SAS TEMPOLIDER DE COLOMBIA SA, MAXEMPLEOS, ASYPRO y COMPAÑIA SUMA, de las ciudades BOGOTA, MEDELLIN,
                                    CALI, BARRANQUILLA, IBAGUE, GIRARDOT, NEIVA Y YOPAL, les solicito sea aceptada mi afiliación, de ser aprobada esta, me comprometo a cumplir con los reglamentos internos del FOET, las disposiciones del sector
                                    solidario, regido bajo la ley 79/88, Decreto 14/89, ley 454/98, ley 1391/10, ley de libranzas 1527/12 y circular Externa 006/14.
                                </p>
                                <p className="m-2">
                                    Declaro además que el origen de los recursos relacionados anteriormente no proviene de ninguna actividad ilícita de las contempladas en el Código Penal Colombiano. Cualquier inexactitud respecto a la información
                                    consignada, exime a FOET, de toda responsabilidad derivada, facultándolo dar por terminada la relación comercial y solidaría y denunciar dichas imprecisiones a las autoridades competentes.
                                </p>
                                <p className="m-2">
                                    Autorizo expreso y voluntariamente a FOET para consultar, verificar, reportar y transmitir información personal, económica y financiera del suscrito y en especial sobre mi comportamiento comercial en las Centrales
                                    de Riesgo para efectos de legalizar mi afiliación al Empleador, para que efectúe a nombre y a favor de FOET los siguientes descuentos:
                                </p>
                            </AccordionTab>
                        </Accordion>

                        <ImputType
                            type="number"
                            name="valor_ahorro"
                            label="Valor del Ahorro (Especifica el valor del ahorro que quieras iniciar en el fondo )*"
                            value={stateTemp3?.valor_ahorro}
                            setValue={onChangeInputForm}
                            error={error?.valor_ahorro}
                            placeHolder="Ingresa tu valor del Ahorro"
                        />
                        <ImputSelect
                            name="periodo_nomina"
                            label="¿Cuál es la periodicidad del pago de tu nómina?"
                            value={stateTemp3?.periodo_nomina}
                            setValue={onChangeInputForm}
                            dataS={dataPeriodo}
                            error={error?.periodo_nomina}
                            placeHolder="Selecciona una opción"
                        />
                        <Accordion activeIndex={0}>
                            <AccordionTab header='AUTORIZACIÓN PARA EL TRATAMIENTO DE DATOS PERSONALES POR EL FONDO DE EMPLEADOS GRUPO EMPRESARIAL UNO A "FOET"'>
                                <p className="m-2">
                                    Para Bases de datos creadas después de la entrada en la vigencia de la Política de Tratamiento de información. Con el propósito de dar un adecuado tratamiento a sus datos personales de acuerdo al Régimen General de
                                    Protección de Datos personales reglamentado por la Constitución Política Nacional, la ley 1581 de 2012 y el decreto 1377 de 2013, que desarrolla los derechos constitucionales que tienen las personas de conocer,
                                    actualizar y rectificar todo tipo de información que de ellas sea objeto de tratamiento en bases de datos de entidades públicas y/o privadas, y siendo primordial para el FONDO DE EMPLEADOS GRUPO EMPRESARIAL UNO A -
                                    FOET, debe contar con su consentimiento previo, expreso y escrito , en el que nos faculte a mantener una comunicación constante con usted
                                </p>
                                <p className="m-2">
                                    Le compartimos que el FONDO DE EMPLEADOS GRUPO EMPRESARIAL UNOA - FOET cuenta con una política De Tratamiento De Información , por medio de la cual se establecen los parámetros para manejar la información contenida
                                    en los Bancos y Bases de Datos del Fondo.
                                </p>
                                <p className="m-2">
                                    Los datos personales que usted nos autoriza a tratar mediante la recolección, el almacenamiento y el uso de los mismos, se realiza de acuerdo a las finalidades descritas en el Artículo 8 de la mencionada política.
                                </p>
                                <p className="m-2">
                                    Usted, como titular de sus datos personales, tiene todo el derecho de conocer, corregir, actualizar, rectificar o suprimir los datos personales que suministra al FONDO EMPLEADOS GRUPO EMPRESARIAL UNO A - FOET, para
                                    que sean tratados por esta.
                                </p>
                                <p className="m-2">
                                    Si es su deseo realizar cualquiera de estas acciones, lo invitamos a consultar el Artículo 12 de la política de Tratamiento de Información del FONDO EMPLEADOS GRUPO EMPRESARIAL UNO A - FOET, para conocer el
                                    procedimiento que debe realizar, puede enviar su solicitud a la dirección carrera 7 No 14-26 piso 3, Edificio Alcalá o Escribirnos al correo electrónico foet_unoa@hotmail.com, Teléfono (57 8) 262 2165 de la ciudad
                                    de Ibagué - Colombia.
                                </p>
                                <p className="m-2">
                                    El FONDO EMPLEADOS GRUPO EMPRESARIAL UNO A- FOET de acuerdo a lo reglamentado por el artículo 10 del Decreto 1377 de 2013, queda autorizada de manera inequívoca y expresa para tratar sus datos personales. Sin
                                    Embargo, usted podrá revocar la presente autorización manifestándolo al correo foet_unoa@hotmail.com o a la dirección anteriormente mencionada.
                                </p>
                                <p className="m-2">Para el FONDO EMPLEADOS GRUPO EMPRESARIAL UNO A - FOET es muy grato contar con usted.</p>
                                <div className="m-2">
                                    <div className={error?.termino_condiciones ? 'field-checkbox error-div' : 'field-checkbox'}>
                                        <Checkbox className={error?.termino_condiciones ? 'p-invalid' : ''} name="termino_condiciones" inputId="checkOption1" onChange={handleChange} checked={stateTemp3?.termino_condiciones}></Checkbox>
                                        <label htmlFor="checkOption1">Acepto los términos y condiciones *</label>
                                    </div>
                                    {error?.termino_condiciones && (
                                        <div id="termino_condiciones" className="error-label">
                                            Campo obligatorio *
                                        </div>
                                    )}
                                </div>
                            </AccordionTab>
                        </Accordion>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default FormDinamico4;
