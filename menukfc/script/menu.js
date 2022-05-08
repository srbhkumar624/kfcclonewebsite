import {navbar,footer} from"../components/main.js";
let head=document.getElementById("header");
let foot=document.getElementById("footer");
foot.innerHTML=footer();
head.innerHTML=navbar();

let add_to_cart = JSON.parse(localStorage.getItem("addtoCart")) || [];
let chuk  = JSON.parse(localStorage.getItem("order")) || []
let match_day = [
    {
        image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/A-33781-0.jpg?ver=14.56",
        name: "Howzzat Biryani Combo",
        type: "Non Veg",
        price: "₹ 725.00",
        des: "Large portions of Biryani & Chicken Popcorn, 2 Spicy Gravies, 4pc Wings & Pepsi PET [serves 2-3]"
    },
    {
        image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/A-33783-0.jpg?ver=14.56",
        name: "Super 6s Bucket Meal",
        type: "Non veg",
        price: "₹978.00",
        des: "Save 21% on combo of 6 Hot & Crispy Chicken, 6 Strips, Medium Fries & Pepsi PET [serves 3]"

    },
    {
        image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/A-33784-0.jpg?ver=14.56",
        name: "Super 4s Bucket Meal",
        type: "Non veg",
        price: "₹869.00",
        des: "Enjoy 4 Hot & Crispy Chicken, 4 Strips, Medium Popcorn & Pepsi PET - save Rs. 79 [serves 2-3]"

    },
    {
        image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/A-33785-0.jpg?ver=14.56",
        name: "Super 6s Bucket",
        type: "Non veg",
        price: "₹869.00",
        des: "Save Rs. 203 on combo of 6 Hot & Crispy Chicken & 6 Strips [serves 3]"

    },
    {
        image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/A-33786-0.jpg?ver=14.56",
        name: "Super 4s Bucket",
        type: "Non veg",
        price: "₹608.00",
        des: "Flat Rs. 107 off on combo of 4 Hot & Crispy Chicken & 4 Strips [serves 2]"

    },
    {
        image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/A-33787-0.jpg?ver=14.56",
        name: "Dream Team Bucket",
        type: "Non veg",
        price: "₹944.00",
        des: "Leg before any wicket! Save 29% on 10 Leg Pieces & 4 Dips [serves 3-4]"

    }]
