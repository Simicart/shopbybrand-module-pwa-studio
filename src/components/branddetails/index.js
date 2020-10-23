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

// import React from "react";
// import { useParams } from "react-router-dom";
// import { useBrandDetails } from '../../talons/useBrandDetails';
// import defaultClasses from './branddetails.css'

// const BrandDetails = () => {
//     const classes = defaultClasses
//     const { urlKey = "brandUrl" } = useParams();
//     const { brandData, brandLoading, derivedErrorMessage } = useBrandDetails({ url_key: urlKey });

//     if (brandLoading)
//         return fullPageLoadingIndicator;

//     if (derivedErrorMessage)
//         return <div className={classes.brandError}>{derivedErrorMessage}</div>;

//         console.log(brandData)

//     return (
//         <div>
//         </div>
//     );
// }

// export default BrandDetails;