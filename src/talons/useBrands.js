import { useMemo, useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_BRANDS_LIST } from './Brand.gql'

export const useBrands = props => {
    //get Brand List useQuery
    const {
        data: brandsData,
        loading: brandsLoading,
        error: brandsError
    } = useQuery(GET_BRANDS_LIST, {
        variables: {
            pageSize: 99999,
            currentPage: 1
        }
    });

    const [startWith, setStartWith] = useState('');
    const [brandSearchString, setBrandSearchString] = useState('');

    let derivedErrorMessage;
    if (brandsError) {
        const errorTarget = brandsError;
        if (errorTarget.graphQLErrors) {
            // Apollo prepends "GraphQL Error:" onto the message,
            // which we don't want to show to an end user.
            // Build up the error message manually without the prepended text.
            derivedErrorMessage = errorTarget.graphQLErrors
                .map(({ message }) => message)
                .join(', ');
        } else {
            // A non-GraphQL error occurred.
            derivedErrorMessage = errorTarget.message;
        }
    }

    //filter brands by dictionary
    const brandsList = useMemo(() => {
        if (brandsData && brandsData.mpbrand && brandsData.mpbrand.items) {
            const brandItems = brandsData.mpbrand.items
            const filteredItems = []
            brandItems.map(
                brandItem => {
                    if (startWith) {
                        if (brandItem.default_value.toLowerCase()[0] !== startWith)
                            return
                    }
                    filteredItems.push(brandItem)
                }
            )
            return filteredItems
        }
        return []
    }, [brandsData, startWith]);

    //use this var for available dictionary options
    const availableChars = useMemo(() => {
        let availableChars = ''
        if (brandsData && brandsData.mpbrand && brandsData.mpbrand.items) {
            brandsData.mpbrand.items.map(brandItem => {
                availableChars += brandItem.default_value.toLowerCase()[0]
            })
        }
        return availableChars
    }, [brandsData])

    //filter brands by search
    const brandSearchResult = useMemo(() => {
        if (brandsData && brandsData.mpbrand && brandsData.mpbrand.items) {
            console.log(brandSearchString)
            const brandItems = brandsData.mpbrand.items
            const searchedItems = []
            brandItems.map(
                brandItem => {
                    if (brandSearchString) {
                        if (brandItem.default_value.toLowerCase().indexOf(brandSearchString.toLowerCase()) !== -1)
                            searchedItems.push(brandItem)
                    }
                }
            )
            return searchedItems
        }
        return []
    }, [brandsData, brandSearchString]);

    return {
        brandsList,
        brandsLoading,
        derivedErrorMessage,
        startWith,
        setStartWith,
        availableChars,
        brandSearchString,
        setBrandSearchString,
        brandSearchResult
    }
}
