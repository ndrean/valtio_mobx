import React, { useEffect, useState } from 'react';

import { fetchUsers } from './fetchUsers';
import { Users } from './user';

const Loader = () => <p>Loading...</p>;

export default function RComponent() {
  const [users, setUsers] = useState(undefined);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUsers().then((data) => setUsers(<Users data={data} />));
    setLoading(false);
  }, []);

  return <>{loading ? <Loader /> : <div>{users}</div>}</>;
}
