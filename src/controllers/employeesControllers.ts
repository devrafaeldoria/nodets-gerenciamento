import { Request, Response } from 'express';
import { Employee } from '../models/Employees';
import * as NextAndPrevious from '../helpers/nextAndPrevious';
import { getAge } from '../helpers/getAge';

let offset = 0;
 
export const empView = async (req: Request, res: Response) => {
    let employees = await Employee.findAll({
        offset: offset,
        limit: 4
    });

    let show = false;

    if(offset < 4) {
        show = false;
    } else {
        show = true;
    }

    res.render('pages/employees/employeesView', {
        employees,
        show
    });
}

export const empAdd = (req: Request, res: Response) => {
    res.render('pages/employees/employeesAdd');
}
export const empAddSave = async (req: Request, res: Response) => {
    let date = req.body.date;
    let name = req.body.name;
    let city = req.body.city;
    let sector = req.body.sector;
    let salary = req.body.salary;

    let employeeAge = getAge(date);

    await Employee.create({
        name,
        age: employeeAge,
        sector,
        salary,
        city
    });

    res.redirect('/employees/add');
}

export const empSearch = (req: Request, res: Response) => {
   res.render('pages/employees/employessSearch');
}
export const empSearchSave = async (req: Request, res: Response) => {
    let searchEmployees;
    switch(req.body.choice) {
        case 'Name': 
            searchEmployees = await Employee.findAll({
                where: {
                    name: req.body.value
                },
                limit: 4
            });
            break;
        case 'Age':
            searchEmployees = await Employee.findAll({
                where: {
                    age: req.body.value
                },
                limit: 4
            });
            break;
        case 'City':
            searchEmployees = await Employee.findAll({
                where: {
                    city: req.body.value
                },
                limit: 4
            });
            break;
        case 'Sector': 
            searchEmployees = await Employee.findAll({
                where: {
                    sector: req.body.value
                },
                limit: 4
            });
            break;
        case 'Salary':
            searchEmployees = await Employee.findAll({
                where: {
                    salary: req.body.value
                },
                limit: 4
            });
            break;
    }

    res.render('pages/employees/employeesSearchView', {
        searchEmployees
    });
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

    res.redirect('/employees/view');
}
export const previous = (req: Request, res: Response) => {
    offset = NextAndPrevious.previous(offset);

    res.redirect('/employees/view');
}

