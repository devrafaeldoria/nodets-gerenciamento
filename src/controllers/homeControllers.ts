import { Request, Response } from 'express';
import { Employee } from '../models/Employees';
import { Product } from '../models/Products';

export const home = async (req: Request, res: Response) => {
    res.render('pages/home');   
}