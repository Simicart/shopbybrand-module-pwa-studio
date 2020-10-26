import React from 'react';
import { resourceUrl } from '@magento/venia-drivers';
import classes from './pdetailsbrand.css';
import { Link } from '@magento/venia-drivers';

const Pdetailsbrand = props => {
    if (!props.product || !props.product.mpbrand || !props.product.mpbrand.url_key)
        return ''
    const { mpbrand } = props.product
    return (
        <section className={classes.pdetailsBrandSection}>
            <Link to={resourceUrl(`/brand/${mpbrand.url_key}.html`)} className={classes.pdetailsBrandInfo}>
                <div style={{backgroundImage: `url("${mpbrand.image}")`}} className={classes.pdetailsBrandImage}>
                </div>
                <div className={classes.pdetailsBrandLabel}>{mpbrand.value}</div>
            </Link>
        </section>
    )
}
export default Pdetailsbrand