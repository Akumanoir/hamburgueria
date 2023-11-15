import { menuItems } from "../mock/menuItems"
// import { useLoaderData } from "react-router-dom"

export function Menu() {

  let menu:any;
  if (menuItems.length) {
    menuItems.map((items: {image:string, name:string, value:number}) => { 
      menu += (
        <button>
          <div>
            <img src={items.image} alt="" />
          </div>
          <div>
            <div>
              <h2>{items.name}</h2>
            </div>
            <div>
              <span>{items.value}</span>
            </div>
          </div>
        </button>
      );
    })
  } else {
    menu = <p>Desculpe, não temos nada disponível!</p>
  }

  return (
    <>
      <section>
        { menu }
      </section>
    </>
  )
}