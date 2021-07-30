import classes from './ShoppingCart.module.scss';
import {cartActions} from "../../Store/cart";
import {useSelector,useDispatch} from "react-redux";
import {RootState} from "../../Store/index";
import {useState} from 'react';

const ShoppingCart=()=>{
    const itemsInCart=useSelector((state:RootState)=>state.counterCart.cartItems)
    console.log(itemsInCart)
    let total=0
    const subTotal=itemsInCart.map((a)=>{
        total+=a.totalPrice;
        
    })
    console.log("suv",total)
    const dispatch=useDispatch()

    const incrementQty=(item:any)=>{
        dispatch(cartActions.increment())
        dispatch(cartActions.incrementedItems(item))
    }

    const decrementQty=(item:any)=>{
        dispatch(cartActions.decrement())
        dispatch(cartActions.removeItemsFromCart(item))
    }
 
    const showCartHandler=()=>{
        dispatch(cartActions.showCart())
    }

    return(
        <div className={classes.shoppingCard}>
            <h3>Shopping Cart</h3>
            {itemsInCart.length===0 &&<p>Your cart is empty </p>}
            {itemsInCart.map((item,index)=>{
                return(
                    <div key={index}>
                        <div className={classes.shoppingCardItem} >
                            <p>{item.title}</p>
                            <p>${(Math.round(item.totalPrice * 100) / 100).toFixed(2)}</p>
                        </div>
                        <div className={classes.shoppingCardQty}>
                            
                            <button onClick={()=>incrementQty(item)} className={classes.actionQty}>+</button>
                            <label>{item.quantity}</label>
                            <button onClick={()=>decrementQty(item)}  className={classes.actionQty}>-</button>
                        </div>
                        <hr></hr>
                    </div>
                )
            })} 
            <div className={classes.shoppingCardFooter}>
            <button className={classes.continueShop} onClick={showCartHandler}>Continue Shopping</button>
            {itemsInCart.length!=0 &&<p>Sub Total : ${(Math.round(total * 100) / 100).toFixed(2)}</p>}
            </div>
            
    </div>
     
    )

}

export default ShoppingCart;