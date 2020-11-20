import Link from "next/link";
import Router from "next/router";
import nprog from "nprogress";

Router.onRouteChangeStart = url => {
  nprog.start();
};

Router.onRouteChangeComplete = () => {
  nprog.done();
};

function Layout({ children, title }) {
  return (
    <div className="root">
      <header className="header">
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
        <Link href="/hireme">
          <a>Hireme</a>
        </Link>
        <Link href="/blog">
          <a>Blog</a>
        </Link>
      </header>
      <p>{title}</p>
      <div>{children}</div>
      <footer className="footer">&copy; {new Date().getFullYear()}</footer>
      <style jsx>{`
        .root {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
        }
        .header {
          width: 100%;
          display: flex;
          padding: 23px 0;
          background: grey;
          justify-content: space-around;
        }
        .footer {
          padding: 1em;
        }
      `}</style>
      <style global jsx>{`
        body : {
          margin: 0;
        }
      `}</style>
    </div>
  );
}

export default Layout;