let chicken_bucket = [{
    image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/A-32775-0.jpg?ver=14.56",
    name: "5pc Leg Piece Bucket Meal",
    type: "Non veg",
    price: "₹650.00",
    des: "Save 22% on 5 chicken Leg Pieces, 2 dips, 1 Medium Fries & a Pepsi PET [serves 2 ]"

},
{
    image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/A-30870-0.jpg?ver=14.56",
    name: "Friendship Bucket",
    type: "Non veg",
    price: "₹734.00",
    des: "Save Rs. 172 on 3pc Hot & Crispy, 3 Hot Wings, 3 Chicken Strips & a Large Popcorn [serves 3]"

},
{
    image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/A-30908-0.jpg?ver=14.56",
    name: "Bucket for Two",
    type: "Non veg",
    price: "₹629.00",
    des: "Flat Rs. 115 off on combo of 2pc Hot & Crispy, 2 pc Smoky Red Chicken & Large Popcorn [serves 2-3]"

},
{
    image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/A-32295-0.jpg?ver=14.56",
    name: "10 strips & 2 Dips Bucket",
    type: "Non veg",
    price: "₹495.00",
    des: "Flat Rs. 125 off on this dipping combo of 10 pc chicken strips & 2 delicious dips [serves 2-3]"

},
{
    image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/A-32774-0.jpg?ver=14.56",
    name: "5pc Leg Piece Bucket & 2 Dips",
    type: "Non veg",
    price: "₹524.00",
    des: "Save 22% on 5 chicken Leg Pieces, 2 dips, 1 Medium Fries & a Pepsi PET [serves 2 ]"

},
{
    image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/A-32169-0.jpg?ver=14.56",
    name: "Ultimate Savings Bucket",
    type: "Non veg",
    price: "₹734.00",
    des: "Save 35% on signature bucket of 4pc Hot & crispy, 6 Wings, 4 strips, 3 Dips & Pepsi PET [serves 2-3 ]"

},
{
    image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/A-32293-0.jpg?ver=14.56",
    name: "Big 12",
    type: "Non veg",
    price: "₹755.00",
    des: "Save 28% on 6pc Hot & Crispy Chicken, 6 Hot Wings & 2 dips [serves 2- 3]"

},
{
    image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/A-31946-0.jpg?ver=14.56",
    name: "Mingles Bucket Meal",
    type: "Non veg",
    price: "₹503.00",
    des: "Save Rs. 71 on 4 Hot Wings, 2 Chicken Strips, Reg Popcorn, medium fries & Pepsi PET [serves 2 ]"
},
{
    image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/A-32197-0.jpg?ver=14.56",
    name: "Big 8",
    type: "Non veg",
    price: "₹719.00",
    des: "Save 29% on this variety bucket of 4pc Hot & Crispy chicken & 4pc Smoky Red chicken [serves 2- 3 ]"
},
{
    image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/A-31897-41326.jpg?ver=14.56",
    name: "5pc Smoky Red Chicken",
    type: "Non veg",
    price: "₹524.00",
    des: "Flat 20% off on 5pc Smoky red grilled chicken [serves 2]"
}, {
    image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/A-30640-40488.jpg?ver=14.56",
    name: "8 pc Hot & Crispy Chicken",
    type: "Non veg",
    price: "₹786.00",
    des: "Save Rs. 182 & get 8pc signature Hot & crispy chicken [serves 3-4]"
},
{
    image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/A-30636-40484.jpg?ver=14.56",
    name: "6 Pc Hot & Crispy",
    type: "Non veg",
    price: "₹650.00",
    des: "Flat 10% off on 6pc signature Hot & crispy chicken [serves 2-3]"
}];
let biryani_bucket = [
    {
        image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/A-33517-0.jpg?ver=14.56",
        name: "Classic Biryani Combo",
        type: "Non veg",
        price: "₹777.00",
        des: "Large portions of Biryani rice with 2 pc Hot & Crispy, 2 Gravies, 4 Strips & Pepsi PET [serves 2-3]"
    },
    {
        image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/A-33518-0.jpg?ver=14.56",
        name: "Smoky Grilled Biryani Combo",
        type: "Non veg",
        price: "₹777.00",
        des: "Large portions of Biryani rice with 2 pc Smoky Red, 2 Gravies, Med Popcorn & Pepsi PET [serves 2-3]"
    },
    {
        image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/A-33845-0.jpg?ver=14.56",
        name: "Howzzat Biryani Combo",
        type: "Non veg",
        price: "₹725.00",
        des: "Large portions of Biryani & Chicken Popcorn, 2 Spicy Gravies, 4pc Wings & Pepsi PET [serves 2-3]"
    }, {
        image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/A-33449-42353.jpg?ver=14.56",
        name: "Classic Chicken Biryani Bucket (Large)",
        type: "Non veg",
        price: "₹499.00",
        des: "Large portions of Biryani rice served with 2 pc Hot & Crispy Chicken & 2 Gravies [serves 2]"
    },
    {
        image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/A-33450-42354.jpg?ver=14.56",
        name: "Popcorn Chicken Biryani Bucket (Large",
        type: "Non veg",
        price: "₹499.00",
        des: "Large portions of Biryani rice served with Chicken Popcorn & 2 Gravies [serves 2]"
    },
    {
        image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/A-33451-42355.jpg?ver=14.56",
        name: "Smoky Grilled Biryani Bucket (Large",
        type: "Non veg",
        price: "₹499.00",
        des: "Large portions of Biryani rice served with 2 pc Smoky Red Chicken & 2 Gravies [serves 2]"
    },
    {
        image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/A-33445-42349.jpg?ver=14.56",
        name: "Classic Chicken Biryani Bucket",
        type: "Non veg",
        price: "₹241.00",
        des: "Hyderabadi style Biryani rice served with 1 pc Hot & Crispy & Spicy Gravy [serves 1]"
    },
    {
        image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/A-33446-42350.jpg?ver=14.56",
        name: "Popcorn Chicken Biryani Bucket",
        type: "Non veg Serves 1",
        price: "₹241.00",
        des: "Hyderabadi style Biryani rice served with Popcorn & Spicy Gravy [serves 1]"
    },
    {
        image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/A-33447-42351.jpg?ver=14.56",
        name: "Smoky Grilled Biryani Bucket",
        type: "Non veg Serves 1",
        price: "₹241.00",
        des: "Hyderabadi style Biryani rice served with 1 pc Smoky Red & Spicy Gravy [serves 1]"
    }, {
        image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/A-33448-42352.jpg?ver=14.56",
        name: "Veg Biryani Bucket",
        type: "Veg Serves 1",
        price: "₹198.00",
        des: "Hyderabadi style Biryani rice served with Veg Patty & Spicy Gravy [serves 1]"
    }];
