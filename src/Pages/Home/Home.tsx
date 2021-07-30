import classes from './Home.module.scss';
import Header from "../../components/Header/Header";
import Layout from "../../components/Layout/Layout";
import { Fragment } from 'react';
import ShoppingCart from '../../components/ShoppingCart/ShoppingCart';
import { useSelector } from 'react-redux';
import {RootState} from "../../Store/index";

const Home=()=>{
    let slideClass = [classes.home];
    
    const viewCart=useSelector((state:RootState)=>state.counterCart.showCart)
   
      
    return(
        <Fragment>
            
            <Header/>
      
            
            <Layout/>
          
        </Fragment>
       
    )

}

export default Home;