import { 
  allpiezas_repuestos, 
  onepiezas_repuestos, 
  Postpiezas_repuestos, 
  PUTpiezas_repuestos, 
  delitepiezas_repuestos, 
  Allordenes_servicio, 
  oneordenes_servicio, 
  POSTordenes_servicio, 
  PUTordenes_servicio, 
  DELETEordenes_servicio, 
  allUsuario, 
  oneUsuario, 
  POSTUsuario, 
  PUTUsuario, 
  DELETEUsuario, 
  allcompras, 
  oneecompras, 
  postcompras, 
  PUTcompras, 
  DELETEcompras, 
  Alldetalle_compra, 
  onedetalle_compra, 
  postdetalle_compra, 
  PUTdetalle_compra, 
  deletedetalle_compra, 
  ALLinventario, 
  ONEinventario, 
  POSTinventario, 
  PUTinventario, 
  deleteinventario 
} from '../controllers/Piezas_Repuestos.js';
import { Router } from "express";
import multer from "multer";
import { verifyToken } from '../middlewares/auth.middleware.js'; // Importa el middleware

const router = Router(); 

// Configuración de Multer
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// Rutas protegidas
router.get('/piezas-repuestos', verifyToken, allpiezas_repuestos);
router.get('/piezas-repuestos/:id', verifyToken, onepiezas_repuestos);
router.post('/piezas-repuestos', verifyToken, upload.single('image'), Postpiezas_repuestos);
router.put('/piezas-repuestos/:id', verifyToken, PUTpiezas_repuestos);
router.delete('/piezas-repuestos/:id', verifyToken, delitepiezas_repuestos);

router.get('/ordenes-servicio', verifyToken, Allordenes_servicio);
router.get('/ordenes-servicio/:id', verifyToken, oneordenes_servicio);
router.post('/ordenes-servicio', verifyToken, POSTordenes_servicio);
router.put('/ordenes-servicio/:id', verifyToken, PUTordenes_servicio);
router.delete('/ordenes-servicio/:id', verifyToken, DELETEordenes_servicio);

router.get('/usuarios', verifyToken, allUsuario);
router.get('/usuarios/:id', verifyToken, oneUsuario);
router.post('/usuarios', POSTUsuario); // Suponiendo que el registro no requiere autenticación
router.put('/usuarios/:id', verifyToken, PUTUsuario);
router.delete('/usuarios/:id', verifyToken, DELETEUsuario);

router.get('/compras', verifyToken, allcompras);
router.get('/compras/:id', verifyToken, oneecompras);
router.post('/compras', verifyToken, postcompras);
router.put('/compras/:id', verifyToken, PUTcompras);
router.delete('/compras/:id', verifyToken, DELETEcompras);

router.get('/detalle-compra', verifyToken, Alldetalle_compra);
router.get('/detalle-compra/:id', verifyToken, onedetalle_compra);
router.post('/detalle-compra', verifyToken, postdetalle_compra);
router.put('/detalle-compra/:id', verifyToken, PUTdetalle_compra);
router.delete('/detalle-compra/:id', verifyToken, deletedetalle_compra);

router.get('/inventario', verifyToken, ALLinventario);
router.get('/inventario/:id', verifyToken, ONEinventario);
router.post('/inventario', verifyToken, POSTinventario);
router.put('/inventario/:id', verifyToken, PUTinventario);
router.delete('/inventario/:id', verifyToken, deleteinventario);

export default router;
