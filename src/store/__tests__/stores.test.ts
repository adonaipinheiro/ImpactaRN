import { useAuthStore } from '../useAuthStore';
import { useUserStore } from '../useUserStore';

import type { AuthResponseType, AddNewUserResponseType } from '@services';

describe('useAuthStore', () => {
  beforeEach(() => {
    useAuthStore.setState({ tokens: null });
  });

  it('sets and clears tokens', () => {
    const { setTokens, setAccessToken, setRefreshToken, clear } = useAuthStore.getState();
    const tokens: AuthResponseType = { access_token: 'a', refresh_token: 'b' };
    setTokens(tokens);
    setAccessToken('c');
    setRefreshToken('d');
    expect(useAuthStore.getState().tokens).toEqual({ access_token: 'c', refresh_token: 'd' });
    clear();
    expect(useAuthStore.getState().tokens).toBeNull();
  });
});

describe('useUserStore', () => {
  beforeEach(() => {
    useUserStore.setState({ user: null });
  });

  it('manages user data', () => {
    const { setUser, updateUser, setAvatar, setRole, clear } = useUserStore.getState();
    const user: AddNewUserResponseType = { email: 'a', password: 'b', id: 1, name: 'c', role: 'admin', avatar: 'img' };
    setUser(user);
    updateUser({ name: 'd' });
    setAvatar('img2');
    setRole('user');
    expect(useUserStore.getState().user).toEqual({ email: 'a', password: 'b', id: 1, name: 'd', role: 'user', avatar: 'img2' });
    clear();
    expect(useUserStore.getState().user).toBeNull();
  });
});
