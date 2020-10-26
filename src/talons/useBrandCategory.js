import { GET_BRANDS_CATEGORY } from './Brand.gql';
import { useQuery } from '@apollo/client';

export const useBrandCategory = props => {
    const {
        data: categoryData,
        loading: categoryLoading,
        error: categoryError
    } = useQuery(GET_BRANDS_CATEGORY);

    return {
        categoryData,
        categoryLoading,
        categoryError
    }
}