let box_meal = [
    {
        image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/A-32050-0.jpg?ver=14.56",
        name: "All Chicken Box",
        type: "Non veg",
        price: "₹199.00",
        des: "A Box with your favorites! Get 1 pc Hot & Crispy, 2 Hot Wings & 1 Chicken Strip at a deal price"
    },
    {
        image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/A-32053-0.jpg?ver=14.56",
        name: "Classic Zinger Box",
        type: "Non veg",
        price: "₹329.00",
        des: "A classic deal for Zinger lovers : Get 1 Classic Zinger, 2 Hot Wings, 1 Veg Patty & Pepsi"
    },
    {
        image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/A-32383-0.jpg?ver=14.56",
        name: "Zinger Tandoori Box",
        type: "Non veg",
        price: "₹329.00",
        des: "A deal for the Tandoori lovers : Get 1 Tandoori Zinger, 2 Hot Wings, 1 Veg Patty & Pepsi"
    },
    {
        image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/A-33527-0.jpg?ver=14.56",
        name: "Popcorn Biryani Box",
        type: "Non veg",
        price: "₹345.00",
        des: "Biryani lovers unite : Get 1 Popcorn Biryani Bucket with gravy, 2 Hot Wings & Pepsi"
    },
    {
        image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/A-32055-0.jpg?ver=14.56",
        name: "Veg Zinger Box",
        type: "Veg",
        price: "₹329.00",
        des: "A deal for the Veg Zinger lovers : Get 1 Veg Zinger, 2 Veg Patties & a Pepsi"
    },
    {
        image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/A-33526-0.jpg?ver=14.56",
        name: "Veg Biryani Box",
        type: "Veg",
        price: "₹293.00",
        des: "Biryani lovers unite : Get 1 Veg Biryani Bucket with gravy, 1 Veg Patty & a Pepsi"
    }];

