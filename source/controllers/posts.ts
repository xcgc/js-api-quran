import { Request, Response, NextFunction } from 'express';
import axios, { AxiosResponse } from 'axios';

interface quran {
    id : number;
    doa : string;
    ayat : string;
    latin: string;
    artinya: string;

}

// Operasi GET untuk mengambil semua surah alquran
const getQuran = async (req: Request, res: Response, next: NextFunction) => {
    let result: AxiosResponse = await axios.get(`https://doa-doa-api-ahmadramadhan.fly.dev/api`);
    let posts: [quran] = result.data;
    return res.send(JSON.stringify({
        posts
    }));
};

export default { getQuran };