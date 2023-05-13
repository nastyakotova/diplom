import axios from 'axios';
import { SET_DISCIPLINES } from './actionsTypes';

export const setDisciplines = (payload) => ({ type: SET_DISCIPLINES, payload });

export function loadDisciplines(professorId) {
  return (dispatch) => {
    try {
      axios
        .post('http://localhost:4000/api/professor/disciplines', { professorId })
        .then((response) => {
          if (response.status === 200) {
            dispatch(setDisciplines(response.data));
          }
        })
        .catch((error) => console.log(error));
    } catch (error) {
      console.log(error);
    }
  };
}