let burger = [
    {
        image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/A-32576-0.jpg?ver=14.56",
        name: "2 Chicken Krisper Burgers",
        type: " Non veg",
        price: "₹240.00",
        des: "2 delicious chicken value burgers - at only 109 each!"
    },
    {
        image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/A-32573-0.jpg?ver=14.56",
        name: "2 Veg Krisper Burgers",
        type: "Veg",
        price: "₹166.00",
        des: "2 delicious veg value burgers - at only 69 each!"
    },
    {
        image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/A-32578-0.jpg?ver=14.56",
        name: "Chicken & Krispers Combo",
        type: "Non veg",
        price: "₹545.00",
        des: "Deal combo of 2 chicken value burgers, 2 pc Hot & Crispy, 2 dips & a chilled Pepsi PET"
    },
    {
        image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/A-32579-0.jpg?ver=14.56",
        name: "Veg-Non-Veg Krispers Combo",
        type: "Non veg",
        price: "₹387.00",
        des: "Pack of 4 burgers - 2 veg & 2 chicken value burgers at a deal price !"
    },
    {
        image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/A-32230-41486.jpg?ver=14.56",
        name: "Tandoori Zinger Burger",
        type: "Non veg",
        price: "₹209.00",
        des: "Chicken zinger with a delicious tandoori sauce"
    },
    {
        image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/A-32232-0.jpg?ver=14.56",
        name: "Mixed Zinger Doubles",
        type: "Non veg",
        price: "₹366.00",
        des: "Best-seller combo of classic chicken zinger & tandoori zinger"
    },
    {
        image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/A-30663-40505.jpg?ver=14.56",
        name: "Classic Zinger Burger",
        type: "Non veg",
        price: "₹199.00",
        des: "Signature burger made with a crunchy chicken fillet, veggies & a delicious mayo sauce"
    },
    {
        image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/A-32172-0.jpg?ver=14.56",
        name: "Buddy Meal",
        type: "Non veg",
        price: "₹524.00",
        des: "Share 2 Classic Chicken Zingers & a Medium Popcorn in this delightful combo for 2"
    },
    {
        image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/A-32403-41750.jpg?ver=14.56",
        name: "Veg Zinger Burger",
        type: "Veg",
        price: "₹188.00",
        des: "Signature veg burger with crispy patties, veggies & a tangy sauce"
    },
    {
        image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/A-32574-0.jpg?ver=14.56",
        name: "2 Veg Krispers Meal",
        type: "Veg",
        price: "₹282.00",
        des: "2 veg value burgers, crispy medium fries & 2 delicious dips at a deal price!"
    }];
let stay_home = [
    {
        image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/A-33524-0.jpg?ver=14.56",
        name: "Classic Biryani Combo",
        type: "Non veg Serves 2-3",
        price: "₹777.00",
        des: "Large portions of Biryani rice with 2 pc Hot & Crispy, 2 Gravies, 4 Strips & Pepsi PET [serves 2-3]"
    },
    {
        image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/A-33525-0.jpg?ver=14.56",
        name: "Smoky Grilled Biryani Combo",
        type: "Non veg Serves 2-3",
        price: "₹777.00",
        des: "Large portions of Biryani rice with 2 pc Smoky Red, 2 Gravies, Med Popcorn & Pepsi PET [serves 2-3]"
    },
    {
        image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/A-33064-0.jpg?ver=14.56",
        name: "Super Snacker Combo",
        type: " Non veg Serves 1-2",
        price: "₹473.00",
        des: "Best of snacks with a Medium Popcorn, 4 strips, 1 dip & a chilled Pepsi Black [serves 1-2]"
    },
    {
        image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/A-33065-0.jpg?ver=14.56",
        name: "Chick’n Wings Combo",
        type: "Non veg Serves 1-2",
        price: "₹473.00",
        des: "Enjoy 2pc Hot & Crispy Chicken, 4 wings , 2 dips & a chilled Pepsi Black [serves 1-2]"
    },
    {
        image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/A-33519-0.jpg?ver=14.56",
        name: "Stay Home Bucket",
        type: "Non veg Serves 3",
        price: "₹828.00",
        des: "Save 21% on 4pc Hot & Crispy, 4 Wings, 6 Chicken Strips & 2 dips [serves 3]"
    },
    {
        image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/A-33520-0.jpg?ver=14.56",
        name: "Family Feast",
        type: "Non veg Serves 3",
        price: "₹870.00",
        des: "Family Deal of 3 chicken zingers, a medium popcorn, medium fries & a chilled Pepsi PET [serves 3]"
    },
    {
        image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/A-33066-0.jpg?ver=14.56",
        name: "Classic Zinger Meal",
        type: "Non veg Serves 1",
        price: "₹362.00",
        des: "Favorite combo of Classic Zinger Burger, Medium Fries & a chilled Pepsi Black [serves 1]"
    },
    {
        image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/A-33067-0.jpg?ver=14.56",
        name: "Chick'n Strips Solo Combo",
        type: "Non veg Serves 1",
        price: "₹440.00",
        des: "Go solo with 1 pc Hot & Crispy, 3 strips, Medium Fries & a chilled Pepsi Black [serves 1]"
    },
    {
        image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/A-33068-0.jpg?ver=14.56",
        name: "Chick'n Fries Solo Combo",
        type: "Non veg Serves 1",
        price: "₹440.00",
        des: "Try this classic pairing of 2pc Hot & Crispy, Medium Fries, 2 Dips & a chilled Pepsi Black [serves 1]"
    }];
