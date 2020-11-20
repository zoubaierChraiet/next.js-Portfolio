import Layout from "../components/Layout";

function post() {
  return (
    <Layout>
      <div style={{ width: "80%", margin: "auto" }}>
        <h1>React js</h1>
        <p>
          React makes it painless to create interactive UIs. Design simple views
          for each state in your application, and React will efficiently update
          and render just the right components when your data changes.
          Declarative views make your code more predictable and easier to debug.
        </p>
      </div>
    </Layout>
  );
}

export default post;
