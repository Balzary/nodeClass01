import { Request, Response } from "express";

export const nome = ((req: Request, res: Response) =>{
    let nome: string = req.query.nome as string
    res.render('pages/nome', {
        nome
    })
})

export const cadastro = ((req: Request, res: Response) =>{
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

export const idade = ((req: Request, res: Response) =>{
    res.render('pages/idade')
})

export const idadeResultado = ((req: Request, res: Response) =>{
    let idade: number = (new Date()).getFullYear() - parseInt(req.body.idade as string)
    res.render('pages/idade', {idade})
})

export const login = ((req: Request, res:Response) =>{
    res.render("pages/login")
})

export const loginResultado = ((req: Request, res:Response) =>{
    let loginSuccess: boolean = true
    let loginMessage: string = 'Logado com sucesso' 
    res.render("pages/login", {loginMessage, loginSuccess})
})

