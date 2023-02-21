import { Request, Response } from 'express';
import { Employee } from '../models/Employees';
import * as NextAndPrevious from '../helpers/nextAndPrevious';

let offset = 0;

export const empView = async (req: Request, res: Response) => {
    let employees = await Employee.findAll({
        offset: offset,
        limit: 4
    });
    res.render('pages/employeesView', {
        employees
    });
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

export const next = async (req: Request, res: Response) => {
    let allEmployees = await Employee.findAll();

    offset = NextAndPrevious.next(offset, allEmployees.length);

    console.log(offset);

    res.redirect('/employees/view');
}

export const previous = (req: Request, res: Response) => {
    offset = NextAndPrevious.previous(offset);

    console.log(offset);

    res.redirect('/employees/view');
}

