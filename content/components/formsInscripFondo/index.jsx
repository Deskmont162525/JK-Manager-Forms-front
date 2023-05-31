import { Button } from 'primereact/button';
import { Accordion, AccordionTab } from 'primereact/Accordion';

import React from 'react';
import Ratios from '../../elements/inputsRatios';
import { InputDate } from '../../utils/InputDate';
import InputRatio from '../../utils/InputRatio';
import { ImputSelect } from '../../utils/InputSelect';
import { ImputTextA } from '../../utils/InputTexArea';
import { ImputType } from '../../utils/InputType';
import { FormsDinamicosFamiliars } from '../formsFamiliDina';
import { Checkbox } from 'primereact/checkbox';
const dataDocumento = [
    { name: 'Cédula de Ciudadanía', code: 'C.C' },
    { name: 'Cédula de Extranjería', code: 'C.E' }
];
const dataEstadoC = [
    { name: 'Soltero/a', code: '1' },
    { name: 'Casado/a', code: '2' },
    { name: 'Unión Libre o Unión de Hecho', code: '3' },
    { name: 'Separado/a', code: '4' },
    { name: 'Divorciado/a', code: '5' },
    { name: 'Viudo/a', code: '6' }
];

const dataEstrato = [
    { name: '1', code: '1' },
    { name: '2', code: '2' },
    { name: '3', code: '3' },
    { name: '4', code: '4' },
    { name: '5', code: '5' },
    { name: '6', code: '6' },
    { name: 'No aplica', code: 'N/A' }
];

const dataTipoVivi = [
    { name: 'propia', label: 'Propia' },
    { name: 'arrendada', label: 'Arrendada' },
    { name: 'familiar', label: 'Familiar' },
    { name: 'otra', label: 'Otra' }
];

const dataSiNo = [
    { name: 'si', label: 'Si' },
    { name: 'no', label: 'No' }
];

const dataTipoCuenta = [
    { name: 'ahorro', label: 'Ahorro' },
    { name: 'corriente', label: 'Corriente' }
];

