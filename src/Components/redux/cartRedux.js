import { AcUnitTwoTone } from '@mui/icons-material';
import {createSlice} from '@reduxjs/toolkit'

const cartSlice=createSlice({
    name:'cart',
    initialState:{
        products:[],
        quantity:0,
        total:0,
    },
    reducers:{
        addProduct:(state,action)=>{
                state.quantity+=1
                // state.products[0][action.payload.key][1]
                            // state.products.push([action.payload.key]=action.payload.data);
                state.products.push([action.payload.key]=action.payload.data);
                state.total+=action.payload.price*action.payload.data[1]
        },
        removeProduct:(state,action)=>{
          
            state.quantity-=1
       
         state.products=state.products.filter(x=>{
             if(x[2]==action.payload.id){
                 state.total-=x[1]*x[0]['price']
             }
              return x[2]!=action.payload.id
         })
        }
    }
})

export const {addProduct,removeProduct}=cartSlice.actions
export default cartSlice.reducer;