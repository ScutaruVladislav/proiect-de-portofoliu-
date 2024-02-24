const wrapper = document.querySelector(".sliderWrapper")
const menuItems = document.querySelectorAll(".menuItem")

const products = [
    {
        id: 1,
        title: "Air Force",
        price: 119,
        colors: [
            {
                code:"black",
                img: "img2/airforceblack.png",
            },
            {
                code:"white",
                img: "img2/airforcewhite.png",
            },
            {
                code:"grey",
                img: "img2/airforcegrey.png",
            },
        ],
    },
    {
        id: 2,
        title: "Jordan",
        price: 129,
        colors: [
            {
                code:"grey",
                img: "img2/jordangrey.png",
            },
            {
                code:"lightblue",
                img: "img2/jordanlightblue.png",
            },
            {
                code:"blue",
                img: "img2/jordanblue.png",
            },
        ],

    },
    {
        id: 3,
        title: "Blazer",
        price: 139,
        colors: [
            {
                code:"black",
                img: "img2/blazerblack.png",
            },
            {
                code:"purple",
                img: "img2/blazerpurple.png",
            },
            {
                code:"white",
                img: "img2/blazerwhite.png",
            },
            
        ],

    },
    {
        id: 4,
        title: "Crater",
        price: 149,
        colors: [
            {
                code:"black",
                img: "img2/craterblack.png",
            },
            {
                code:"grey",
                img: "img2/cratergrey.png",
            },
            {
                code:"white",
                img: "img2/craterwhite.png",
            },
        ],

    },
    {
        id: 5,
        title: "Hippie",
        price: 159,
        colors: [
            {
                code:"black",
                img: "img2/hippieblack.png",
            },
            {
                code:"lightgrey",
                img: "img2/hippielightgrey.png",
            },
            {
                code:"grey",
                img: "img2/hippiesolidgrey.png",
            },
        ],

    },
]

let choosenProduct = products[0]

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item,index)=>{
    item.addEventListener("click",()=>{
        wrapper.style.transform = `translateX(${-100 * index}vw)`;

        choosenProduct = products[index];

        currentProductTitle.textContent = choosenProduct.title;
        currentProductPrice.textContent = "$" + choosenProduct.price;
        currentProductImg.src = choosenProduct.colors[0].img;

        //assing new colors

        currentProductColors.forEach((color,index)=>{
            color.style.backgroundColor = choosenProduct.colors[index].code;
        })
    });
});


currentProductColors.forEach((color,index)=> {
    color.addEventListener("click", ()=>{
        currentProductImg.src =choosenProduct.colors[index].img;
    })
})


currentProductSizes.forEach((size,index)=>{
    size.addEventListener("click",()=>{
        currentProductSizes.forEach(size=>{
            size.style.backgroundColor= "white"
            size.style.color= "black"
        })
        size.style.backgroundColor= "black"
        size.style.color= "white"
    })
})


const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

// productButton.addEventListener("click",()=>{
//     payment.style.display="flex"
// })

close.addEventListener("click",()=>{
    payment.style.display="none"
})

