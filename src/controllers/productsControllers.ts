import { Request, Response } from 'express';
import { Product } from '../models/Products';
import * as NextAndPrevious from '../helpers/nextAndPrevious';

let offsetProduc = 0;

export const productView = async (req: Request, res: Response) => {
    let products = await Product.findAll({
        offset: offsetProduc,
        limit: 4
    });

    let show = false;

    if(offsetProduc < 4) {
        show = false;
    } else {
        show = true;
    }

    res.render('pages/products/productsView', {
        products,
        show
    });
}

export const productAdd = (req: Request, res: Response) => {
    res.render('pages/products/productsAdd');
}
export const productAddSave = async (req: Request, res: Response) => {
    let name = req.body.name;
    let supplier = req.body.supplier;
    let stock = req.body.stock;
    let minimumstock = req.body.minimumstock;
    let price = req.body.price;


    await Product.create({
        name,
        supplier,
        stock,
        minimumstock,
        price
    });

    res.redirect('/products/add');
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


export const next = async (req: Request, res: Response) => {
    let allEmployees = await Product.findAll();

    offsetProduc = NextAndPrevious.next(offsetProduc, allEmployees.length);

    res.redirect('/products/view');
}
export const previous = (req: Request, res: Response) => {
    offsetProduc = NextAndPrevious.previous(offsetProduc);

    res.redirect('/products/view');
}

