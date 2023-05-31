import { InfoFormService } from "../services/infoFormService";
import { ADD_INFO_CONTACTO, ADD_INFO_DOCUMENTOS, ADD_INFO_FAMILIAR, ADD_INFO_FINANCIERA, ADD_INFO_PERSONAL } from "../type";

export const addInfoStepPersonal = async ({ stateTemp, dispatchInfoSteps }) => {
  try {
    dispatchInfoSteps({
      type: ADD_INFO_PERSONAL,
      payload: stateTemp
    });
    const response = await InfoFormService.postInfoP(stateTemp);
    console.log("que pasa por la responsew", response);
    if(response?.code === 200){
      return response;
    } else {
      return response;
    }
  } catch (error) {
    console.error('Error en dispatchInfoSteps:', error);
    return false;
  }
};

export const addInfoStepContacto = async ({ stateTemp1, dispatchInfoSteps }) => {  
  try {
    dispatchInfoSteps({
      type: ADD_INFO_CONTACTO,
      payload: stateTemp1
    });
    const response = await InfoFormService.postInfoUC(stateTemp1);
    if(response?.code === 200){
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.error('Error en dispatchInfoSteps:', error);
    return false;
  }
};

export const addInfoStepFinanciera = async ({ stateTemp2, dispatchInfoSteps }) => {
  console.log("debe llamar y llegarle ", stateTemp2);
  try {
    dispatchInfoSteps({
      type: ADD_INFO_FINANCIERA,
      payload: stateTemp2
    });
    const response = await InfoFormService.postInfo_ilf(stateTemp2);
    console.log("response financiera", response);
    if(response?.code === 200){
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.error('Error en dispatchInfoSteps:', error);
    return false;
  }
};

export const addInfoStepFamiliar = async ({ stateTemp3, dispatchInfoSteps }) => {
  try {
    dispatchInfoSteps({
      type: ADD_INFO_FAMILIAR,
      payload: stateTemp3
    });
    const response = await InfoFormService.postInfo_dgfb(stateTemp3);
    if(response?.code === 200){
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.error('Error en dispatchInfoSteps:', error);
    return false;
  }
};

export const addInfoStepDocumentos = async ({ stateTemp4, dispatchInfoSteps }) => {
  
  try {
    // dispatchInfoSteps({
    //   type: ADD_INFO_DOCUMENTOS,
    //   payload: stateTemp4
    // });
    const response = await InfoFormService.postInfo_images(stateTemp4?.id_usuario );
    console.log("response documentos", response);
    // if(response?.code === 200){
    //   return true;
    // } else {
    //   return false;
    // }
  } catch (error) {
    console.error('Error en dispatchInfoSteps:', error);
    return false;
  }
};