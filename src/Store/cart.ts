import { createSlice } from "@reduxjs/toolkit";

const initialCartState={counter:0,showCart:false,cartItems:Array()}
// [IPost[], (posts: IPost[]) => void]

const cartSlice=createSlice({
    name:'cart',
    initialState:initialCartState,
    reducers:{
        increment(state){
            state.counter++;
        },
        decrement(state){
            state.counter--;
        },
        showCart(state){
            state.showCart=!state.showCart
        },
        incrementedItems(state,action){
            const newItem=action.payload
            console.log("cartItems",newItem)
            const existingItem=state.cartItems.find((item:any)=>
              item.id===newItem.id
            )
            console.log("existing",existingItem)
            if(!existingItem){
                state.cartItems.push({id:newItem.id,title:newItem.title,price:newItem.price,quantity:1,totalPrice:newItem.price})
            }
            else{
                existingItem.quantity++
                existingItem.totalPrice+=newItem.price
            }
        },
        removeItemsFromCart(state,action){
            const newItem=action.payload
            const existingItem=state.cartItems.find((item:any)=>item.id===newItem.id)
            if(existingItem.quantity===1){
                state.cartItems=state.cartItems.filter((item:any)=>item.title!==newItem.title)
            }
            else{
                existingItem.quantity--;
                existingItem.totalPrice=existingItem.totalPrice-existingItem.price
            }
        }
    }
})

// export type cartActions = typeof cartSlice.actions
export const cartActions=cartSlice.actions;

export default cartSlice.reducer;