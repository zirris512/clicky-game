import React from "react";

const cardContext = React.createContext({
    score: 0,
    total: 0,
    cards: []
});

export default cardContext;