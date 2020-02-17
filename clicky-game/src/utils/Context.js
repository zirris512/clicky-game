import React, { createContext, useReducer, useContext } from "react";

const ScoreContext = createContext();
const { Provider } = ScoreContext;

const reducer = (state, action) => {
    switch (action.type) {
        case "notClicked":
            if (state.score === state.total) {
                return {score: state.score + 1, total: state.total + 1};
            } else {
                return {score: state.score + 1}
            }
        case "clicked":
            return {score: state.score = 0}
        default:
            throw new Error(`Invalid action type: ${action.type}`);
    }
};

const ScoreProvider = ({ value = 0, ...props }) => {
    const [state, dispatch] = useReducer(reducer, { score: value, total: value });

    return <Provider value={[state, dispatch]} {...props} />;
};

const useScoreContext = () => {
    return useContext(ScoreContext);
};

export { ScoreProvider, useScoreContext }