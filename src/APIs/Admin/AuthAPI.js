import BaseAPI from '../BaseAPI/baseAPI';

export const loginAdminAPI = async (adminData) => {
    const res = await BaseAPI.post('admin/login', adminData);
    return res.data;
}
 
