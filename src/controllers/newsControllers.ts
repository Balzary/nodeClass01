import { Request, Response } from "express";

export const noticia = ((req: Request, res: Response) =>{
    res.send("Notícia aparecendo na tela")
})

export const noticiaDinamica = ((req: Request, res: Response) =>{
    let slug: string = req.params.slug
    res.send(`Notícia ${slug}`)
})