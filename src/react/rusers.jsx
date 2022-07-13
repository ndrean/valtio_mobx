import React, { useEffect, useState } from 'react';

import { fetchUsers } from '../utils/fetchUsers';
import { Users } from '../utils/user';
import Loader from '../utils/loader';

export default function RComponent() {
  const [users, setUsers] = useState(undefined);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUsers().then((data) => setUsers(<Users data={data} />));
    setLoading(false);
  }, []);

  return <>{loading ? <Loader /> : <div>{users}</div>}</>;
}
