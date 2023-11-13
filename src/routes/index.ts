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
    res.render('pages/home', {
        user,
        produtos: [
            {titulo: 'Produto X', preco: 200},
            {titulo: 'Produto Y', preco: 500},
            {titulo: 'Produto Z', preco: 450}
        ],
        frases: [
            'frases do dia 1',
            'frases do dia 2',
            'frases do dia 3'
        ]         
    })
})

router.get("/contato", (req:Request, res:Response) =>{
    res.render('pages/contato')
})

router.get("/sobre", (req:Request, res:Response) =>{
    res.render('pages/sobre')
})

router.get("/nome", (req:Request, res:Response) =>{
    let nome: string = req.query.nome as string
    res.render('pages/nome', {
        nome
    })
})
router.get("/cadastro", (req:Request, res:Response) =>{
    let nome: string = req.query.nome as string
    let idade: number = parseInt(req.query.idade as string)
    let telefone: string = req.query.telefone as string
    let endereco: string = req.query.endereco as string

    res.render('pages/cadastro', {
        nome,
        idade,
        telefone,
        endereco
    })
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

router.get("/idade", (req:Request, res:Response) =>{
    res.render('pages/idade')
})

// router.post("/idade", (req:Request, res:Response) =>{
//     let idade: number = (new Date()).getFullYear() - parseInt(req.body.idade as string)
//     res.render('pages/idade', {
//         idade
//     })
// })

router.post('/idade',(req:Request,res:Response)=>{

    let idade: number = new Date().getFullYear() - parseInt(req.body.idade as string)    
    console.log(idade)
    res.render("pages/idade", {idade})
})


export default router
