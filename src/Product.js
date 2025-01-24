const CategoryEnum = {
    BOOK: 'livre',
    DVD: 'dvd',
    VIDEO_GAME: 'jeux video',
};

class Product{
    constructor(id,name,price,category,quantity){
        this.id = id;
        this.name = name
        this.price = price;
        this.category = category
        this.quantity = quantity;
    }
}   
module.exports = {Product, CategoryEnum};