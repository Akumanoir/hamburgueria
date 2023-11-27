import { Outlet } from "react-router-dom";
import { HeaderComponent } from "./components/HeaderComponent";
import { FooterComponent as Footer } from "./components/FooterComponent";

export default function App() {

  return (
    <>
      <HeaderComponent />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
