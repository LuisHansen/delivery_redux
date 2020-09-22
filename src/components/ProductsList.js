import React from 'react'
import PropTypes from 'prop-types'

const ProductsList = ({ title, children }) => (
  <div className="lista_de_produtos">
    <h3 className="lista_de_produtos__titulo">{title}</h3>
    <div className="lista_de_produtos__lista">{children}</div>
  </div>
)

ProductsList.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string.isRequired
}

export default ProductsList