let snacks = [
    {
        image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/A-32841-42014.jpg?ver=14.56",
        name: "Choco Mud Pie",
        type: "Veg",
        price: "₹135.00",
        des: "Chocolate lovers unite! Say hello to our creamy chocolate & cake dessert- a must try!"
    },
    {
        image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/A-32842-42015.jpg?ver=14.56",
        name: "Coffee Mousse Cake",
        type: "Veg",
        price: "₹135.00",
        des: "Coffee, chocolate, cake…what's not to love? Enjoy this for coffee-licious temptations!"
    },
    {
        image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/A-31984-0.jpg?ver=14.56",
        name: "Chicken & Fries Bucket",
        type: "Non veg",
        price: "₹314.00",
        des: "Save 37% on this favorite combo of 2pc Hot & Crispy chicken with Medium Fries"
    },
    {
        image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/A-31964-0.jpg?ver=14.56",
        name: "Mingles Bucket",
        type: "Non veg Serves 1-2",
        price: "₹356.00",
        des: "Save 13% on this mingle of 4 Wings, 2 Strips & a Reg Popcorn [serves 1-2]"
    },
    {
        image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/A-30678-40515.jpg?ver=14.56",
        name: "4pc Hot & Crispy Chicken",
        type: "Non veg",
        price: "₹450.00",
        des: "4 pcs of signature Hot & crispy chicken at a deal price"
    },
    {
        image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/A-30675-40512.jpg?ver=14.56",
        name: "Large Popcorn",
        type: "Non veg",
        price: "₹240.00",
        des: "Signature bite-sized boneless chicken, with special spices"
    },
    {
        image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/A-31867-41289.jpg?ver=14.56",
        name: "Medium Popcorn",
        type: "Non veg",
        price: "₹173.00",
        des: "Signature bite-sized boneless chicken, with special spices"
    },
    {
        image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/A-31866-41288.jpg?ver=14.56",
        name: "Regular Popcorn",
        type: "Non veg",
        price: "₹121.00",
        des: "Signature bite-sized boneless chicken, with special spices"
    },
    {
        image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/A-32287-41499.jpg?ver=14.56",
        name: "Large Fries",
        type: "Veg",
        price: "₹125.00",
        des: "Jazz up your meal with crispy large fries!"
    },
    {
        image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/A-31412-41042.jpg?ver=14.56",
        name: "Medium Fries",
        type: "Veg",
        price: "₹104.00",
        des: "Jazz up your meal with crispy fries!"
    },
    {
        image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/A-30676-40513.jpg?ver=14.56",
        name: "2 pc Hot & Crispy Chicken",
        type: "Non veg",
        price: "₹241.00",
        des: "Signature Hot & crispy chicken"
    },
    {
        image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/A-30919-40700.jpg?ver=14.56",
        name: "2 pc Smoky Red Chicken",
        type: "Non veg",
        price: "₹261.00",
        des: "Spicy, red, grilled chicken"
    },
    {
        image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/A-30673-40510.jpg?ver=14.56",
        name: "6pc Boneless Chicken strips",
        type: "Non veg",
        price: "₹272.00",
        des: "Tender, juicy, signature boneless chicken strips"
    },
    {
        image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/A-32229-41485.jpg?ver=14.56",
        name: "4pc Hot Chicken Wings",
        type: "Non veg",
        price: "₹173.00",
        des: "Seasoned, signature KFC chicken wings"
    },
    {
        image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/A-30677-40514.jpg?ver=14.56",
        name: "1 pc Hot & Crispy Chicken",
        type: "Non veg",
        price: "₹121.00",
        des: "Signature Hot & crispy chicken"
    },
    {
        image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/A-30913-40694.jpg?ver=14.56",
        name: "1 Pc Smoky Red Chicken",
        type: "Non veg",
        price: "₹131.00",
        des: "Spicy, red, grilled chicken"
    },
    {
        image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/A-30674-40511.jpg?ver=14.56",
        name: "3pc Boneless Chicken strips",
        type: "Non veg",
        price: "₹173.00",
        des: "Tender, juicy, signature boneless chicken strips"
    },
    {
        image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/A-31388-41030.jpg?ver=14.56",
        name: "2 pc Veg Patty",
        type: "Veg",
        price: "₹163.00",
        des: "Delicious, crispy, veg add-on!"
    },
    {
        image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/A-32290-41502.jpg?ver=14.71",
        name: "Tandoori Masala Dip",
        type: "Veg",
        price: "₹30.00",
        des: "Special tandoori flavored dip, to add a twist to your meal!"
    },
    {
        image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/A-32291-0.jpg?ver=14.71",
        name: "Pack of 4 Dips",
        type: "Veg",
        price: "₹115.00",
        des: "Adding dips is always a good idea!"
    },
    {
        image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/A-31747-0.jpg?ver=14.71",
        name: "Pack of 2 Dips",
        type: "Veg",
        price: "₹60.00",
        des: "Adding dips is always a good idea!"
    }];
