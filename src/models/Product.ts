type Product = {
    title: string,
    price: number
}

const data=[
    {title:'Produto X', preco: 200},
    {title:'Produto Y', preco: 400},
    {title:'Produto Z', preco: 350}
]

export const Product = {

    getAll:() =>{

        return data
    }
}