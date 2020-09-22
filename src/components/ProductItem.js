import React from 'react'
import PropTypes from 'prop-types'
import Product from './Product'

const ProductItem = ({ product, onAddToCartClicked }) => (
  <div className="produto_container">
    <Product
      title={product.title}
      price={product.price}
      quantity={product.inventory} />
    <div
      className={"produto__adicionar " + (product.inventory > 0 ? '' : 'disabled')}
      onClick={onAddToCartClicked}>
      {product.inventory > 0 ? 'Adicionar ao carrinho' : 'Esgotado'}
    </div>
  </div>
)

ProductItem.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    inventory: PropTypes.number.isRequired
  }).isRequired,
  onAddToCartClicked: PropTypes.func.isRequired
}

export default ProductItem
