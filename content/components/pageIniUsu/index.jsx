
import { Button } from 'primereact/button';
import { useState } from 'react';
import FormGeneratorModal from '../formModal';


function ProfilePage() {
    const [showModal, setShowModal] = useState(false);

    const handleCreateForm = () => {
      setShowModal(true);
    };
  return (
    <div>
      <h1>Perfil de usuario</h1>
      <Button label="Solicitar formulario" icon="pi pi-plus" onClick={handleCreateForm} />

      <FormGeneratorModal showModal={showModal} onClose={() => setShowModal(false)} />
    </div>
  );
}

export default ProfilePage;