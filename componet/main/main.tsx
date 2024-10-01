import React from "react";
import Button from "../../componet/button/dokmeh";
import Link from "next/link";
const Main = () => {
  return (
    <>
      <Link href={"/login"}>
        <Button>{"log in"}</Button>
      </Link>
    </>
  );
};

export default Main;
