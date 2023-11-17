import {Router, Request, Response} from 'express'
import * as HomeController from '../controllers/homeController'
import * as InfoController from '../controllers/infoController'
import * as UserController from '../controllers/userController'
import * as NewsController from '../controllers/newsControllers'
const router = Router()

//criando a primeira rota 
router.get("/", HomeController.home)
router.get("/contato", InfoController.contato)
router.get("/sobre", InfoController.sobre)
router.get("/nome", UserController.nome)
router.get("/cadastro", UserController.cadastro)
//rota estática 
router.get("/noticia/titulo-da-noticia", NewsController.noticia)
//rota dinamica 
router.get("/noticia/:slug", NewsController.noticia)
router.get("/idade", UserController.idade)
router.post("/idade", UserController.idadeResultado)
router.get('/login', UserController.login)
router.post('/login',UserController.loginResultado)

export default router
