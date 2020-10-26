import React from "react";
import { useParams } from "react-router-dom";
import { useBrandDetails } from '../../talons/useBrandDetails';
import defaultClasses from './branddetails.css';
import { fullPageLoadingIndicator } from '@magento/venia-ui/lib/components/LoadingIndicator';

const BrandDetails = () => {
    const classes = defaultClasses
    const { brandUrl = "" } = useParams();
    const { brandData, brandLoading, derivedErrorMessage } = useBrandDetails({ url_key: brandUrl.replace('.html', '') });
    console.log(brandData)
    if (brandLoading)
        return fullPageLoadingIndicator;
    if (derivedErrorMessage)
        return <div className={classes.brandError}>{derivedErrorMessage}</div>;
    return (
        <div className={classes.rootDetails}>
            {brandUrl}
        </div>
    );
}

export default BrandDetails;