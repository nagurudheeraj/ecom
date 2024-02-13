import { createSlice } from '@reduxjs/toolkit'

const initialState = [
    // {
    //     id: '4739eac6-27cd-4648-a722-28cf4c59b76d',
    //     name: 'Eye Cream',
    //     describe: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.Tempore odio nostrum dicta impedit minima nemo quia distinctio aliquam vero ipsam ut quisquam saepe unde maiores, sequi est? Sed, quaerat quisquam?',
    //     price: 10,
    //     image: 'http://localhost:3000/static/media/BannerSidePhoto.b0322f778cf3d1ac5866.png',
    //     quantity: 1,
    //     productTimesQty: 10
    // },
    // {
    //     id: '95de3ff7-a57d-434c-bcf2-4862e5f38d05',
    //     name: 'Face Cream',
    //     describe: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.Tempore odio nostrum dicta impedit minima nemo quia distinctio aliquam vero ipsam ut quisquam saepe unde maiores, sequi est? Sed, quaerat quisquam?',
    //     price: 32,
    //     image: 'http://localhost:3000/static/media/BannerSidePhoto.b0322f778cf3d1ac5866.png',
    //     quantity: 1,
    //     productTimesQty: 32
    // }
]

export const addToCartSlice = createSlice({
    name: 'addToCart',
    initialState,
    reducers: {
        addProduct: (state, action) => {
            console.log({ action });
            const { id, price, quantity } = action.payload;

            const existingProductIndex = state.findIndex(item => item.id === id);
            if (existingProductIndex !== -1) {
                if (typeof quantity !== 'undefined') {
                    state[existingProductIndex].quantity = quantity;
                } else {
                    state[existingProductIndex].quantity += 1;
                }
                state[existingProductIndex].productTimesQty = state[existingProductIndex].quantity * price;
            } else {
                state.push({ ...action.payload, quantity: typeof quantity !== 'undefined' ? quantity : 1, productTimesQty: price });
            }
        },
        deleteProduct: (state, action) => {
            const idToDelete = action.payload;
            return state.filter(item => item.id !== idToDelete);
        },
        decrementProductQuantity: (state, action) => {
            const id = action.payload;
            const productToUpdate = state.find(item => item.id === id);
            if (productToUpdate) {
                if (productToUpdate.quantity > 1) {
                    return state.map(item =>
                        item.id === id ? { ...item, quantity: item.quantity - 1, productTimesQty: (item.quantity - 1) * item.price } : item
                    );
                } else {
                    return state.filter(item => item.id !== id);
                }
            }
            return state;
        },
        incrementProductQuantity: (state, action) => {
            const id = action.payload;
            const productToUpdate = state.find(item => item.id === id);
            if (productToUpdate) {
                return state.map(item =>
                    item.id === id ? { ...item, quantity: item.quantity + 1, productTimesQty: (item.quantity + 1) * item.price } : item
                );
            }
            return state;
        },
    },
})

export const { addProduct, deleteProduct, decrementProductQuantity, incrementProductQuantity } = addToCartSlice.actions

export default addToCartSlice.reducer