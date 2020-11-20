import Link from "next/link";
import Layout from "../components/Layout";

function blog() {
  return (
    <Layout title="My Blog">
      <ul>
        <li>
          <Link href="/post?title=react">
            <a>React.js</a>
          </Link>
        </li>
      </ul>
    </Layout>
  );
}

export default blog;
