import {
  ADD_TO_CART,
  CHECKOUT_REQUEST,
  CHECKOUT_FAILURE,
  REMOVE_FROM_CART
} from '../constants/ActionTypes'

const initialState = {
  addedIds: [],
  quantityById: {}
}

// eslint-disable-next-line
const removeFromArrayById = (id, array) => {
  // Utilize essa função para remover o item de addedIds
  if (array.includes(id)) {
    let newArray = [...array];
    newArray.splice(newArray.indexOf(id), 1);
    return newArray;
  } else {
    return array;
  }
}

const addedIds = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      if (state.addedIds.indexOf(action.productId) !== -1) {
        return state.addedIds
      }
      return [ ...state.addedIds, action.productId ]
    case REMOVE_FROM_CART:
      // TODO

      // if (state.quantityById[action.productId] === 1) {
      //   return removeFromArrayById(action.productId, state.addedIds);
      // }
      // return state.addedIds;

// eslint-disable-next-line
    default:
      return state.addedIds
  }
}

const quantityById = (state = initialState, action) => {
  const { productId } = action
  switch (action.type) {
    case ADD_TO_CART:
      return { ...state.quantityById,
        [productId]: (state.quantityById[productId] || 0) + 1
      }

    case REMOVE_FROM_CART:
      // TODO

      // if (state.quantityById[productId] === 1) {
      //   let newState = {...state.quantityById};
      //   delete(newState[productId]);
      //   return newState;
      // } else {
      //   return { ...state.quantityById,
      //     [productId]: state.quantityById[productId] - 1
      //   }
      // }

// eslint-disable-next-line
    default:
      return state.quantityById
  }
}

export const getQuantity = (state, productId) =>
  state.quantityById[productId] || 0

export const getAddedIds = state => state.addedIds

const cart = (state = initialState, action) => {
  switch (action.type) {
    case CHECKOUT_REQUEST:
      return initialState
    case CHECKOUT_FAILURE:
      return action.cart
    default:
      return {
        addedIds: addedIds(state, action),
        quantityById: quantityById(state, action)
      }
  }
}

export default cart
