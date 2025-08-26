import { useMutation } from '@tanstack/react-query';

import { coordinator } from '@routes';
import { productsGetRequest, authGetUserRequest, authRequest } from '@services';
import { useAuthStore, useUserStore } from '@store';

import { useSignIn } from '../useSignIn';

jest.mock('@tanstack/react-query', () => ({
  useMutation: jest.fn(),
}));
jest.mock('@routes', () => ({ coordinator: { gotToSignUp: jest.fn() } }));
jest.mock('@services', () => ({
  productsGetRequest: jest.fn().mockResolvedValue([]),
  authGetUserRequest: jest.fn().mockResolvedValue({ id: 1 }),
  authRequest: jest.fn().mockResolvedValue({ access_token: 'a', refresh_token: 'b' }),
}));
jest.mock('@locales', () => ({ useTranslation: () => ({ t: (k: string) => k }) }));
jest.mock('@store', () => ({
  useAuthStore: jest.fn(),
  useUserStore: jest.fn(),
}));

const setTokens = jest.fn();
const setUser = jest.fn();
const useMutationMock = useMutation as unknown as jest.Mock;

beforeEach(() => {
  jest.clearAllMocks();
  useMutationMock.mockImplementation(({ mutationFn, onSuccess }) => ({
    mutateAsync: async (params: unknown) => {
      const res = await mutationFn(params);
      if (onSuccess) {
        await onSuccess(res);
      }
      return res;
    },
    isPending: false,
  }));
  (useAuthStore as unknown as jest.Mock).mockImplementation((sel) => sel({ setTokens }));
  (useUserStore as unknown as jest.Mock).mockImplementation((sel) => sel({ setUser }));
});

describe('useSignIn', () => {
  it('handles submit and navigation', async () => {
    const { onSubmit, handleGoToSignUp } = useSignIn();
    await onSubmit({ email: 'a', password: 'b' });
    expect(productsGetRequest).toHaveBeenCalled();
    expect(authGetUserRequest).toHaveBeenCalledWith({ access_token: 'a', refresh_token: 'b' });
    expect(authRequest).toHaveBeenCalledWith({ email: 'a', password: 'b' });
    expect(setTokens).toHaveBeenCalledWith({ access_token: 'a', refresh_token: 'b' });
    expect(setUser).toHaveBeenCalledWith({ id: 1 });
    handleGoToSignUp();
    expect(coordinator.gotToSignUp).toHaveBeenCalled();
  });

  it('returns pending when any mutation is pending', () => {
    useMutationMock
      .mockReturnValueOnce({ mutateAsync: jest.fn(), isPending: true })
      .mockReturnValue({ mutateAsync: jest.fn(), isPending: false });
    const { isPending } = useSignIn();
    expect(isPending).toBe(true);
  });
});
