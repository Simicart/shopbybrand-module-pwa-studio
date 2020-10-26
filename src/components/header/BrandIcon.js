import React from 'react';
import Icon from '@magento/venia-ui/lib/components/Icon';
import { Tag as TagIcon } from 'react-feather';
import { resourceUrl, useHistory } from '@magento/venia-drivers';
import classes from './brandicon.css';
import { FormattedMessage, useIntl } from 'react-intl';

const BrandIcon = () => {
    const history = useHistory();
    const { formatMessage } = useIntl();

    return (
        <button
            aria-label={formatMessage({
                id: 'brand.brandLabel',
                defaultMessage: 'Brands'
            })}
            className={classes.root}
            onClick={() => history.push(resourceUrl('/brand.html'))}
        >
            <Icon src={TagIcon} />
            <span className={classes.label}>
                <FormattedMessage id={'Brands'} />
            </span>
        </button>
    )
}
export default BrandIcon