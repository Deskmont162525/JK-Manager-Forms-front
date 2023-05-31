import React, { useState } from 'react';
import { Splitter, SplitterPanel } from 'primereact/splitter';
import { Accordion, AccordionTab } from 'primereact/accordion';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { Fieldset } from 'primereact/fieldset';
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';
import { Checkbox } from 'primereact/checkbox';
import { RadioButton } from 'primereact/radiobutton';
import { FormularioCampos } from '../formCamposDina';

const FormBuilder = () => {
    const [vistas, setVistas] = useState([]);
    const [displayDialog, setDisplayDialog] = useState(false);
    const [campoSeleccionado, setCampoSeleccionado] = useState(null);

    const tiposDeCampo = [
        { label: 'Texto', value: 'texto' },
        { label: 'Fecha', value: 'fecha' },
        { label: 'Selección', value: 'seleccion' },
        { label: 'Casilla de verificación', value: 'casillaVerificacion' },
        { label: 'Botón de opción', value: 'botonOpcion' }
    ];

    const agregarVista = () => {
        if (vistas.length >= 5) return;
        const nuevaVista = { campos: [] };
        setVistas((prevVistas) => [...prevVistas, nuevaVista]);
    };

    const eliminarUltimaVista = () => {
        if (vistas.length === 0) return;
        setVistas((prevVistas) => prevVistas.slice(0, prevVistas.length - 1));
    };

    const agregarCampo = (vistaIndex, campo) => {
        const nuevasVistas = vistas.slice();
        nuevasVistas[vistaIndex].campos.push(campo);
        setVistas(nuevasVistas);
    };

    const quitarCampo = (vistaIndex, campoIndex) => {
        const nuevasVistas = vistas.slice();
        nuevasVistas[vistaIndex].campos.splice(campoIndex, 1);
        setVistas(nuevasVistas);
    };

    const onCampoSeleccionadoChange = (e) => {
        const campoSeleccionado = { tipo: e.value };
        setCampoSeleccionado(campoSeleccionado);
        setDisplayDialog(true);
    };

    const agregarNuevoCampo = () => {
        const nuevasVistas = vistas.slice();
        nuevasVistas[nuevasVistas.length - 1]?.campos.push(campoSeleccionado);
        setVistas(nuevasVistas);
        setDisplayDialog(false);
        setCampoSeleccionado(null);
    };

    const renderCampoDialog = () => {
        return (
            <Dialog header="Agregar campo" visible={displayDialog} modal onHide={() => setDisplayDialog(false)}>
                <Fieldset legend="Tipo de campo">
                    <Dropdown value={campoSeleccionado ? campoSeleccionado.tipo : null} options={tiposDeCampo} onChange={onCampoSeleccionadoChange} placeholder="Seleccione un tipo de campo" />
                </Fieldset>
                {campoSeleccionado && campoSeleccionado.tipo === 'texto' && (
                    <Fieldset legend="Configuración del campo de texto">
                        <InputText placeholder="Etiqueta" />
                    </Fieldset>
                )}
                {campoSeleccionado && campoSeleccionado.tipo === 'fecha' && (
                    <Fieldset legend="Configuración del campo de fecha">
                        <InputText placeholder="Etiqueta" />
                    </Fieldset>
                )}
                {campoSeleccionado && campoSeleccionado.tipo === 'seleccion' && (
                    <Fieldset legend="Configuración del campo de selección">
                        <InputText placeholder="Etiqueta" />
                    </Fieldset>
                )}
                {campoSeleccionado && campoSeleccionado.tipo === 'casillaVerificacion' && (
                    <Fieldset legend="Configuración del campo de casilla de verificación">
                        <InputText placeholder="Etiqueta" />
                    </Fieldset>
                )}
                {campoSeleccionado && campoSeleccionado.tipo === 'botonOpcion' && (
                    <Fieldset legend="Configuración del campo de botón de opción">
                        <InputText placeholder="Etiqueta" />
                    </Fieldset>
                )}
                <div className="p-dialog-footer">
                    <Button label="Agregar" icon="pi pi-check" onClick={agregarNuevoCampo} />
                    <Button label="Cancelar" icon="pi pi-times" onClick={() => setDisplayDialog(false)} />
                </div>
            </Dialog>
        );
    };

    const renderVista = (vista, index) => {
        return (
            <AccordionTab key={`vista-${index}`} header={`Vista ${index + 1}`}>
              <FormularioCampos campos={vista?.campos} quitarCampo={(campoIndex) => quitarCampo(index, campoIndex)} />
            </AccordionTab>
          );
    };

    return (
        <Splitter style={{ height: '100%' }}>
            <SplitterPanel style={{ overflow: 'auto' }}>
                <Button label="Agregar vista" icon="pi pi-plus" className="p-button-rounded p-button-success" onClick={agregarVista} />
                <Button label="quitar vista" icon="pi pi-plus" className="p-button-rounded p-button-success" onClick={eliminarUltimaVista} />
                <Accordion>{vistas.map((vista, index) => renderVista(vista, index))}</Accordion>
            </SplitterPanel>            
            {renderCampoDialog()}
        </Splitter>
    );
};

export default FormBuilder;
