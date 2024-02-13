import { v4 as uuidv4 } from 'uuid';
import sc1 from "../Images/Products/skincare1.png"
import sc2 from "../Images/Products/skincare2.png"
import sc3 from "../Images/Products/skincare3.png"
import sc4 from "../Images/Products/skincare4.png"

import all1 from "../Images/Products/all1.png"
import all2 from "../Images/Products/all2.png"
import all3 from "../Images/Products/all3.png"
import all4 from "../Images/Products/all4.png"
import all5 from "../Images/Products/all5.png"
import all6 from "../Images/Products/all6.png"
import all7 from "../Images/Products/skincare1.png"

import hair1 from "../Images/Products/hair1.png"
import hair2 from "../Images/Products/hair2.png"
import hair3 from "../Images/Products/hair3.png"
import hair4 from "../Images/Products/hair4.png"
import hair5 from "../Images/Products/hair5.png"
import hair6 from "../Images/Products/hair6.png"

import oil1 from "../Images/Products/oil1.png"
import oil2 from "../Images/Products/oil2.png"
import oil3 from "../Images/Products/oil3.png"
import oil4 from "../Images/Products/oil4.png"




const productsData = {
    "hair care": [
        {
            id: uuidv4(),
            name: "Eye Cream",
            describe: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.Tempore odio nostrum dicta impedit minima nemo quia distinctio aliquam vero ipsam ut quisquam saepe unde maiores, sequi est? Sed, quaerat quisquam?",
            price: 13,
            image: hair1,
            quantity: 1,
            width: 200
        },
        {
            id: uuidv4(),
            name: "Eye Cream",
            describe: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.Tempore odio nostrum dicta impedit minima nemo quia distinctio aliquam vero ipsam ut quisquam saepe unde maiores, sequi est? Sed, quaerat quisquam?",
            price: 13,
            image: hair2,
            quantity: 1,
            width: 180
        },
        {
            id: uuidv4(),
            name: "Eye Cream",
            describe: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.Tempore odio nostrum dicta impedit minima nemo quia distinctio aliquam vero ipsam ut quisquam saepe unde maiores, sequi est? Sed, quaerat quisquam?",
            price: 13,
            image: hair3,
            quantity: 1,
            width: 180
        },
        {
            id: uuidv4(),
            name: "Eye Cream",
            describe: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.Tempore odio nostrum dicta impedit minima nemo quia distinctio aliquam vero ipsam ut quisquam saepe unde maiores, sequi est? Sed, quaerat quisquam?",
            price: 13,
            image: hair4,
            quantity: 1,
            width: 120
        },
        {
            id: uuidv4(),
            name: "Eye Cream",
            describe: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.Tempore odio nostrum dicta impedit minima nemo quia distinctio aliquam vero ipsam ut quisquam saepe unde maiores, sequi est? Sed, quaerat quisquam?",
            price: 13,
            image: hair5,
            quantity: 1,
            width: 180
        },
        {
            id: uuidv4(),
            name: "Eye Cream",
            describe: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.Tempore odio nostrum dicta impedit minima nemo quia distinctio aliquam vero ipsam ut quisquam saepe unde maiores, sequi est? Sed, quaerat quisquam?",
            price: 13,
            image: hair6,
            quantity: 1,
            width: 180
        },
        {
            id: uuidv4(),
            name: "Eye Cream",
            describe: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.Tempore odio nostrum dicta impedit minima nemo quia distinctio aliquam vero ipsam ut quisquam saepe unde maiores, sequi est? Sed, quaerat quisquam?",
            price: 13,
            image: all6,
            quantity: 1,
            width: 160
        },
        {
            id: uuidv4(),
            name: "Eye Cream",
            describe: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.Tempore odio nostrum dicta impedit minima nemo quia distinctio aliquam vero ipsam ut quisquam saepe unde maiores, sequi est? Sed, quaerat quisquam?",
            price: 13,
            image: all5,
            quantity: 1,
            width: 200
        },
    ],
    "skin care": [
        {
            id: uuidv4(),
            name: "Eye Cream",
            describe: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.Tempore odio nostrum dicta impedit minima nemo quia distinctio aliquam vero ipsam ut quisquam saepe unde maiores, sequi est? Sed, quaerat quisquam?",
            price: 13,
            image: sc1,
            quantity: 1,
            width: 60
        },
        {
            id: uuidv4(),
            name: "Face Cream",
            describe: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.Tempore odio nostrum dicta impedit minima nemo quia distinctio aliquam vero ipsam ut quisquam saepe unde maiores, sequi est? Sed, quaerat quisquam?",
            price: 32,
            image: sc2,
            quantity: 1,
            width: 60
        },
        {
            id: uuidv4(),
            name: "Eye Cream",
            describe: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.Tempore odio nostrum dicta impedit minima nemo quia distinctio aliquam vero ipsam ut quisquam saepe unde maiores, sequi est? Sed, quaerat quisquam?",
            price: 13,
            image: sc3,
            quantity: 1,
            width: 60
        },
        {
            id: uuidv4(),
            name: "Eye Cream",
            describe: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.Tempore odio nostrum dicta impedit minima nemo quia distinctio aliquam vero ipsam ut quisquam saepe unde maiores, sequi est? Sed, quaerat quisquam?",
            price: 13,
            image: sc4,
            quantity: 1,
            width: 60
        }
    ],
    "body": [
        {
        id: uuidv4(),
        name: "Eye Cream",
        describe: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.Tempore odio nostrum dicta impedit minima nemo quia distinctio aliquam vero ipsam ut quisquam saepe unde maiores, sequi est? Sed, quaerat quisquam?",
        price: 13,
        image: oil2,
        quantity: 1,
        width: 200
    },
        {
            id: uuidv4(),
            name: "Eye Cream",
            describe: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.Tempore odio nostrum dicta impedit minima nemo quia distinctio aliquam vero ipsam ut quisquam saepe unde maiores, sequi est? Sed, quaerat quisquam?",
            price: 13,
            image: oil3,
            quantity: 1,
            width: 200
        },
        {
            id: uuidv4(),
            name: "Eye Cream",
            describe: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.Tempore odio nostrum dicta impedit minima nemo quia distinctio aliquam vero ipsam ut quisquam saepe unde maiores, sequi est? Sed, quaerat quisquam?",
            price: 13,
            image: oil4,
            quantity: 1,
            width: 200
        }
    ],
    "baby": [
        {
            id: uuidv4(),
            name: "Lotus hair oil",
            describe: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.Tempore odio nostrum dicta impedit minima nemo quia distinctio aliquam vero ipsam ut quisquam saepe unde maiores, sequi est? Sed, quaerat quisquam?",
            price: 30,
            image: all1,
            quantity: 1,
            width: 200
        },
        {
            id: uuidv4(),
            name: "Bamboo Charcoal",
            describe: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.Tempore odio nostrum dicta impedit minima nemo quia distinctio aliquam vero ipsam ut quisquam saepe unde maiores, sequi est? Sed, quaerat quisquam?",
            price: 18,
            image: all2,
            quantity: 1,
            width: 100
        },
        {
            id: uuidv4(),
            name: "Face Cream",
            describe: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.Tempore odio nostrum dicta impedit minima nemo quia distinctio aliquam vero ipsam ut quisquam saepe unde maiores, sequi est? Sed, quaerat quisquam?",
            price: 32,
            image: all3,
            quantity: 1,
            width: 140
        },
        {
            id: uuidv4(),
            name: "Eye Cream",
            describe: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.Tempore odio nostrum dicta impedit minima nemo quia distinctio aliquam vero ipsam ut quisquam saepe unde maiores, sequi est? Sed, quaerat quisquam?",
            price: 13,
            image: all4,
            quantity: 1,
            width: 400
        },
        {
            id: uuidv4(),
            name: "Face Cream",
            describe: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.Tempore odio nostrum dicta impedit minima nemo quia distinctio aliquam vero ipsam ut quisquam saepe unde maiores, sequi est? Sed, quaerat quisquam?",
            price: 32,
            image: all5,
            quantity: 1,
            width: 300
        },
        {
            id: uuidv4(),
            name: "Eye Cream",
            describe: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.Tempore odio nostrum dicta impedit minima nemo quia distinctio aliquam vero ipsam ut quisquam saepe unde maiores, sequi est? Sed, quaerat quisquam?",
            price: 13,
            image: all6,
            quantity: 1,
            width: 150
        },
        {
            id: uuidv4(),
            name: "Face Cream",
            describe: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.Tempore odio nostrum dicta impedit minima nemo quia distinctio aliquam vero ipsam ut quisquam saepe unde maiores, sequi est? Sed, quaerat quisquam?",
            price: 32,
            image: all7,
            quantity: 1,
            width: 60
        }
    ],
    "oils": [
        {
            id: uuidv4(),
            name: "Eye Cream",
            describe: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.Tempore odio nostrum dicta impedit minima nemo quia distinctio aliquam vero ipsam ut quisquam saepe unde maiores, sequi est? Sed, quaerat quisquam?",
            price: 13,
            image: oil1,
            quantity: 1,
            width: 200
        },
        {
            id: uuidv4(),
            name: "Eye Cream",
            describe: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.Tempore odio nostrum dicta impedit minima nemo quia distinctio aliquam vero ipsam ut quisquam saepe unde maiores, sequi est? Sed, quaerat quisquam?",
            price: 13,
            image: oil2,
            quantity: 1,
            width: 200
        },
        {
            id: uuidv4(),
            name: "Eye Cream",
            describe: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.Tempore odio nostrum dicta impedit minima nemo quia distinctio aliquam vero ipsam ut quisquam saepe unde maiores, sequi est? Sed, quaerat quisquam?",
            price: 13,
            image: oil3,
            quantity: 1,
            width: 200
        },
        {
            id: uuidv4(),
            name: "Eye Cream",
            describe: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.Tempore odio nostrum dicta impedit minima nemo quia distinctio aliquam vero ipsam ut quisquam saepe unde maiores, sequi est? Sed, quaerat quisquam?",
            price: 13,
            image: oil4,
            quantity: 1,
            width: 200
        }
    ],
}

// Merge all categories into "all" without duplicates
productsData["all"] = Object.values(productsData).reduce((allProducts, category) => {
    category.forEach(product => {
        if (!allProducts.find(p => p.id === product.id)) {
            allProducts.push(product);
        }
    });
    return allProducts;
}, []);

// If you want to ensure unique IDs within "all", you can regenerate them
productsData["all"].forEach(product => {
    product.id = uuidv4();
});

export default productsData;