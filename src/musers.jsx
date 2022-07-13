import React, { useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import Loader from './loader';

export default observer(function MComponent({ store }) {
  const [load, setLoad] = useState(true);

  useEffect(() => {
    store.fetchMbxUsers();
    setLoad(false);
  }, [store]);

  return <>{load ? <Loader /> : <MUsers data={store.users} />}</>;
});

const MUsers = observer(({ data }) => (
  <>{data && data.map((user) => <MUser key={user.id} user={user} />)}</>
));

const MUser = observer(({ user }) => <p>{user.email}</p>);
