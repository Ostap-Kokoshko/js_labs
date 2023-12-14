import {loadFromLocalStorage, saveToLocalStorage} from "./LocalStorage";

const defaultState = {
    stadiumList: [],
};

const findIndexByName = (arr, name) => {
    return arr.findIndex((item) => item.name === name);
};

export const reducer = (state = loadFromLocalStorage('cart') || defaultState, action) => {
    switch (action.type) {
        case "ADD_STADIUM":
            const foundIndex = findIndexByName(state.stadiumList, action.payLoad.name);
            if (foundIndex === -1) {
                const newState = { ...state, stadiumList: [...state.stadiumList, action.payLoad] };
                saveToLocalStorage('cart', newState); // Збереження у localStorage
                return newState;
            } else {
                const updatedStadiumArr = [...state.stadiumList];
                updatedStadiumArr[foundIndex] = {
                    ...updatedStadiumArr[foundIndex],
                    count: updatedStadiumArr[foundIndex].count + action.payLoad.count,
                };
                const newState = { ...state, stadiumList: updatedStadiumArr };
                saveToLocalStorage('cart', newState);
                return newState;
            }
        case "INCREMENT_COUNT":
            return {
                ...state,
                stadiumList: state.stadiumList.map((stadium) => {
                    if (stadium.name === action.payLoad.name) {
                        return { ...stadium, count: stadium.count + 1 };
                    }
                    return stadium;
                }),
            };
        case "DECREMENT_COUNT":
            return {
                ...state,
                stadiumList: state.stadiumList.map((stadium) => {
                    if (stadium.name === action.payLoad.name && stadium.count > 0) {
                        return { ...stadium, count: stadium.count - 1 };
                    }
                    return stadium;
                }),
            };
        case "CLEAR_CART":
            return { ...state, stadiumList: [] };
        default:
            return state;
    }
};