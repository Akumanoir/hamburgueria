import { useRouteError } from "react-router-dom"

export function ErrorPage() {

  const error:any = useRouteError();
  console.log(error);

  return (
    <div>
      <h1>Opa!</h1>
      <p>Desculpe, um erro inexperado aconteceu</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  )
}