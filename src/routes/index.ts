import { Router } from 'express';
import * as HomeControllers from '../controllers/homeControllers';
import * as EmployeesControllers from '../controllers/employeesControllers';
import * as ProductsControllers from '../controllers/productsControllers';

const router = Router();

router.get('/', HomeControllers.home);

router.get('/employees/view', EmployeesControllers.empView);
router.get('/employees/add', EmployeesControllers.empAdd);
router.get('/employees/search', EmployeesControllers.empSearch);
router.get('/employees/modify', EmployeesControllers.empModify);
router.get('/employees/remove', EmployeesControllers.empRemove);

router.post('/employees/add/save', EmployeesControllers.empAddSave);
router.post('/employees/search/save', EmployeesControllers.empSearchSave);

router.get('/products/view', ProductsControllers.productView);
router.get('/products/add', ProductsControllers.productAdd);
router.get('/products/search', ProductsControllers.productSearch);
router.get('/products/modify', ProductsControllers.productModify);
router.get('/products/remove', ProductsControllers.productRemove);

router.post('/products/add/save', ProductsControllers.productAddSave);
router.post('/products/search/save', ProductsControllers.productSearchSave);

router.get('/employees/view/next', EmployeesControllers.next);
router.get('/employees/view/previous', EmployeesControllers.previous);

router.get('/products/view/next', ProductsControllers.next);
router.get('/products/view/previous', ProductsControllers.previous);

export default router;