import { menuItems } from "../mock/menuItems" 
// import { useLoaderData } from "react-router-dom"

export function Menu() {

  return (
    <section>
      {menuItems.length ? (
        <>
          {menuItems.map((items) => (
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
          ))}
        </>
      ) : (
        <p>Desculpe, não temos nada disponível!</p>
      )}
    </section>
  );
}