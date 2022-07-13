import React, { useEffect, useState } from 'react';
import { useSnapshot } from 'valtio';

import { usersStore } from './vstore';
import Loader from '../utils/loader';
import { Users } from '../utils/user';

export default function VComponent() {
  const { users } = useSnapshot(usersStore);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    usersStore.getUsers();
    setLoading(false);
  }, []);

  return <>{loading ? <Loader /> : <Users data={users} />}</>;
}
