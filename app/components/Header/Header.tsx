import Link from "next/link";

import styles from "./Header.module.scss";

const Header = () => {
  return (
    <div className={styles.wrapper}>
      <header className={styles.container}>
        <Link href="/">Jayla ellul</Link>
        <nav className={styles.nav}>
          <Link href="/about">About</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/projects">Projects</Link>
        </nav>
      </header>
    </div>
  );
};

export default Header;
