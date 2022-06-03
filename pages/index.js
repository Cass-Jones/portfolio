import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import { Router } from "next/router";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Portfolio | Cass Jones</title>
        <meta
          name="description"
          content="The development portfolio of Cass Jones"
        />
        <link rel="icon" href="/favicon.ico" />
        {/* Global site tag (gtag.js) - Google Analytics  */}

        {/* IDK why this isn't working? */}
        {/* <script async src="https://www.googletagmanager.com/gtag/js?id=G-DB8MJQ54T0"></script>
        <script>
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments)}
          gtag('js', new Date());

          gtag('config', 'G-DB8MJQ54T0');
        </script> */}
      </Head>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" href="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/bio">
                  Bio
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Projects
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link className="dropdown-item" href="/projects">
                      All Projects
                    </Link>
                  </li>
                  <hr className="dropdown-divider" />
                  <li>
                    <Link className="dropdown-item" href="/projects/a">
                      Project A
                    </Link>
                  </li>

                  <li>
                    <Link className="dropdown-item" href="/projects/b">
                      Project B
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link disabled"
                  href="#"
                  tabIndex="-1"
                  aria-disabled="true"
                >
                  Disabled
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <Link href="https://nextjs.org">Next.js!</Link>
        </h1>

        <p className={styles.description}>
          Get started by editing{" "}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <Link href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
          </Link>

          <Link href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
          </Link>

          <Link
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
          </Link>

          <Link
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
          </Link>
        </div>
      </main>

      <footer className={styles.footer}>
        <Link
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
        </Link>
      </footer>
    </div>
  );
}
