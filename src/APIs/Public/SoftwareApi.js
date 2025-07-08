import baseAPI from "../BaseAPI/baseAPI";

export const getAllSoftwares = async()=>{
    const res = await baseAPI.get('public/software', );
    return res.data;
}

export const getSoftwareByName = async(name)=>{
    const res = await baseAPI.get(`/public/software/name/${name}`)
    return res.data
}