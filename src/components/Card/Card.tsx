import classes from './Card.module.scss';
import Itemimage from "../../images/itemImage.jpg";
import {cartActions} from "../../Store/cart";
import {useDispatch} from "react-redux";
import axios from 'axios';
import {useEffect,useState} from 'react';

const Card=()=>{
    // const [posts,setData]=useState([...props.items])

    interface IPost {
        id: number;
        title?: string;
        price: number;
        description: string;
        category:string;
        image:string
      }
    
    

    const defaultPosts: IPost[] = [];
  const [posts, setPosts]: [IPost[], (posts: IPost[]) => void] = useState(
    defaultPosts
  );

  const [error, setError]: [string, (error: string) => void] = useState(
    ''
  );
   useEffect(() => {
        axios
          .get<any[]>('https://fakestoreapi.com/products?limit=12', {
            headers: {
              'Content-Type': 'application/json',
            },
            
          })
          .then((response) => {
            setPosts(response.data);
            console.log("response",response.data)
            console.log("posts",posts)
            // setLoading(false);
          })
          .catch((ex) => {
            let error = axios.isCancel(ex)
            console.log("error",error)
            // setError(error);
            // setLoading(false);
          });
      }, []);

    const dispatch=useDispatch()

    const addToCardHandler=(item:any)=>{
        dispatch(cartActions.increment())
        dispatch(cartActions.incrementedItems(item))
    }


    const card=posts.map((item,index)=>{
        return(
        <div className={classes.card} key={item.id}>
        <img src={item.image}></img>
        
        <div className={classes.cardInfo}>
            <p><strong>{item.title}</strong></p>
            <span>${item.price}</span>
           
        </div>

        <button onClick={()=>addToCardHandler(item)} className={classes.secondaryButton}>Add to cart</button>

    </div>)
    })

    return(
        <> {card}</>
       
       
        
                // <div className={classes.card}>
                //     <img src={Itemimage}></img>
                    
                //     <div className={classes.cardInfo}>
                //         <p>Miffy Bunny</p>
                //         <span>$4.90</span>
                //     </div>
                //     <button onClick={addToCardHandler} className={classes.secondaryButton}>Add to cart</button>

                // </div>
        
     
    )

}

export default Card;