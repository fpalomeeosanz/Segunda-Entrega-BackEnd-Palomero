class TicketManager {

    #priceUp = 1.15;

    constructor(){
        this.products = [];  
    }

    addProduct = (nombre, imgUrl, precio) => {

        let qProducts = this.products.length;

        if(!nombre || !imgUrl || !precio) {
        return 'Todos los campos son necesarios'
        }

        const productImgUrl = this.products.find(product => product.imgUrl == imgUrl);
        
        if (productImgUrl){
            return 'ya seleccionaste ${imgUrl}'
        }

        const product = {
            nombre,
            imgUrl,
            precio: precio * this.#priceUp,
            fecha: Date(),
            participantes: [],
            id: ++ qProducts,
        }   

        this.products.push(product);
    }

    getProducts = () => {
        return this.products;
    }

    getProduct = (idProduct) => {
        const product = this.products.find( product => product.id == idProduct );
        if(product){
            return product;
        }else{
            return 'not found'
        }
    }

    addUser = (idProduct) => {
        
        const product = this.getProduct(idProduct);

        if(product === 'not found'){
            return 'El evento no existe'
        }

        const registro = product.users.find(idPeople => idPeople == idUser);
       
        if(registro){
            return '${idUser} ya compraste este producto';
        }
        product.users.push(idUser);
        return product;
    }
}

const ticketManager = new TicketManager(1);

ticketManager.addProduct('Cap', 'html://www.esunejemplo.com/cap', 180)

product = ticketManager.addProduct('Cap', 'html://www.esotrojemplo.com/cap', 200)

const oneProduct = ticketManager.getProduct(11)
