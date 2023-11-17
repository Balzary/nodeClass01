import { Request, Response } from "express";

export const home = ((req: Request, res: Response) =>{
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