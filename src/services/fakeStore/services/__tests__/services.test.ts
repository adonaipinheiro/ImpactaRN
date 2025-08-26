import { fakeStoreApi } from '../../api';
import { authRequest, authGetUserRequest } from '../auth';
import { productsGetRequest } from '../products';
import { addNewUserRequest } from '../users';

import type { AuthRequestType, AuthGetUserRequestType } from '../auth/types';
import type { AddNewUserRequestType } from '../users/types';

describe('fakeStore services', () => {
  beforeEach(() => {
    (fakeStoreApi.post as unknown as jest.Mock).mockReset?.();
    (fakeStoreApi.get as unknown as jest.Mock).mockReset?.();
      jest.spyOn(fakeStoreApi, 'post').mockResolvedValue({ data: 'ok' } as never);
      jest.spyOn(fakeStoreApi, 'get').mockResolvedValue({ data: 'ok' } as never);
  });

  it('authRequest posts to auth/login', async () => {
    const params: AuthRequestType = { email: 'a', password: 'b' };
    await authRequest(params);
    expect(fakeStoreApi.post).toHaveBeenCalledWith('auth/login', params);
  });

  it('authGetUserRequest gets profile with token', async () => {
    const params: AuthGetUserRequestType = { access_token: 'token' };
    await authGetUserRequest(params);
    expect(fakeStoreApi.get).toHaveBeenCalledWith('auth/profile', { headers: { Authorization: 'Bearer token' } });
  });

  it('addNewUserRequest posts to users', async () => {
    const params: AddNewUserRequestType = { email: 'a', password: 'b', name: 'c', role: 'admin', avatar: 'img' };
    await addNewUserRequest(params);
    expect(fakeStoreApi.post).toHaveBeenCalledWith('users', expect.objectContaining({ email: 'a' }));
  });

  it('productsGetRequest gets products', async () => {
    await productsGetRequest();
    expect(fakeStoreApi.get).toHaveBeenCalledWith('products');
  });
});
