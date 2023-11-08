import {Router, Request, Response} from 'express'

const router = Router()

//criando a primeira rota 
router.get("/", (req,res) => {
    res.send("Olá mundo!")
})

router.get("/contato", (req:Request, res:Response) =>{
    res.send("Esta é a página de contato")
})
//rota estática 
router.get("/noticia/titulo-da-noticia", (req:Request, res:Response) =>{
    res.send("Notícia aparecendo na tela")
})

//rota dinamica 
router.get("/noticia/:slug", (req:Request, res:Response) =>{
    let slug: string = req.params.slug
    res.send(`Notícia ${slug}`)
})


export default router