let beverages = [
    {
        image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/A-30683-40520.jpg?ver=14.56",
        name: "Pepsi PET",
        type: "Veg",
        price: "₹60.00",
        des: "Pepsi Pet Bottle"
    },
    {
        image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/A-31373-41015.jpg?ver=14.56",
        name: "Pepsi Can 330 ml",
        type: "Veg",
        price: "₹60.00",
        des: "Pepsi Can 330 ml"
    },
    {
        image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/A-31374-41016.jpg?ver=14.56",
        name: "7UP Can 330 ml",
        type: "Veg",
        price: "₹60.00",
        des: "7UP Can 330 ml"
    },
    {
        image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/A-31376-41018.jpg?ver=14.56",
        name: "Pepsi Black Can 330 ml",
        type: "Non veg",
        price: "₹60.00",
        des: "Pepsi Black Can 330 ml"
    },
    {
        image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/A-31375-41017.jpg?ver=14.56",
        name: "Mirinda Can 330 ml",
        type: "Veg",
        price: "₹60.00",
        des: "Mirinda Can 330 ml"
    }]




match_day.forEach((el) => {
    let div = document.createElement("div")
    let img = document.createElement("img");
    img.setAttribute("id", "image");
    img.src = el.image;
    img.src = el.image;
    let name = document.createElement("h4");
    name.innerText = el.name;
    let type = document.createElement("p");
    type.innerText = el.type;
    let price = document.createElement("p");
    price = el.price;
    let des = document.createElement("p");
    des.innerText = el.des;
    let button = document.createElement("button");
    button.setAttribute("class", "Button");
    button.innerHTML = `Add To Cart <i class="fa-solid fa-cart-plus"></i>`;
    div.append(img, name, type, price, des, button);
    document.getElementById("match_day").append(div);

    button.addEventListener("click", function () {
        addtocart(el);
    })
})
function addtocart(el) {
    add_to_cart.push(el);
    chuk.push(el);
    localStorage.setItem("addToCart", JSON.stringify(add_to_cart));
    localStorage.setItem("order", JSON.stringify(chuk));


    // ********************************Storing data to add to cart*****************************
    let bucket=JSON.parse(localStorage.getItem("addToCart")) || [];
    let x=el.price.split("₹");
    let currentPrice=+x[1];
    let z=document.getElementById("rupee").innerText.split("₹");
    let previousPrice=+z[1];
    let total=(previousPrice+currentPrice).toString();
    console.log(total);
    document.getElementById("noOfItem").innerText=bucket.length; 
    document.getElementById("rupee").innerText=`₹${total}`;
    // *******************************storing data to add to cart********************************
}
chicken_bucket.forEach((el) => {
    let div = document.createElement("div")
    let img = document.createElement("img");
    img.setAttribute("class", "Rimage");
    img.src = el.image;
    let name = document.createElement("h4");
    name.innerText = el.name;
    let type = document.createElement("p");
    type.innerText = el.type;
    let price = document.createElement("h3");
    price = el.price;
    let des = document.createElement("p");
    des.innerText = el.des;
    let button = document.createElement("button");
    button.setAttribute("class", "Button");
    button.innerHTML = `Add To Cart <i class="fa-solid fa-cart-plus"></i>`;
    div.append(img, name, type, price, des, button);
    document.getElementById("chicken_bucket").append(div);
    button.addEventListener("click", function () {
        addtocart(el);
    })
})
// function addtocart(el) {
//     add_to_cart.push(el);
//     localStorage.setItem("addtoCart", JSON.stringify(add_to_cart));

