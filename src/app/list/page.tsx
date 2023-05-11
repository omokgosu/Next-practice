import Image from "next/image"

export default function List() {

    let 상품 : string[] = ['Tomatos 1 $40' , 'Pasta 2 $40' , 'Coconut 3 $40']; 
    console.log(상품);

    return (
      <div>
        <h4 className="title">상품목록</h4>
        {
          상품.map((el,i) =>{ 
            return( 
                <div key={el} className="food">
                  <h4>{el}</h4>
                </div>
              )
            }
          )
        }
      </div>
    )
  }
  