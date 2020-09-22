import React from 'react'
import ProductsContainer from './ProductsContainer'
import CartContainer from './CartContainer'

import './styles/app.css';

const App = () => (
  <div className="delivery_main">
    <h2 className="titulo">Delivery de comida</h2>
    <ProductsContainer />
    <CartContainer />
  </div>
)

export default App