// }
biryani_bucket.forEach((el) => {
    let div = document.createElement("div")
    let img = document.createElement("img");
    img.setAttribute("class", "Rimage");
    img.src = el.image;
    let name = document.createElement("h4");
    name.innerText = el.name;
    let type = document.createElement("p");
    type.innerText = el.type;
    let price = document.createElement("h3");
    price = el.price;
    let des = document.createElement("p");
    des.innerText = el.des;
    let button = document.createElement("button");
    button.setAttribute("class", "Button");
    button.innerHTML = `Add To Cart <i class="fa-solid fa-cart-plus"></i>`;
    div.append(img, name, type, price, des, button);
    document.getElementById("biryani_bucket").append(div);
    button.addEventListener("click", function () {
        addtocart(el);
    })
})
// function addtocart(el) {
//     add_to_cart.push(el);
//     localStorage.setItem("addtoCart", JSON.stringify(add_to_cart));


// }
box_meal.forEach((el) => {
    let div = document.createElement("div")
    let img = document.createElement("img");
    img.setAttribute("class", "Rimage");
    img.src = el.image;
    let name = document.createElement("h4");
    name.innerText = el.name;
    let type = document.createElement("p");
    type.innerText = el.type;
    let price = document.createElement("h3");
    price = el.price;
    let des = document.createElement("p");
    des.innerText = el.des;
    let button = document.createElement("button");
    button.setAttribute("class", "Button");
    button.innerHTML = `Add To Cart <i class="fa-solid fa-cart-plus"></i>`;
    div.append(img, name, type, price, des, button);
    document.getElementById("box_meal").append(div);
    button.addEventListener("click", function () {
        addtocart(el);
    })
})
// function addtocart(el) {
//     add_to_cart.push(el);
//     localStorage.setItem("addtoCart", JSON.stringify(add_to_cart));

// }
burger.forEach((el) => {
    let div = document.createElement("div")
    let img = document.createElement("img");
    img.setAttribute("class", "Rimage");
    img.src = el.image;
    let name = document.createElement("h4");
    name.innerText = el.name;
    let type = document.createElement("p");
    type.innerText = el.type;
    let price = document.createElement("h3");
    price = el.price;
    let des = document.createElement("p");
    des.innerText = el.des;
    let button = document.createElement("button");
    button.setAttribute("class", "Button");
    button.innerHTML = `Add To Cart <i class="fa-solid fa-cart-plus"></i>`;
    div.append(img, name, type, price, des, button);
    document.getElementById("burger").append(div);
    button.addEventListener("click", function () {
        addtocart(el);
    })
})
// function addtocart(el) {
//     add_to_cart.push(el);
//     localStorage.setItem("addtoCart", JSON.stringify(add_to_cart));

