import react, { useState, useEffect } from "react";
import Link from "next/link";
import { GTM_DATA_PUSH_EVENT, GTM_PRODUCT_DETAILS_KEY } from "../config/gmt";
import useDataLayer from "../hooks/GMT/useDataLayer";
import TagManager from 'react-gtm-module'

const Articles = () => {
  const [users, setUsers] = useState();
  const setData = useDataLayer(GTM_PRODUCT_DETAILS_KEY)

  useEffect(() => {
    fetch("https://reqres.in/api/users")
      .then((response) => response.json())
      .then((json) => setUsers(json));
  }, []);

  const dataLayer = { event: GTM_DATA_PUSH_EVENT }

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
      <p>
        <Link
          href={{
            pathname: "/"
          }}
        >
          Back
        </Link>
        <button type="button" className="button" onClick={() => TagManager.dataLayer({ dataLayer })}>Just Click Only event fire</button>
        <button type="button" className="button" onClick={ () => setData({ code: 'Code', name: 'Name', desc: 'desc' }) }>Just Click Only data fire</button>
      </p>
    </div>
  );
};

export default Articles;
