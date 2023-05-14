import {get} from './api';
import {services} from '@services';

const categories = 'categories';
const category = 'category';

const getCategoryList = () => {
  return get(`${services.products}/${categories}`);
};

const getProductByCategory = (categoryName: string) => {
  return get(`${services.products}/${category}/${categoryName}`);
};

export {getCategoryList, getProductByCategory};
