import { useEffect, useState } from "react";
import Layout from "../components/Layout";

export default function About() {
  const [user, setUser] = useState(() => null);

  useEffect(async () => {
    const fetchedUser = await fetch(
      "https://api.github.com/users/zoubaierChraiet"
    );
    const data = await fetchedUser.json();
    setUser(data);
  }, []);

  return (
    <Layout title="About">
      {user ? (
        <div>
          <p> {user.name} </p>
          <img
            src={user.avatar_url}
            height="200px"
            alt="Me"
            style={{ borderRadius: "50%" }}
          />
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </Layout>
  );
}
