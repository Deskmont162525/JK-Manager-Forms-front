import { items } from './arrays';
import { isEmail } from 'validator';

const currentDate = new Date();
export const formattedDate = currentDate.toISOString().split('T')[0];
// funcion dinamica que permite signar el valor de un campo a un state
export const onChangeInput = (event, { setError, error }, stateTemp, setStateTemp) => {
    const { name, value } = event.target;
    if (value === '' || value === null || value === false) {
        setError({
            ...error,
            [name]: true
        });
    } else {
        setError({
            ...error,
            [name]: false
        });
    }
    setStateTemp({
        ...stateTemp,
        [name]: value
    });
};

// cambios de pagina
export const onchangeStep = ({ activeIndex, setActiveIndex }) => {
    if (items?.length > activeIndex + 1) {
        setActiveIndex(activeIndex + 1);
    }
};

export const onchangeStepBack = ({ activeIndex, setActiveIndex }) => {
    if (activeIndex > 0) {
        setActiveIndex(activeIndex - 1);
    }
};

// valida si hay errores en los campos del formulario
export function checkForErrors(error, setError, stateTemp, requiredFields) {
    // Si el objeto error está vacío, devolvemos true
    if (Object.keys(error).length === 0) {
        return { vacios: true };
    }

    if (Object.keys(error).length !== 0) {
        if (!validateRequiredFields(stateTemp, requiredFields, setError)) {
            return { vacios: true };
        }
    }

    // Recorremos las propiedades del objeto error
    for (const key in error) {
        // Si alguna propiedad tiene un valor true, significa que hay un error
        if (error.hasOwnProperty(key) && error[key]) {
            return { errors: true };
        }
    }

    // Si no hay ningún error, devolvemos false
    return false;
}

const validateRequiredFields = (state, requiredFields, setError) => {
    let hasEmptyField = false;
    for (let field of requiredFields) {
        if (!state[field]) {
            hasEmptyField = true;
            setError((prevState) => ({ ...prevState, [field]: true }));
        }
    }
    return !hasEmptyField;
};

export const objectToArray = (obj) => {
    return Object.keys(obj);
};

export const validateSection = (state, setStateModal, changeModal, error, setError) => {
    const hasErrors = validateObjectVacios(state, {error, setError});
    if (hasErrors.vacios) {
        setStateModal({
            title: 'Campos vacíos',
            message: 'Por favor, complete todos los campos requeridos antes de continuar.',
            status: 'alert'
        });
        changeModal();
    }
    if (hasErrors.errors) {
        setStateModal({
            title: 'Error en el formulario',
            message: 'Por favor, complete todos los campos requeridos y asegúrese de que sean válidos antes de enviar el formulario.',
            status: 'error'
        });
        // changeModal();
    }
    return !hasErrors;
};

// funciones formulario 4

