import React from 'react'
import { shallow } from 'enzyme'
import Cart from './Cart'
import Product from './Product'

const setup = (total, products = []) => {
  const actions = {
    onCheckoutClicked: jest.fn(),
    onRemoveClicked: jest.fn()
  }

  const component = shallow(
    <Cart products={products} total={total} {...actions} />
  )

  return {
    component: component,
    actions: actions,
    button: component.find('.carrinho__checout'),
    products: component.find(Product),
    em: component.find('em'),
    p: component.find('p')
  }
}

describe('Cart component', () => {
  it('should display total', () => {
    const { p } = setup('76')
    expect(p.text()).toMatch(/^Total: R\$76/)
  })

  it('should display add some products message', () => {
    const { em } = setup()
    expect(em.text()).toMatch(/^Adicione produtos ao seu carrinho!/)
  })

  describe('when given product', () => {
    const product = [
      {
        id: 1,
        title: 'Product 1',
        price: 9.99,
        quantity: 1
      }
    ]

    it('should render products', () => {
      const { products } = setup('9.99', product)
      const props = {
        title: product[0].title,
        price: product[0].price,
        quantity: product[0].quantity
      }

      expect(products.at(0).props()).toEqual(props)
    })

    it('should call checkout action on button click', () => {
      const { button, actions } = setup('9.99', product)
      button.simulate('click')
      expect(actions.onCheckoutClicked).toBeCalled()
    })

    it('should call remove action on button click', () => {
      const { button, actions } = setup('9.99', product)
      button.simulate('click')
      expect(actions.onCheckoutClicked).toBeCalled()
    })
  })
})
