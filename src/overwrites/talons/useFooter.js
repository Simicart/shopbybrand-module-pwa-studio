import { useQuery } from '@apollo/client';
import { Util } from '@magento/peregrine';
const { BrowserPersistence } = Util;
const storage = new BrowserPersistence();

/**
 *
 * @param {*} props.query the footer data query
 */
export const useFooter = props => {
    const { query } = props;
    const { data } = useQuery(query);
    if (data && data.brandConfig) {
        storage.setItem('simiBrandConfiguration', data.brandConfig);
    }
    return {
        copyrightText: data && data.storeConfig && data.storeConfig.copyright
    };
};
