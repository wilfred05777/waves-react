const moongose = require('mongoose');
const Schema = moongose.Schema;

const productSchema = moongose.Schema({
    name: {
        required: true,
        type: String,
        unique: 1,
        maxlength: 100
    },
    description: {
        required: true,
        type: String,
        maxlength: 100000
    },
    price:{
        requred: true,
        type: Number,
        maxlength: 255 
    },
    brand:{
        type: Schema.Types.ObjectId,
        ref: 'Brand',
        required: true,

    },
    shipping:{
        required: true,
        type: Boolean
    },
    available:{
        required: true,
        type: Boolean
    },
    wood:{
        type: Schema.Types.ObjectId,
        ref: 'Wood',
        required: true
    },
    frets:{
        required: true,
        type: Number
    },
    sold:{
        type: Number,
        maxlength: 100,
        default: 0
    },
    publish:{
        required: true,
        type: Boolean
    },
    images:{
        type: Array,
        default:[]
    }

},{timestamps:true});

const Product = moongose.model('Product', productSchema);
module.exports = { Product }