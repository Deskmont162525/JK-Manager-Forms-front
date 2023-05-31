import { useState } from 'react';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import { InputNumber } from 'primereact/InputNumber';
import { InputTextarea } from 'primereact/inputtextarea';

const FormGeneratorModal = ({ showModal, onClose }) => {
    const [formName, setFormName] = useState('');
    const [formDescription, setFormDescription] = useState('');
    const [formSections, setFormSections] = useState(1);

    const handleCreateForm = () => {
        onClose();
    };

    return (
        <Dialog header="Crear nuevo formulario" visible={showModal} onHide={onClose} className="col-6">
            <div className="col-12">
                <div className="card">
                    <div className="p-fluid formgrid grid">
                        <form onSubmit={handleCreateForm} className="row g-3">
                            <div className="col-md-6">
                                <label htmlFor="formName" className="form-label">
                                    Nombre del formulario:
                                </label>
                                <InputText id="formName" value={formName} onChange={(e) => setFormName(e.target.value)} />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="formSections" className="form-label">
                                    Cantidad de secciones:
                                </label>
                                <InputNumber id="formSections" value={formSections} onChange={(e) => setFormSections(e.target.value)} mode="decimal" min={1} max={5} />
                            </div>
                            <div className="col-md-12">
                                <label htmlFor="formDescription" className="form-label">
                                    Descripción del formulario:
                                </label>
                                <InputTextarea id="formDescription" value={formDescription} onChange={(e) => setFormDescription(e.target.value)} />
                            </div>

                            <div className="flex justify-between">
                                <Button type="submit" label="Aceptar" className="mt-2" />
                                <Button label="Cancelar" onClick={onClose} className="p-button-secondary mt-2" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </Dialog>
    );
};

export default FormGeneratorModal;
