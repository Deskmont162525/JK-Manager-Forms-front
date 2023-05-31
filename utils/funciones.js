


export function generatePageCode(formName) {
    const encodedName = encodeURIComponent(formName);
    return `
      import { useState } from 'react';
      import { InputText } from 'primereact/inputtext';
      import { InputNumber } from 'primereact/inputnumber';
      import { Button } from 'primereact/button';
  
      function ${encodedName}() {
        const [formName, setFormName] = useState('');
        const [numSections, setNumSections] = useState(0);
  
        const handleSubmit = (event) => {
          event.preventDefault();
          // Envía los datos del formulario al servidor utilizando fetch
          fetch('/api/submit-form', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ formName, numSections }),
          }).then((response) => {
            // Maneja la respuesta del servidor
            if (response.ok) {
              // Redirecciona al usuario a la página de éxito
              window.location.href = '/success';
            } else {
              console.log('Ocurrió un error al enviar el formulario');
            }
          });
        };
  
        return (
          <form onSubmit={handleSubmit}>
            <div className="p-fluid">
              <div className="p-field">
                <label htmlFor="form-name">Nombre del formulario</label>
                <InputText id="form-name" value={formName} onChange={(e) => setFormName(e.target.value)} />
              </div>
              <div className="p-field">
                <label htmlFor="num-sections">Cantidad de secciones</label>
                <InputNumber id="num-sections" value={numSections} onChange={(e) => setNumSections(e?.target?.value)} />
              </div>
              <div className="p-field">
                <Button label="Enviar formulario" type="submit" />
              </div>
            </div>
          </form>
        );
      }
  
      export default ${encodedName};
    `;
  }

  
  function handleCreateForm() {
    const pageCode = generatePageCode(formName);
    console.log('page code', pageCode);
  
    // Envía el código del archivo al servidor utilizando fetch
    fetch('/api/create-page', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ formName, pageCode }),
    }).then((response) => {
      // Maneja la respuesta del servidor
      if (response.ok) {
        // Redirecciona al usuario a la página del formulario creado
        window.location.href = `/forms/${formName}`;
      } else {
        console.log('Ocurrió un error al crear el formulario');
      }
    });
  }
  