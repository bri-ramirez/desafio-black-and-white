import { Router } from 'express';
import { uploadFile } from './controllers/file-controllers.js';
import multer from 'multer';
import os from 'os';


const upload = multer({ dest: os.tmpdir() });
const router = Router();


router.post('/upload', upload.single('file'), uploadFile);

export default router