export const onClickFamiliAdd = (e, { count, setCount }) => {
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

export const onClickFamiliElimi = (e, { count, setCount }) => {
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


// export const validarFamiliares = (familiares, errorF, setErrorF) => {
//     for (let objeto of familiares) {
//         if (Object.keys(objeto).length === 0) {
//             return true;
//         }
//         for (let valor of Object.values(objeto)) {
//             if (valor === '') {
//                 return true;
//             }
//         }
//     }
//     return false;
// };

export const validarFamiliares = (familiares, errorF, setErrorF) => {
    for (let index in familiares) {
      const objeto = familiares[index];
      if (Object.keys(objeto).length === 0) {
        setErrorF((prevState) => ({
          ...prevState,
          [index]: {
            ...prevState[index],
            error: true
          }
        }));
        return true;
      }
      for (let key in objeto) {
        const valor = objeto[key];
        if (valor === '') {
          setErrorF((prevState) => ({
            ...prevState,
            [index]: {
              ...prevState[index],
              [key]: true
            }
          }));
          return true;
        }
      }
    }
    return false;
  };

export function getCurrentDate() {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    return `${year}-${month < 10 ? '0' : ''}${month}-${day < 10 ? '0' : ''}${day}`;
}

//   page super admin

export const validateSectionSA = (state, setError, repeatPassword) => {
    let hasErrors = false;
    let message = '';
    for (const field in state) {
        if (state[field] === '') {
            hasErrors = true;
            setError((prevState) => ({
                ...prevState,
                [field]: true
            }));
        }
    }

    if (hasErrors) {
        if (repeatPassword === '') {
            setError((prevState) => ({
                ...prevState,
                repeatPassword: true
            }));
        }
        message = 'Hay campos vacíos por favor verífica y vuelve a intentar.';
    }
    if (state?.password !== repeatPassword) {
        message = 'Las contraseñas no coinciden por favor verífica y vuelve a intentar.';
    }

    return { hasErrors: hasErrors, message: message };
};

export const validateSectionSA2 = (state, setError) => {
    let hasErrors = true;
    let message = '';
    for (const field in state) {
        if (state[field] === '') {
            hasErrors = false;
            setError((prevState) => ({
                ...prevState,
                [field]: true
            }));
        }
    }
    if (!hasErrors) {
        message = 'Hay campos vacíos, por favor verifica y vuelve a intentar.';
    }

    return { hasErrors: hasErrors, message: message };
};

// decode token
import jwt_decode from 'jwt-decode';

export function decodeToken(token) {
    try {
        const decoded = jwt_decode(token);
        return decoded;
    } catch (err) {
        console.error(err);
        return null;
    }
}

export function validateTokenExpiration(expiration) {
    var expirationDate = new Date(expiration * 1000);
    if (expirationDate < new Date()) {
        return '0000'; // Token vencido
    }
    return '0001'; // Token válido
}

export const obtenerFechaSinHora = (fecha) => {
    const fechaCompleta = new Date(fecha);
    const anio = fechaCompleta.getFullYear();
    const mes = (fechaCompleta.getMonth() + 1).toString().padStart(2, '0');
    const dia = fechaCompleta.getDate().toString().padStart(2, '0');

    if (fecha !== undefined) {
        return `${anio}-${mes}-${dia}`;
    }
};
export const obtenerEstado= (estado) => {
   let tempEstado

    if (estado !== undefined) {
        if(estado === true){
            tempEstado = "Activo"
        } else {
            tempEstado = "InActivo"
        }
    }
    return tempEstado;
};

// form images step 5

export const validateSectionImages = (state, setStateModal, changeModal, error, setError) => {
    const {image, image1, image2} = state;
    let hasErrors = {vacios: false};

    if(image === "" || image1 === "" || image2 === ""){
        hasErrors.vacios = true;
        setError({
            ...error,
            image: image === "" ? true : false,
            image1: image1 === "" ? true : false,
            image2: image2 === "" ? true : false,
        })
    }
    if (hasErrors.vacios) {
        setStateModal({
            title: 'Campos vacíos',
            message: 'Por favor, complete todos los campos requeridos antes de continuar.',
            status: 'alert'
        });
        changeModal();
    }
    if (hasErrors.errors) {
        setStateModal({
            title: 'Error en el formulario',
            message: 'Por favor, complete todos los campos requeridos y asegúrese de que sean válidos antes de enviar el formulario.',
            status: 'error'
        });
        // changeModal();
    }
    return hasErrors;
};


// otro validar vacios 

function validateObjectVacios(obj, { error, setError }) {
    let hasError = false;
    const updatedErrorState = { ...error }; 

    for (const key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            if (key === 'termino_condiciones' && obj[key] === false) {
              updatedErrorState[key] = true;
              hasError = true;
            }
          if (obj[key] === '') {           
            if (key === 'otros_ingresos' || key === 'detalle_trans_moneda_e' || key === 'termino_condiciones') {
              continue;
            } else {
              updatedErrorState[key] = true;
              hasError = true;
            }
          } else {
            if (key === 'termino_condiciones') {
                continue;
              } else {
                updatedErrorState[key] = false;
              }            
          }
        }
      }  
    setError(updatedErrorState);
  
    return hasError;
  }
  

//   funciones para solicitar forms
export const onChangeCampoReque = (index, value, {setError, error}, stateTemp, setStateTemp) => {
    const nuevosCamposRequeridos = [...stateTemp.camposRequeridos];
    nuevosCamposRequeridos[index] = {
      ...nuevosCamposRequeridos[index],
      label: value
    };
  
    const nuevosErrores = { ...error };
    if (value === '') {
      nuevosErrores[`label_${index}`] = true;
    } else {
      nuevosErrores[`label_${index}`] = false;
    }
  
    setStateTemp({
      ...stateTemp,
      camposRequeridos: nuevosCamposRequeridos
    });
    setError(nuevosErrores);
  };
  
  export const onChangeCampoRequeTipo = (index, value, {setError, error}, stateTemp, setStateTemp) => {
    const nuevosCamposRequeridos = [...stateTemp.camposRequeridos];
    nuevosCamposRequeridos[index] = {
      ...nuevosCamposRequeridos[index],
      tipo: value
    };
  
    const nuevosErrores = { ...error };
    if (value === '') {
      nuevosErrores[`tipo_${index}`] = true;
    } else {
      nuevosErrores[`tipo_${index}`] = false;
    }
  
    setStateTemp({
      ...stateTemp,
      camposRequeridos: nuevosCamposRequeridos
    });
    setError(nuevosErrores);
  };

  export const validarFormularioSF = (formulario, setError) => {
    const { nombreFormulario, descripcionFormulario, camposRequeridos } = formulario;
    let nuevosErrores = {};
  
    if (nombreFormulario === '') {
      nuevosErrores.nombreFormulario = true;
    } else {
      nuevosErrores.nombreFormulario = false;
    }
  
    if (descripcionFormulario === '') {
      nuevosErrores.descripcionFormulario = true;
    } else {
      nuevosErrores.descripcionFormulario = false;
    }
  
    const nuevosCamposErrores = camposRequeridos.map((campo, index) => {
      const campoErrores = {};
  
      if (campo.label === '') {
        campoErrores[`label_${index}`] = true;
      } else {
        campoErrores[`label_${index}`] = false;
      }
  
      if (campo.tipo === '') {
        campoErrores[`tipo_${index}`] = true;
      } else {
        campoErrores[`tipo_${index}`] = false;
      }
  
      return campoErrores;
    });
  
    nuevosErrores = nuevosCamposErrores.reduce((prev, current) => ({ ...prev, ...current }), nuevosErrores);
    setError(nuevosErrores);
  
    // Verificar si hay algún error (true)
    const hayErrores = Object.values(nuevosErrores).some((error) => error);
    return !hayErrores;
  };

  export const validarFormularioSS = (formulario, error, setError) => {
    const { nombreFormulario, correoElectronico, descripcionProblema } = formulario;
  
    setError({
      nombreFormulario: nombreFormulario === '',
      correoElectronico: correoElectronico === '' || !isEmail(correoElectronico),
      descripcionProblema: descripcionProblema === ''
    });
  
    // Verificar si hay algún error (true)
    const hayErrores = Object.values(error).some((error) => error);
    return !hayErrores;
  };
  

export const onchangeInputEmail = (event, {setError}, state, setState) => {
  const { name, value } = event.target;
   
  setError({
    [name]: value === '' || !isEmail(value),
  });
  setState({
    ...state,
    [name]: value
});
};

  