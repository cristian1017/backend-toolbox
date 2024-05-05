import { Router } from 'express'
import FilesController from '../controller/files.controller.js'

const router = Router()
const filesController = new FilesController()

router.get('/data', filesController.getFilesFormat)
router.get('/list', filesController.getListFiles)

export default router
