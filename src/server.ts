//importando biblioteca EXPRESS
import express, {Request, Response} from "express"
import { Server } from "http"
//importando nosso arquivo index.ts
import mainRoutes from './routes/index'

//usando EXPRESS
const server = express()

server.use(mainRoutes)

//gerando o servidor na porta 3000
server.listen(3000)