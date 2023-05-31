import { ADD_USER } from "../type";





export const addCreateUser = async ({ stateTemp, dispatchInfoSteps }) => {
    try {
      dispatchInfoSteps({
        type: ADD_USER,
        payload: stateTemp
      });
      const response = await InfoFormService.postInfoP(stateTemp);
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
  
  