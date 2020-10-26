import React, { useMemo } from "react";
import { FormattedMessage } from 'react-intl';
import { fullPageLoadingIndicator } from '@magento/venia-ui/lib/components/LoadingIndicator';
import { useBrands } from '../../talons/useBrands';
import { Link } from '@magento/venia-drivers';
import defaultClasses from './brands.css'
import Icon from '@magento/venia-ui/lib/components/Icon';
import { Search as SearchIcon } from 'react-feather';

const Brands = props => {
    const { categoryId, categoryName } = props
    const {
        brandsList,
        brandsLoading,
        derivedErrorMessage,
        startWith,
        setStartWith,
        availableChars,
        brandSearchString,
        setBrandSearchString,
        brandSearchResult
    } = useBrands({ categoryId });

    const classes = defaultClasses;

    if (brandsLoading)
        return fullPageLoadingIndicator;

    if (derivedErrorMessage)
        return <div className={classes.brandError}>{derivedErrorMessage}</div>;

    let brandListItems
    if (brandsList && brandsList.length) {
        brandListItems = brandsList.map(
            item => {
                const urlKey = '/brand/' + (item.url_key ? item.url_key : item.default_value.toLowerCase()) + '.html';
                return (
                    <div key={item.brand_id} className={classes.brandItem}>
                        <Link to={urlKey} >
                            <div className={classes.brandItemImageWrapper} style={{ backgroundImage: `url("${item.image}")` }} ></div>
                        </Link>
                        <div className={classes.brandItemInfo}>
                            <Link className={classes.brandItemLink} to={urlKey}>
                                {item.default_value}
                            </Link>
                        </div>
                    </div>
                )
            }
        )
    } else {
        brandListItems = (
            <div className={classes.brandError}>
                <FormattedMessage
                    id={'brand.NoBrandFound'}
                    defaultMessage={'No Brand Found'}
                />
            </div>
        )
    }

    const dictionaryOptions = "abcdefghijklmnopqrstuvwxyz".split('').map(
        dictionaryOption => (
            <div
                key={dictionaryOption}
                onClick={
                    () => {
                        if (availableChars.indexOf(dictionaryOption) !== -1) {
                            setStartWith(dictionaryOption)
                        }
                    }
                }
                className={`${classes.dictOption} ${(dictionaryOption === startWith) && classes.selected} ${(availableChars.indexOf(dictionaryOption) === -1) && classes.disabled}`}
            >
                {dictionaryOption.toUpperCase()}
            </div>
        )
    )

    return (
        <div className={classes.brandPageRoot}>
            <div className={classes.breadCrumb}>
                <Link className={classes.breadCrumbLink} to="/">{`Home`}</Link>
                <span className={classes.breadCrumbSeparator}>{`/`}</span>
                {categoryName ? (
                    <React.Fragment>
                        <Link className={classes.breadCrumbLink} to="/brand.html">{`Brands`}</Link>
                        <span className={classes.breadCrumbSeparator}>{`/`}</span>
                        <span className={classes.breadCrumbText}>{categoryName}</span>
                    </React.Fragment>
                ) : <span className={classes.breadCrumbText}>{`Brands`}</span>}
            </div>
            <div className={classes.brandPageHeader}>
                <div className={classes.brandPageTitle}>
                    <strong>
                        <FormattedMessage
                            id={'brand.Brands'}
                            defaultMessage={'Brands'}
                        />
                    </strong>
                </div>
                <div className={classes.brandPageSearchBox}>
                    <input type="text" value={brandSearchString}
                        className={classes.brandPageSearchInput}
                        onChange={e => setBrandSearchString(e.target.value)}
                        placeholder={`Search a brand name`}
                    />
                    <div className={classes.brandPageIcon}>
                        <Icon src={SearchIcon} />
                    </div>
                    {
                        brandSearchResult.length ?
                            <div className={classes.searchResult}>
                                {brandSearchResult.map(
                                    searchItem => (
                                        <Link key={searchItem.brand_id}
                                            className={classes.searchItem}
                                            to={`/brand/${searchItem.url_key}.html`}>
                                            <div className={classes.searchItemPhotoWrapper}>
                                                <img className={classes.searchItemPhoto} src={searchItem.image} alt={searchItem.default_value} />
                                            </div>
                                            <div className={classes.searchItemInfo}>
                                                <div className={classes.searchItemName} >{searchItem.default_value}</div>
                                                <div className={classes.searchItemDesc}>{searchItem.short_description}</div>
                                            </div>
                                        </Link>
                                    )
                                )}
                            </div> : ''
                    }
                </div>
            </div>
            <div className={classes.dictList}>
                <div
                    key="all"
                    onClick={() => setStartWith('')}
                    className={`${classes.dictOption} ${!startWith && classes.selected}`}
                >{`All`}</div>
                {dictionaryOptions}
            </div>
            <div className={classes.brandListContent}>
                {brandListItems}
            </div>
        </div >
    )
}

export default Brands;