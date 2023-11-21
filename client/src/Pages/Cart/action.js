export const action = { type: "", payLoad: {} };

export const incrementCount = (stadium) => {
    return {
        type: "INCREMENT_COUNT",
        payLoad: { name: stadium },
    };
};

export const decrementCount = (stadium) => {
    return {
        type: "DECREMENT_COUNT",
        payLoad: { name: stadium },
    };
};