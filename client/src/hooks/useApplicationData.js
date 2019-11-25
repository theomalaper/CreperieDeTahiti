import { useEffect, useReducer } from 'react';
import axios from 'axios';

const SET_HOMEPAGE_DATA = 'SET_HOMEPAGE_DATA';

const reducer = (state, action) => {
  const actions = {
    SET_HOMEPAGE_DATA: {
      ...state,
      products: action.products
    }
  }; 

  if(!actions[action.type]) {
    throw new Error('Type of action not found')
  }
  return actions[action.type];
};

const useApplicationData = () => {
  const [state, dispatch] = useReducer(reducer, {
    products: {},
  })

  useEffect(() => {
    axios.get('/products')
      .then(result => {
        dispatch({ type: SET_HOMEPAGE_DATA, products: result.data })
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  return {
    state,
    dispatch
  };
};

export default useApplicationData;