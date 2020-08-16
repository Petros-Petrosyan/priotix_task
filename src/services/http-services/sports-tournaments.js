import { baseRequest } from './index';

export const getSportsTournaments = async (params) => {
    const res = await baseRequest.get('', {params});
    return res;
}