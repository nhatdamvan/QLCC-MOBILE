import jwtAxios from './jwtAxios';

export const updateCustomer = async (customer: any) => {
  console.log('customer', customer);
  return await jwtAxios.put('customer', customer);
};

export const addCustomer = async (customer: any) => {
  return await jwtAxios.post('customer', customer);
};
