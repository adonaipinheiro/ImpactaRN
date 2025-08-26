import renderer from 'react-test-renderer';

import { SignIn } from '@screens/SignIn';
import { useSignIn, useSignInForm } from '@screens/SignIn/hooks';

jest.mock('@screens/SignIn/hooks', () => ({
  useSignIn: jest.fn(),
  useSignInForm: jest.fn(),
}));

describe('SignIn screen snapshot', () => {
  beforeEach(() => {
    (useSignIn as jest.Mock).mockReturnValue({
      t: (k: string) => k,
      onSubmit: jest.fn(),
      isPending: false,
      handleGoToSignUp: jest.fn(),
    });
    (useSignInForm as jest.Mock).mockReturnValue({
      errors: {},
      handleSubmit: (fn: () => unknown) => fn,
      control: {},
    });
  });

  it('matches snapshot', () => {
    const tree = renderer.create(<SignIn />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
