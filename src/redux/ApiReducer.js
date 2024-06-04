// reducers.js
import { ADD_BENEFICIARY, EDIT_BENEFICIARY, DELETE_BENEFICIARY } from './ActionTypes';

const initialState = {
    beneficiaries: JSON.parse(localStorage.getItem('beneficiaries')) || [],
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_BENEFICIARY:
            const newBeneficiariesAdd = [...state.beneficiaries, action.payload];
            localStorage.setItem('beneficiaries', JSON.stringify(newBeneficiariesAdd));
            return { ...state, beneficiaries: newBeneficiariesAdd };
        case EDIT_BENEFICIARY:
            const updatedBeneficiariesEdit = state.beneficiaries.map((beneficiary) =>

                beneficiary.id === action.payload.id ? action.payload : beneficiary,

            );
            localStorage.setItem('beneficiaries', JSON.stringify(updatedBeneficiariesEdit));
            return { ...state, beneficiaries: updatedBeneficiariesEdit };
        case DELETE_BENEFICIARY:
            const filteredBeneficiariesDelete = state.beneficiaries.filter(
                (beneficiary) => beneficiary.id !== action.payload
            );
            localStorage.setItem('beneficiaries', JSON.stringify(filteredBeneficiariesDelete));
            return { ...state, beneficiaries: filteredBeneficiariesDelete };
        default:
            return state;
    }
};

export default rootReducer;
