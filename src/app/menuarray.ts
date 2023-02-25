 export let menus=[{
    name:"Pizza Inferno",
    discribtion:"dolor sit amet consectetur adipisicing elit. Incidunt, expedita sit amet consectetur adipisicing elit",
    price:15.50 ,
    img:"https://cdn.pixabay.com/photo/2016/03/05/21/47/american-1239091__480.jpg",
    availability:true,
},{
    name:"Pizza Capricciosa",
    discribtion:"dolor sit amet consectetur adipisicing elit. Incidunt, expedita sit amet consectetur adipisicing elit",
    price:15.50 ,
    img:"https://cdn.pixabay.com/photo/2017/11/26/08/42/pizza-2978377__480.jpg",
    availability:true
},{
    name:"Pizza Margerita",
    discribtion:"dolor sit amet consectetur adipisicing elit. Incidunt, expedita sit amet consectetur adipisicing elit",
    price:10.70 ,
    img:"https://cdn.pixabay.com/photo/2018/04/07/15/03/pizza-3298685__480.jpg",
    availability:false
},{
    name:"pizza prosciutto",
    discribtion:"dolor sit amet consectetur adipisicing elit. Incidunt, expedita sit amet consectetur adipisicing elit",
    price:15.50 ,
    img:"https://cdn.pixabay.com/photo/2020/01/29/17/44/arugula-4803139__480.jpg",
    availability:false
},{
    name:"Penne al Gorgonzola",
    discribtion:"dolor sit amet consectetur adipisicing elit. Incidunt, expedita sit amet consectetur adipisicing elit",
    price:9.80 ,
    img:"https://cdn.pixabay.com/photo/2016/05/14/18/20/spaghetti-1392266__480.jpg",
    availability:true
},{
    name:"spaghetti carbonara",
    discribtion:"dolor sit amet consectetur adipisicing elit. Incidunt, expedita sit amet consectetur adipisicing elit",
    price:10.20 ,
    img:"https://cdn.pixabay.com/photo/2020/03/26/04/55/pasta-4969269__480.jpg",
    availability:true
},{
    name:"Tiramisu",
    discribtion:"dolor sit amet consectetur adipisicing elit. Incidunt, expedita sit amet consectetur adipisicing elit",
    price:10.20 ,
    img:"https://cdn.pixabay.com/photo/2017/10/28/19/07/tiramisu-2897900__480.jpg",
    availability:true
}];
export interface Imenu{
    name:string;
    discribtion:string;
    price:number;
    img:string;
    availability?:boolean;

};