import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import logOut from "../pageLogOut/page";

export default function LogIn() {
  const allCookies = cookies();
  const token = allCookies.get("token");

  if (!token) {
    redirect("/login");
  } else if (token) {
    redirect("/pageLogOut");
  }
}
