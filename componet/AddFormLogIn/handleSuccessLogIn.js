import NavarDashbor from "./navbarhandlelogin/navbarhandlelogin";
import Header from "./header/header";
import { ItemProvider } from "../usecontext/usecontext";
const HandleSuccessLogIn = () => (
  <ItemProvider>
    <NavarDashbor />
    <Header />
  </ItemProvider>
);

export default HandleSuccessLogIn;