// }
stay_home.forEach((el) => {
    let div = document.createElement("div")
    let img = document.createElement("img");
    img.setAttribute("class", "Rimage");
    img.src = el.image;
    let name = document.createElement("h4");
    name.innerText = el.name;
    let type = document.createElement("p");
    type.innerText = el.type;
    let price = document.createElement("h3");
    price = el.price;
    let des = document.createElement("p");
    des.innerText = el.des;
    let button = document.createElement("button");
    button.setAttribute("class", "Button");
    button.innerHTML = `Add To Cart <i class="fa-solid fa-cart-plus"></i>`;
    div.append(img, name, type, price, des, button);
    document.getElementById("stay_home").append(div);
    button.addEventListener("click", function () {
        addtocart(el);
    })
})
// function addtocart(el) {
//     add_to_cart.push(el);
//     localStorage.setItem("addtoCart", JSON.stringify(add_to_cart));

// }
snacks.forEach((el) => {
    let div = document.createElement("div")
    let img = document.createElement("img");
    img.setAttribute("class", "Rimage");
    img.src = el.image;
    let name = document.createElement("h4");
    name.innerText = el.name;
    let type = document.createElement("p");
    type.innerText = el.type;
    let price = document.createElement("h3");
    price = el.price;
    let des = document.createElement("p");
    des.innerText = el.des;
    let button = document.createElement("button");
    button.setAttribute("class", "Button");
    button.innerHTML = `Add To Cart <i class="fa-solid fa-cart-plus"></i>`;
    div.append(img, name, type, price, des, button);
    document.getElementById("snaks").append(div);
    button.addEventListener("click", function () {
        addtocart(el);
    })
})
// function addtocart(el) {
//     add_to_cart.push(el);
//     localStorage.setItem("addtoCart", JSON.stringify(add_to_cart));

// }

beverages.forEach((el) => {
    let div = document.createElement("div")
    let img = document.createElement("img");
    img.setAttribute("class", "Rimage");
    img.src = el.image;
    let name = document.createElement("h4");
    name.innerText = el.name;
    let type = document.createElement("p");
    type.innerText = el.type;
    let price = document.createElement("h3");
    price = el.price;
    let des = document.createElement("p");
    des.innerText = el.des;
    let button = document.createElement("button");
    button.setAttribute("class", "Button");
    button.innerHTML = `Add To Cart <i class="fa-solid fa-cart-plus"></i>`;
    div.append(img, name, type, price, des, button);
    document.getElementById("beverages").append(div);
    button.addEventListener("click", function () {
        addtocart(el);
    })
})
// function addtocart(el) {
//     add_to_cart.push(el);
//     localStorage.setItem("addtoCart", JSON.stringify(add_to_cart));
// }
/*redirecting functions*/
document.getElementById("match").addEventListener("click", function () {
    divRedirect();
})
function divRedirect() {
    window.location = "#match_day";
}
document.getElementById("chicken").addEventListener("click", function () {

    divRedirect1();
})
function divRedirect1() {
    window.location = "#chicken_bucket";

}
document.getElementById("biryani").addEventListener("click", function () {
    divRedirect2();
})
function divRedirect2() {
    window.location = "#biryani_bucket";
}
document.getElementById("box").addEventListener("click", function () {
    divRedirect3();
})
function divRedirect3() {
    window.location = "#box_meal";
}
document.getElementById("bur").addEventListener("click", function () {
    divRedirect4();
})
function divRedirect4() {
    window.location = "#burger";
}
document.getElementById("stay").addEventListener("click", function () {
    divRedirect5();
})
function divRedirect5() {
    window.location = "#stay_home";
}
document.getElementById("sna").addEventListener("click", function () {
    divRedirect6();
})
function divRedirect6() {
    window.location = "#snaks";
}
document.getElementById("beve").addEventListener("click", function () {
    divRedirect7();
})
function divRedirect7() {
    window.location = "#beverages";
}
document.getElementById("bucket").addEventListener("click",function(){
    bucketRedirect();
})
function bucketRedirect(){
    window.location="cart.html";
}



// let total=JSON.parse(localStorage.getItem("addToCart"));
// console.log(bucket);
// console.log(bucket.price);
