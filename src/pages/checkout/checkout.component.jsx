import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';

import {
  selectCartItems,
  selectCartTotal
} from '../../redux/cart/cart.selectors';

import { CheckoutPageContainer, 
         CheckoutHeaderContainer,
         HeaderBlockContainer,
         TotalContainer,
         TestWarningContainer
        } from './checkout.styles';


const CheckoutPage = ({ cartItems, total }) => (
  <CheckoutPageContainer>
    <div className='checkout-header'>
      <CheckoutHeaderContainer>
        <HeaderBlockContainer>Product</HeaderBlockContainer>
      </CheckoutHeaderContainer>
      <HeaderBlockContainer className='header-block'>
        <span>Description</span>
      </HeaderBlockContainer>
      <HeaderBlockContainer className='header-block'>
        <span>Quantity</span>
      </HeaderBlockContainer>
      <HeaderBlockContainer className='header-block'>
        <span>Price</span>
      </HeaderBlockContainer>
      <HeaderBlockContainer className='header-block'>
        <span>Remove</span>
      </HeaderBlockContainer>
    </div>
    {cartItems.map(cartItem => (
      <CheckoutItem key={cartItem.id} cartItem={cartItem} />
    ))}
    <TotalContainer> TOTAL: ${total} </TotalContainer>
    <TestWarningContainer className='test-warning'>
     *Please use the following test credit card for payments*
     <br />
     4242 4242 4242 4242 - Exp: 12/20 - CVV: 123
    </TestWarningContainer>
    <StripeCheckoutButton price={total} />
  </CheckoutPageContainer>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal
});

export default connect(mapStateToProps)(CheckoutPage);