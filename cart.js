const product = [
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
        size: [
            {
                code:"41"
            },
            {
                code:"42"
            },
            {
                code:"43"
            },
            {
                code:"44"
            },
            {
                code:"45"
            }
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
        size: [
            {
                code:"41"
            },
            {
                code:"42"
            },
            {
                code:"43"
            },
            {
                code:"44"
            },
            {
                code:"45"
            }
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
        size: [
            {
                code:"41"
            },
            {
                code:"42"
            },
            {
                code:"43"
            },
            {
                code:"44"
            },
            {
                code:"45"
            }
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
        size: [
            {
                code:"41"
            },
            {
                code:"42"
            },
            {
                code:"43"
            },
            {
                code:"44"
            },
            {
                code:"45"
            }
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
        size: [
            {
                code:"41"
            },
            {
                code:"42"
            },
            {
                code:"43"
            },
            {
                code:"44"
            },
            {
                code:"45"
            }
        ],

    },
];


console.log(product)
let cart = {}
productButton.addEventListener('click', 
    function adaugaProdus(produs,price,size) {
        if (cart[produs] != null) {
            cart[produs].cantitate++;
        } else {
            cart[produs] = {}
            cart[produs].cantitate = 1;
            cart[produs].pretUnitate = price;
            cart[produs].marime = size;
        }
        //console.log(cart);
    
        updateDOM();
    }
)
let cartStorage = localStorage.getItem('cart');
let cartHTML = document.querySelector('#shoppingCart');

if (cartStorage != null) {
    cart = JSON.parse(cartStorage);
    updateDOM();
}

function adaugaProdus(produs,price,size) {
    if (cart[produs] != null) {
        cart[produs].cantitate++;
    } else {
        cart[produs] = {}
        cart[produs].cantitate = 1;
        cart[produs].pretUnitate = price;
        cart[produs].marime = size;
    }
    //console.log(cart);

    updateDOM();
}


function stergeProdus(produs) {
    if (cart[produs].cantitate > 1) {
        cart[produs].cantitate--; 
    } else {
        delete cart[produs];
    }

    updateDOM();
}


function updateDOM() {

    let stringCart = JSON.stringify(cart);
    //console.log(stringCart);
    localStorage.setItem('cart',stringCart);


    //resetam continutul elementului pentru a insera continutul actualizat
    cartHTML.textContent = '';

    //Iteram prin shopping cart-ul actualizat pentru a insera fiecare element in pagina
    

    //Declar o variabila care va contine pretul total
    let pretTotal = 0;

    for (let produs in cart) {
        let list_item = document.createElement('li');
        let p = document.createElement('p');

        //adunam suma tuturor produselor
        pretTotal += cart[produs].pretUnitate * cart[produs].cantitate;
        
        p.innerHTML = produs + ": <b>" + cart[produs].cantitate + "</b>.   Pret Total: " + cart[produs].pretUnitate * cart[produs].cantitate;

        let deleteButton = document.createElement('button');
        deleteButton.textContent = '-';

        deleteButton.onclick = function() {
            stergeProdus(produs);
            console.log(produs);
        }

        p.append(deleteButton);
        list_item.append(p);
        
        cartHTML.insertAdjacentElement('beforeend',list_item);
        //produs:cantitate produs

    }

    //Adaug pretul total intr-un element h2 la sfarsitul listei
    let h2 = document.createElement ('h2');
    h2.innerHTML = 'Pret Total:' + pretTotal;
    cartHTML.append(h2);
}


function clearCart() {
    cart = {};
    updateDOM();
}