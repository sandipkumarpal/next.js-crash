import react, { useState, useLayoutEffect } from "react";
import Link from "next/link";

const Articles = () => {
  const [users, setUsers] = useState();

  useLayoutEffect(() => {
    const res = fetch("https://reqres.in/api/users")
      .then((response) => response.json())
      .then((json) => setUsers(json));
  }, []);

  return (
    <div>
      {users &&
        users.data &&
        users.data.map((u) => (
          <div key={u.id}>
            <Link
              href={{
                pathname: "/articles/[id]",
                query: { id: u.id }
              }}
            >
              {u.first_name}
            </Link>
          </div>
        ))}
    </div>
  );
};

export default Articles;
