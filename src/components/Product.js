import React from 'react'
import PropTypes from 'prop-types'

const Product = ({ price, quantity, title }) => (
  <div className="produto">
  	<div className="produto__nome">{title}</div>
  	<div className="produto__preco">{`R$${price.toFixed(2)}`}</div>
  </div>
)

Product.propTypes = {
  price: PropTypes.number,
  quantity: PropTypes.number,
  title: PropTypes.string
}

export default Product
