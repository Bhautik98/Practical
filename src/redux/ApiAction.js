import { ADD_BENEFICIARY, DELETE_BENEFICIARY, EDIT_BENEFICIARY } from './ActionTypes.js';

export const addBeneficiary = (beneficiary) => (

    {
        type: ADD_BENEFICIARY,
        payload: beneficiary,

    });

export const editBeneficiary = (beneficiary) => ({
    type: EDIT_BENEFICIARY,
    payload: beneficiary,
});

export const deleteBeneficiary = (id) => ({
    type: DELETE_BENEFICIARY,
    payload: id,
});