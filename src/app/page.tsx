export default function Home() {

  let name : string = 'park';
  let age : number = 20;
  let link : string = 'http://google.com'

  return (
    <div>
      <h4 className="title">애플 후레시 {age}</h4>
      <p className="title-sub">by dev Kim {name}</p>
      <a href={link}>구글링크</a>
    </div>
  )
}
