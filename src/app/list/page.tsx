'use client'

import { useState } from 'react';

export default function List() {
  
    let 상품 :string[] = ['Tomates','Pasta','Coconut']
    let [수량, 수량변경] = useState<number[]>([0,0,0])

    return (
      <div>
        <h4 className="title">상품목록</h4>
        {
          상품.map((el,i)=>{
            return (
              <div key={el} className='food'>
                <img src={`/images/food${i}.png`} alt="" />
                <h4>{el} $40</h4>
                <span>{수량[i]}</span>
                <button onClick={()=>{
                  let arr = [...수량];
                  arr[i]++
                  수량변경(arr)
                }}>+</button>
                <button onClick={()=>{
                  let arr = [...수량];
                  arr[i]--
                  수량변경(arr)
                }}>-</button>
              </div>
            )
          })
        }
      </div>
    )
}
