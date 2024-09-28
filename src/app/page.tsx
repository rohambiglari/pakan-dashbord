import Link from "next/link";
import HtmlTag from "../../componet/htmlTag/htmlTag";
import LogIn from "../../componet/AddFormLogIn/logInForm";
import Layout from "../../componet/layout/layout";
import Main from "../../componet/main/main";
export default function Home() {
  return (
    <div>
      {/* <Layout /> */}
      <HtmlTag></HtmlTag>
      <Main />
    </div>
  );
}
