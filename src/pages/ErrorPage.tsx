import { useRouteError } from "react-router-dom";

export function ErrorPage() {
  const error: any = useRouteError();
  console.log(error);

  return (
    <main
      className="w-screen h-screen bg-no-repeat bg-origin-border bg-center bg-black"
      style={{ backgroundImage: `url(https://http.cat/${error.status})` }}
    ></main>
  );
}
