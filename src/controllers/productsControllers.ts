import { Request, Response } from 'express';

export const productView = (req: Request, res: Response) => {
    res.send('product view');
}

export const productAdd = (req: Request, res: Response) => {
    res.send('product add');
}

export const productSearch = (req: Request, res: Response) => {
    res.send('product search');
}

export const productModify = (req: Request, res: Response) => {
    res.send('product modify');
}

export const productRemove = (req: Request, res: Response) => {
    res.send('product remove');
}

