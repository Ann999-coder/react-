import {RESTAURANTS_LIST_REQUEST,
    RESTAURANTS_LIST_SUCCESS,
    RESTAURANTS_LIST_FAIL} from '../constants/restaurantConstants'

import axios from 'axios'

export const listRestaurants =()=> async(dispatch)=>{
    try{
        dispatch({type:RESTAURANTS_LIST_REQUEST})

        const {data}=await axios.get('restaurants.json')

        dispatch({type:RESTAURANTS_LIST_SUCCESS,payload:data.restaurants})

    }catch(error){
        dispatch({type:RESTAURANTS_LIST_FAIL,payload:error})
    }
}