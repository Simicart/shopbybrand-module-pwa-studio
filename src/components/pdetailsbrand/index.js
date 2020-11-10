import React from 'react';
import { resourceUrl } from '@magento/venia-drivers';
import classes from './pdetailsbrand.css';
import { Link } from '@magento/venia-drivers';
import { Util } from '@magento/peregrine';
const { BrowserPersistence } = Util;
const storage = new BrowserPersistence();

const Pdetailsbrand = props => {
    if (!props.product || !props.product.mpbrand || !props.product.mpbrand.url_key)
        return ''

    const brandConfiguration = storage.getItem('simiBrandConfiguration');
    if (!brandConfiguration || !brandConfiguration.show_brand_info)
        return ''

    const {
        show_brand_info, logo_width_on_product_page, logo_height_on_product_page
    } = brandConfiguration;
    const { mpbrand } = props.product
    return (
        <section className={classes.pdetailsBrandSection}>
            <Link to={resourceUrl(`/brand/${mpbrand.url_key}.html`)} className={classes.pdetailsBrandInfo}>
                {(show_brand_info === 'logo') ?
                    <div style={{
                            backgroundImage: `url("${mpbrand.image}")`,
                            width: logo_width_on_product_page ? logo_width_on_product_page : 50,
                            height: logo_height_on_product_page ? logo_width_on_product_page : 50
                        }}
                        className={classes.pdetailsBrandImage}>
                    </div> : ''
                }
                {
                    (show_brand_info === 'name') ?
                        <div className={classes.pdetailsBrandLabel}>{mpbrand.value}</div>
                        : ''
                }
            </Link>
        </section>
    )
}
export default Pdetailsbrand