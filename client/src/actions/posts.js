import * as api from '../api';
import { FETCH_BY_SEARCH,FETCH_ALL, CREATE, UPDATE, DELETE, LIKE,FETCH_POST } from '../constants/actionTypes';
//Action Creators
export const getPosts=()=> async (dispatch) => {


    try{
       const data=await api.fetchPosts();
       dispatch({type:FETCH_ALL,payload:data});
    }
    catch(error)
    {
      console.log(error.message);
    }
} 

export const getPostsBySearch = (searchQuery) => async (dispatch) => {
    try {
     // dispatch({ type: START_LOADING });
      const { data: { data } } = await api.fetchPostsBySearch(searchQuery);
  
     dispatch({ type: FETCH_BY_SEARCH, payload:  data  });
     // dispatch({ type: END_LOADING });
    // console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
export const getPost=(id)=> async (dispatch)=> {
    try{
        const {data}=await api.fetchPosts(id);
        dispatch({type: FETCH_POST,payload:data});
    }
    catch(error){
     console.log(error);
    }
}

export const createPost =(post)=> async(dispatch)=>{
    try{
        const{data}=await api.createPost(post);
        dispatch({type:CREATE,payload:data});
    }
    catch(error){
        console.log(error);
    }
}
export const updatePost=(id,post)=> async(dispatch)=>{
    try{
        const {data}=await api.updatePost(id,post);
        dispatch({type:UPDATE,payload:data});
    }
    catch(error)
    {
       console.log(error);
    }
}
export const deletePost=(id)=> async (dispatch)=>{
    try{
        await api.deletePost(id);

        dispatch({type:DELETE,payload: id});
    }
    catch(error){
   console.log(error.message);
    }
}
export  const likePost =(id) =>async (dispatch)=>{
    try{
        const {data}=await api.likePost(id);
        dispatch({type:LIKE,payload:data});
    }
    catch(error){
      console.log(error);
    }
}
 