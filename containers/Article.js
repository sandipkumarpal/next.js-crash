import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import useProductDetailsData from '../hooks/GMT/useProductDetailsData'

const Article = () => {
  const router = useRouter();
  const { id } = router.query;
  const [user, setUser] = useState();

  useEffect(() => {
    if (!id) {
      return;
    }
    const res = fetch(`https://reqres.in/api/users/${id}`)
      .then((response) => response.json())
      .then((json) => setUser(json.data));
  }, [id]);

  useProductDetailsData(user)

  return (
    <div>
      <p>{user && user.id}</p>
      <p>{user && user.email}</p>
      <p>{user && user.first_name}</p>
      <p>{user && user.last_name}</p>
      <p>
        <Link
          href={{
            pathname: "/articles"
          }}
        >
          Back
        </Link>
      </p>
      <p>
        <img
          // loader={myLoader}
          src={user && user.avatar}
          alt="Picture of the author"
          width={500}
          height={500}
        />
      </p>
    </div>
  );
};

export default Article;
