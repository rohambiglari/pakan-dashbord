import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import CheckLogIn from "../../../componet/AddFormLogIn/logInForm";
import HandleSuccessLogIn from "../../../componet/AddFormLogIn/handlesuccess/handlesuccess";
export default function LogIn() {
  const allCookies = cookies();
  const token = allCookies.get("token");

  if (token) {
    redirect("/logOut");
  } else if (!token) {
    return <CheckLogIn />;
  }
}
