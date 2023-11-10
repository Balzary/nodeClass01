import {Router, Request, Response} from 'express'

const router = Router()

//criando a primeira rota 
router.get("/", (req:Request,res:Response) => {

    let user = {
        name: 'Guilherme',
        age: 29,
        showAge: false
    }

    if (user.age >= 18) {
        user.showAge = true
    } 

    //let user: string = 'Guilherme' 
    res.render('home', {
        user,
        produtos: [
            {titulo: 'Produto X', preco: 200},
            {titulo: 'Produto Y', preco: 500},
            {titulo: 'Produto Z', preco: 450}
        ]            
    })
})

router.get("/contato", (req:Request, res:Response) =>{
    res.render('contato')
})

router.get("/sobre", (req:Request, res:Response) =>{
    res.render('sobre')
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
