import { useMutation } from '@tanstack/react-query';

import { coordinator } from '@routes';
import { productsGetRequest, addNewUserRequest, authRequest } from '@services';
import { useAuthStore, useUserStore } from '@store';

import { useSignUp } from '../useSignUp';

jest.mock('@tanstack/react-query', () => ({
  useMutation: jest.fn(),
}));
jest.mock('@routes', () => ({ coordinator: { goBack: jest.fn() } }));
jest.mock('@services', () => ({
  productsGetRequest: jest.fn().mockResolvedValue([]),
  addNewUserRequest: jest.fn().mockResolvedValue({ email: 'e', password: 'p', id: 1, name: 'n' }),
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

describe('useSignUp', () => {
  it('handles submit and navigation', async () => {
    const { onSubmit, handleGoBack } = useSignUp();
    await onSubmit({ email: 'e', password: 'p', name: 'n', confirm_password: 'p' });
    expect(productsGetRequest).toHaveBeenCalled();
    expect(addNewUserRequest).toHaveBeenCalled();
    expect(authRequest).toHaveBeenCalledWith({ email: 'e', password: 'p' });
    expect(setTokens).toHaveBeenCalledWith({ access_token: 'a', refresh_token: 'b' });
    expect(setUser).toHaveBeenCalledWith({ email: 'e', password: 'p', id: 1, name: 'n' });
    handleGoBack();
    expect(coordinator.goBack).toHaveBeenCalled();
  });

  it('returns pending when any mutation is pending', () => {
    useMutationMock
      .mockReturnValueOnce({ mutateAsync: jest.fn(), isPending: true })
      .mockReturnValue({ mutateAsync: jest.fn(), isPending: false });
    const { isPending } = useSignUp();
    expect(isPending).toBe(true);
  });
});
