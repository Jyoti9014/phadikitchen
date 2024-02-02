const product = [
    {
        id: 0,
        image: 'alooGutke.png' ,
        title: 'Aloo K Gutke',
        price: 30,
    },
    {
        id: 1,
        image: 'bhattDal.png',
        title: 'Bhatt ki dal',
        price: 60,

    },
    {
        id: 2,
        image: 'dadim.png',
        title: 'Dadim chutney',
        price: 20,
    },
    {
        id: 3,
        image: 'madue.png',
        title: 'Madue Chapati',
        price: 10,
    },
    {
        id: 4,
        image: 'palakKaapa.png',
        title: 'Palak kaapa',
        price: 50,
    },
    {
        id: 5,
        image: 'raita.png',
        title: 'Raita',
        price: 20,
    },
    {
        id: 6,
        image: 'rice.png',
        title: 'Rice',
        price: 30,
    },
    {
        id: 7,
        image: 'baalmithai.png',
        title: 'Baal Mitahi',
        price: 30,
    },
    

];

const categories = [...new Set(product.map((item)=>
    {return item}))]
    let i=0;
document.getElementById('root').innerHTML = categories.map((item)=>
{
    var {image, title, price} = item;
    return(
        `<div class='box'>
            <div class='img-box'>
                <img class='images' src=${image}></img>
            </div>
        <div class='bottom'>
        <p>${title}</p>
        <h2> ₹ ${price}.00</h2>`+
        "<button onclick='addtocart("+(i++)+")'>Add to cart</button>"+
        `</div>
        </div>`
    )
}).join('')

var cart=[];

function addtocart(a){
    cart.push({...categories[a]});
    displaycart();

}

function delElement(a){
    cart.splice(a, 1);
    displaycart();
}


function displaycart(a){
    let j = 0, total=0;
    document.getElementById("count").innerHTML=cart.length;
    if(cart.length==0){
        document.getElementById('cartItem').innerHTML = "Your cart is empty";
        document.getElementById("total").innerHTML = " ₹ "+0+".00";
    }
    else{
        document.getElementById("cartItem").innerHTML = cart.map((items)=>
        {
            var {image,title,price} = items;
            total=total+price;
            document.getElementById("total").innerHTML = "  ₹ "+total+".00";
            return(
                `<div class='cart-item'>
                <div class='row-img'>
                    <img class='rowimg' src=${image}>
                </div>
                <p style='font-size:12px;'>${title}</p>
                <h2 style='font-size: 15px;'>$ ${price}.00</h2>`+
                "<i class='fa-solid fa-trash' onclick='delElement("+ (j++) +")'></i></div>"
            );
        }).join('');
    }

}