import Link from "next/link";
const Navbar = () => {
  return (
    <nav>
      <Link href="/">صفحه اصلی</Link>
      <Link href="/dash">درباره ما</Link>
      <Link href="/test">تماس با ما</Link>
    </nav>
  );
};

export default Navbar;
