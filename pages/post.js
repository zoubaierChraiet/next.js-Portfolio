import Layout from "../components/Layout";

function post({ url }) {
  console.log(url);
  return (
    <Layout>
      <p>React</p>
    </Layout>
  );
}

export default post;
