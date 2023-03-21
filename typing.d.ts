// import { Image } from "sanity";


type Base = {
    _createdAt : string;
    _id : string;
    _rev : string;
    _type : string;
    _updatedAt : string
}

interface Code {
   
    code : string,
    filename : string
}

interface Post extends Base{
    author : Author;
    body : Block[];
    image : string
    myCodeField:Code
    categories : Category[];
    mainImage : Image;
    slug : string;
    title : string;
    description : string;
}

interface Author extends Base{
    bio : Block[];
    image : Image;
    name : string;
    slug : Slug;

}

interface Span {
_key : string;
_type : "span",
marks : string[];
text : string;
}

interface Category extends Base{
description : string;
title : string
}

interface mainImage{
_type : "image";
asset : Reference
}

interface Title{
    _type : "string";
    current : string
}

interface Image{
    _type : "image",
    asset : Reference
}
interface Reference {
    _ref : string;
    _type : "reference"
}
interface Slug{
    _type : "slug",
    current : string
}

interface Block{
    _key : string;
    _type : "block";
    children : Span[];
    markDefs : any[];
    style : "normal" | "h1" | "h2" | "h3" | "h4" | "blockquote" 
}
