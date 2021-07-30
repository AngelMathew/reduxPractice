import classes from './Layout.module.scss';
import { classicNameResolver } from "typescript";
import Itemimage from "../../images/itemImage.jpg";
import Card from "../Card/Card";
import ShoppingCart from '../ShoppingCart/ShoppingCart';
import { useSelector } from 'react-redux';
import {RootState} from "../../Store/index";
import axios from 'axios';
import React from 'react';
import {useEffect,useState} from 'react';


const Layout=()=>{
    const viewCart=useSelector((state:RootState)=>state.counterCart.showCart)
    
  //   const data_1 = [
  //     {  
  //           id:1,
  //         title:  "Miffy Bunny",
  //         price:  4.95,
  //         image:  {Itemimage},
  //     },
  //     {
  //   id:2,
  //         title:  "Snowball",
  //         price:  8,
  //         image:  {Itemimage},
  //     },
  //     {
  //   id:3,
  //         title:  "Fudge",
  //         price:  12,
  //         image:  {Itemimage},
  //     },
  // ]
  //   interface IPost {
  //       id: number;
  //       title?: string;
  //       price: number;
  //       description: string;
  //       category:string;
  //       image:string
  //     }
    
    

  //   const defaultPosts: IPost[] = [];
  // const [posts, setPosts]: [IPost[], (posts: IPost[]) => void] = React.useState(
  //   defaultPosts
  // );

  // const [error, setError]: [string, (error: string) => void] = React.useState(
  //   ''
  // );
  //  useEffect(() => {
  //       axios
  //         .get<any[]>('https://fakestoreapi.com/products?limit=3', {
  //           headers: {
  //             'Content-Type': 'application/json',
  //           },
            
  //         })
  //         .then((response) => {
  //           setPosts(response.data);
  //           console.log("response",response.data)
  //           console.log("posts",posts)
  //           // setLoading(false);
  //         })
  //         .catch((ex) => {
  //           let error = axios.isCancel(ex)
  //           console.log("error",error)
  //           // setError(error);
  //           // setLoading(false);
  //         });
  //     }, []);

    return(
        <main>
            <section className={classes.section}>

            {viewCart ? <ShoppingCart/>:  <Card/>}
              
        
     
        
      </section>

        </main>
    )

}

export default Layout;