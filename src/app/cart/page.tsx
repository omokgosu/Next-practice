'use client'

import {age,name} from './data'

export default function Cart() {

  let 장바구니: string[] = ['Tomatos','Pasta'];

  return (
    <div>
      <h4 className="title">Cart</h4>
      <CartItem 작명={장바구니[0]}></CartItem>
      <CartItem 작명={장바구니[1]}></CartItem>
      <Banner content='롯데카드'/>
      <Button color='blue'></Button>
    </div>
  )
} 

function Button(props:any){

  return (
    <button style={{backgroundColor: props.color}} type="button">버튼</button>
  )
}

function Banner(props:any){

  return (
    <h5>{props.content} 결제 행사중</h5>
  )
}

function CartItem(props:any){

  return (
    <div className="cart-item">
        <p>{props.작명}</p>
        <p>$40</p>
        <p>1개</p>
    </div>
  )
}