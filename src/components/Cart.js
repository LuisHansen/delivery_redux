import React from 'react'
import PropTypes from 'prop-types'
import Product from './Product'

const Cart  = ({ products, total, onCheckoutClicked, onRemoveClicked }) => {
  const hasProducts = products.length > 0
  const nodes = hasProducts ? (
    products.map(product =>
      <div key={product.id} className="produto__carrinho">
        <div
          className="remover_produto"
          id={product.id}
          onClick={() => onRemoveClicked(product.id)}>X</div>
        <div className="produto__carrinho__quantidade">
          {
            // TODO
            `1`
          }
        </div>
        <Product
          title={product.title}
          price={product.price}
          quantity={product.quantity}
          key={product.id}
        />
      </div>
    )
  ) : (
    <em>Adicione produtos ao seu carrinho!</em>
  )

  return (
    <div className="carrinho">
      <h3 className="carrinho__titulo">Your Cart</h3>
      <div className="carrinho__conteudo">
        <div className="carrinho__produtos">{nodes}</div>
        <p className="carrinho__total">Total: R${total}</p>
      </div>
      {hasProducts &&
        <div className="carrinho__checout" onClick={onCheckoutClicked}>
          Fechar pedido
        </div>
      }
    </div>
  )
}

Cart.propTypes = {
  products: PropTypes.array,
  total: PropTypes.string,
  onCheckoutClicked: PropTypes.func
}

export default Cart
