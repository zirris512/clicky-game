import React, { createContext, useReducer, useContext } from "react";
import images from "../assets/images";

const ScoreContext = createContext();
const { Provider } = ScoreContext;

const initialState = {
   images,
   clicked: [],
   score: 0,
   total: 0
};

const reducer = (state, action) => {
    switch (action.type) {
        case "notClicked":
            if (state.score === state.total) {
                return {...state, score: state.score + 1, total: state.total + 1, clicked: [...state.clicked, action.value], images: action.shuffle};
            }
            return {...state, score: state.score + 1, clicked: [...state.clicked, action.value], images: action.shuffle}
        case "clicked":
            return {...state, score: initialState.score, clicked: initialState.clicked, images: action.shuffle}
        default:
            throw new Error(`Invalid action type: ${action.type}`);
    }
};

const ScoreProvider = ({ ...props }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return <Provider value={[state, dispatch]} {...props} />;
};

const useScoreContext = () => {
    return useContext(ScoreContext);
};

export { ScoreProvider, useScoreContext }