const FormInscripcionF = () => {
    const [value1, setValue1] = React.useState();
    const [valueVivienda, setValueVivienda] = React.useState();
    const [error, setError] = React.useState({});
    const [select, setSelect] = React.useState({});
    const [date, setDate] = React.useState({});
    const [count, setCount] = React.useState({
        familiar2: false,
        familiar3: false,
        familiar4: false
    });

    const onClickFamiliAdd = (e) => {
        e.preventDefault();
        if (count?.familiar2 === false) {
            setCount({
                ...count,
                familiar2: true
            });
        } else if (count?.familiar3 === false) {
            setCount({
                ...count,
                familiar3: true
            });
        } else if (count?.familiar4 === false) {
            setCount({
                ...count,
                familiar4: true
            });
        }
    };
    const onClickFamiliElimi = (e) => {
        e.preventDefault();

        if (count?.familiar4 === true) {
            setCount({
                ...count,
                familiar4: false
            });
        } else if (count?.familiar3 === true) {
            setCount({
                ...count,
                familiar3: false
            });
        } else if (count?.familiar2 === true) {
            setCount({
                ...count,
                familiar2: false
            });
        }
    };

    console.log('count', count);
    const expresiones = {
        usuario: /^[a-zA-Z0-9_-]{4,16}$/, // Letras, numeros, guion y guion_bajo
        nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
        password: /^.{4,12}$/, // 4 a 12 digitos.
        correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
        telefono: /^\d{7,14}$/ // 7 a 14 numeros.
    };

    const onChangeInput = (e) => {
        setValue1(e.target.value);
    };
    const onChangeDate = (e) => {
        setValue1(e.value);
    };
    const onChangeSelect = (e) => {
        setValue1(e.value);
    };

    const onSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <div className="col-12">
            <div className="card">
                <div className="p-fluid formgrid grid">
                    <form className="row g-3">
                        <ImputType type="text" name="ciudad" label="Ciudad *" value={value1} setValue={setValue1} error={error} setError={setError} placeHolder="Ingresa el nombre de la ciudad o municipio actual" required={true} />
                        <InputDate name="fechaDili" label="Fecha de diligenciamiento *" value={date} setValue={setDate} error={error} setError={setError} required={true} />
                        <div className="text-700 text-left">
                            <div className="text-600 font-bold text-3xl mb-3">INFORMACIÓN PERSONAL</div>
                            <div className="text-700 text-1xl mb-2">Por favor lea muy bien los enunciados para garantizar el correcto diligenciamiento del formulario de afiliación.</div>
                        </div>
                        <ImputType type="text" name="nombres" label="Nombre/s*" value={value1} onChangeInput={onChangeInput} error={error} setError={setError} placeHolder="Ingresa tu nombre/s" required={true} />
                        <ImputType type="text" name="apellidos" label="Apellido/s *" value={value1} onChangeInput={onChangeInput} error={error} setError={setError} placeHolder="Ingresa tu apellido/s" required={true} />
                        <ImputSelect name="tipoDoc" label="Tipo de Documento *" value={select} setValue={setSelect} dataS={dataDocumento} error={error} setError={setError} placeHolder="Selecciona una opción" />
                        <ImputType
                            type="number"
                            name="numDocu"
                            label="Número de tu documento de identidad *"
                            value={value1}
                            onChangeInput={onChangeInput}
                            error={error}
                            setError={setError}
                            placeHolder="Ingresa tu número de documento"
                            required={true}
                        />
                        <InputDate name="fechaExpediDoc" label="Fecha de expedición del documento *" value={date} setValue={setDate} error={error} setError={setError} required={true} />
                        <ImputType
                            type="text"
                            name="ciudadExpediDoc"
                            label="Ciudad de expedición del documento *"
                            value={value1}
                            onChangeInput={onChangeInput}
                            error={error}
                            setError={setError}
                            placeHolder="Ingresa tu número de documento"
                            required={true}
                        />
                        <InputDate name="fechaNaci" label="Fecha de Nacimiento *" value={date} setValue={setDate} error={error} setError={setError} required={true} />
                        <ImputSelect name="estadoCivil" label="Estado Civil *" value={select} setValue={setSelect} dataS={dataEstadoC} error={error} setError={setError} placeHolder="Selecciona una opción" />
                        <ImputType type="text" name="profesion" label="Profesión y/o Ocupación *" value={value1} onChangeInput={onChangeInput} error={error} setError={setError} placeHolder="Ingresa tu número de documento" required={true} />
                        <div className="text-700 text-left">
                            <div className="text-600 font-bold text-3xl mb-3">INFORMACIÓN DE UBICACIÓN Y CONTACTO</div>
                            <div className="text-700 text-1xl mb-2">Diligencia su información de contacto, asegurándose que quede correcta.</div>
                        </div>


                        <ImputType type="number" name="telefono" label="Teléfono y/o Celular *" value={value1} onChangeInput={onChangeInput} error={error} setError={setError} placeHolder="Ingresa tu número de cel o fijo" required={true} />
                        <ImputType type="email" name="correo" label="Email *" value={value1} onChangeInput={onChangeInput} error={error} setError={setError} placeHolder="Ingresa tu email" required={true} />
                        <ImputType type="text" name="ciudadR" label="Ciudad de residencia *" value={value1} onChangeInput={onChangeInput} error={error} setError={setError} placeHolder="Ingresa tu ciudad de residencia" required={true} />
                        <ImputType
                            type="text"
                            name="direccion"
                            label="Dirección de residencia *"
                            value={value1}
                            onChangeInput={onChangeInput}
                            error={error}
                            setError={setError}
                            placeHolder="Ingresa tu dirección (Si vive en una vereda, especifique el nombre)"
                            required={true}
                        />
                        <ImputSelect name="estrato" label="Estrato *" value={select} setValue={setSelect} dataS={dataEstrato} error={error} setError={setError} placeHolder="Selecciona una opción" />

                        <div className="text-700 text-left">
                            <Ratios key="1" label="Tipo de Vivienda *" array={dataTipoVivi} error={error} setError={setError} value={valueVivienda} setValue={setValueVivienda} required={true} />
                        </div>

                        
                        <div className="text-700 text-left">
                            <div className="text-600 font-bold text-3xl mb-3">INFORMACIÓN LABORAL FINANCIERA</div>
                        </div>
                        <Ratios key="2" label="¿Realiza transacciones en moneda extranjera? *" array={dataSiNo} error={error} setError={setError} value={valueVivienda} setValue={setValueVivienda} required={true} />

                        <ImputTextA
                            type="text"
                            name="direccion"
                            label="En caso de que si realice transacciones en moneda extranjera, especifique: Tipo de transacción, entidad y moneda; de lo contrario escriba NO APLICA"
                            value={value1}
                            onChangeInput={onChangeInput}
                            error={error}
                            setError={setError}
                            placeHolder="Ingresa texto aqui"
                            required={true}
                        />
                        <ImputType type="text" name="ciudadR" label="Ciudad de residencia *" value={value1} onChangeInput={onChangeInput} error={error} setError={setError} placeHolder="Ingresa tu ciudad de residencia" required={true} />
                        <ImputType type="text" name="ciudadR" label="Ciudad de residencia *" value={value1} onChangeInput={onChangeInput} error={error} setError={setError} placeHolder="Ingresa tu ciudad de residencia" required={true} />
                        <ImputType type="text" name="ciudadR" label="Ciudad de residencia *" value={value1} onChangeInput={onChangeInput} error={error} setError={setError} placeHolder="Ingresa tu ciudad de residencia" required={true} />
                        <ImputType type="number" name="telefono" label="Teléfono y/o Celular *" value={value1} onChangeInput={onChangeInput} error={error} setError={setError} placeHolder="Ingresa tu número de cel o fijo" required={true} />
                        <ImputType type="number" name="telefono" label="Teléfono y/o Celular *" value={value1} onChangeInput={onChangeInput} error={error} setError={setError} placeHolder="Ingresa tu número de cel o fijo" required={true} />
                        <Ratios key="3" label="Por su cargo o actividad ¿Maneja recursos públicos? *" array={dataSiNo} error={error} setError={setError} value={valueVivienda} setValue={setValueVivienda} required={true} />
                        <ImputType type="text" name="ciudadR" label="Ciudad de residencia *" value={value1} onChangeInput={onChangeInput} error={error} setError={setError} placeHolder="Ingresa tu ciudad de residencia" required={true} />
                        <Ratios key="4" label="Tipo de cuenta bancaria *" array={dataTipoCuenta} error={error} setError={setError} value={valueVivienda} setValue={setValueVivienda} required={true} />
                        <ImputType type="text" name="ciudadR" label="Número de Cuenta *" value={value1} onChangeInput={onChangeInput} error={error} setError={setError} placeHolder="Ingresa tu ciudad de residencia" required={true} />
                        
                        <div className="text-700 text-left">
                            <div className="text-600 font-bold text-3xl mb-3">DATOS GRUPO FAMILIAR BÁSICO</div>
                            <div className="text-700 text-1xl mb-2">Favor diligenciar todos los espacios de manera completa, al igual que el porcentaje que le otorgara a los beneficiarios para la entrega de los aportes en caso de fallecimiento.</div>
                            <div className="text-700 text-1xl mb-2">Puedes agregar hasta 4 familiares y debes indicar la cantidad de porcentaje que le corresponderá en caso de fallecimiento a cada uno de ellos</div>
                            <div className="text-600 font-bold text-3xl mb-3">Ejemplo: mama 70%, hermano 15% papa 15% etc..</div>
                        </div>
                        <div className=" ">
                            {!count?.familiar4 && <Button label="Agregar Familiar" className="p-button-raised" onClick={onClickFamiliAdd} />}

                            {count?.familiar2 && <Button label="Eliminar Familiar" className="p-button-raised p-button-secondary" onClick={onClickFamiliElimi} />}
                            <FormsDinamicosFamiliars count={count} element={[]} />
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
                            name="ciudadR"
                            label="Valor del Ahorro (Especifica el valor del ahorro que quieras iniciar en el fondo )*"
                            value={value1}
                            onChangeInput={onChangeInput}
                            error={error}
                            setError={setError}
                            placeHolder="Ingresa tu ciudad de residencia"
                            required={true}
                        />
                        <ImputSelect name="estrato" label="¿Cuál es la periodicidad del pago de tu nómina?" value={select} setValue={setSelect} dataS={dataEstrato} error={error} setError={setError} placeHolder="Selecciona una opción" />
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
                                <p className="m-2">
                                    <div className="field-checkbox">
                                        <Checkbox inputId="checkOption1" name="option" value="Chicago" />
                                        <label htmlFor="checkOption1">Chicago</label>
                                    </div>
                                </p>
                            </AccordionTab>
                        </Accordion>

{/* seccion para la firma y para la carga de las imagenes */}

                        <Ratios key="5" label="Por su cargo o actividad ¿Ejerce algún grado de poder público? *" array={dataTipoCuenta} error={error} setError={setError} value={valueVivienda} setValue={setValueVivienda} required={true} />                       
                        <div style={{ paddingTop: 20 }}>
                            <Button type="submit" label="Enviar Formulario" className="p-button-raised p-button-warning" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default FormInscripcionF;
