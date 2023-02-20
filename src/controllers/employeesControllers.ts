import { Request, Response } from 'express';
import { Employee } from '../models/Employees';

export const empView = (req: Request, res: Response) => {
    res.render('pages/employeesView');
}

export const empAdd = (req: Request, res: Response) => {
    res.send('employees add');
}

export const empSearch = (req: Request, res: Response) => {
    res.send('employees search');
}

export const empModify = (req: Request, res: Response) => {
    res.send('employees modify');
}

export const empRemove = (req: Request, res: Response) => {
    res.send('employees remove');
}

