import classes from './Header.module.scss';
import {useSelector } from 'react-redux';
import {RootState} from "../../Store/index";
import {cartActions} from "../../Store/cart";
import {useDispatch} from "react-redux";

const Header=()=>{

    const itemsInCart=useSelector((state:RootState)=>state.counterCart.counter)
    const itemsInCart1=useSelector((state:RootState)=>state.counterCart.cartItems)
   
    const dispatch=useDispatch()

    const showCartHandler=()=>{
        dispatch(cartActions.showCart())
    }
    return(
        <header className={classes.header}>
            <div className={classes.headerContent}>
             <h2>ShopMe</h2>
      <nav>
        <ul>
          {/* <li>
            <a href='/'>Reviews</a>
          </li> */}
          <li>
            <a href='/'>Log in</a>
          </li>
          <li>
            <button onClick={showCartHandler} className={classes.primaryButton}>View Cart <div className={classes.cartCircle}>{itemsInCart}</div></button>
           
          </li>
        </ul>
      </nav>
      </div>

        </header>
    )

}

export default Header;