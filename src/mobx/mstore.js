import { observable, runInAction } from 'mobx';
import { fetchUsers } from '../utils/fetchUsers';

// central state with attributes and actions

export const mStore = observable({
  users: null,
  fetchMbxUsers: async () => {
    const response = await fetchUsers();
    runInAction(() => (mStore.users = response));
  },
  // using generators
  // *fetchMbxUsers() {
  // const response = yield fetchUsers();
  // myStore.users = response;
  // }
});

// export const loader = observable({
//   loading: false,
// });
