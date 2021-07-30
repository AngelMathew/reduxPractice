import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cart";

const store=configureStore({
    reducer:{
        counterCart:cartReducer
    }
})

export default store;
export type RootState = ReturnType<typeof store.getState>
// export type store = ReturnType<typeof store.getState>