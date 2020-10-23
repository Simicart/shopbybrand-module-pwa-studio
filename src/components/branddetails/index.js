import React from "react";
import { useParams } from "react-router-dom";

const hi = {
    textAlign: "center",
    margin: "1rem"
};
const wave = {
    ...hi,
    fontSize: "5rem"
};

const BrandDetails = () => {
    const { who = "brandUrl" } = useParams();
    return (
        <div>
            <h1 style={hi}>Hello, {who}!</h1>
            <h1 style={wave}>{"\uD83D\uDC4B"}</h1>
        </div>
    );
}

export default BrandDetails;