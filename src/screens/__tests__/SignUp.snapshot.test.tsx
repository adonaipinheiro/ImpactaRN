import renderer from 'react-test-renderer';

import { SignUp } from '@screens/SignUp';
import { useSignUp, useSignUpForm } from '@screens/SignUp/hooks';

jest.mock('@screens/SignUp/hooks', () => ({
  useSignUp: jest.fn(),
  useSignUpForm: jest.fn(),
}));

describe('SignUp screen snapshot', () => {
  beforeEach(() => {
    (useSignUp as jest.Mock).mockReturnValue({
      t: (k: string) => k,
      onSubmit: jest.fn(),
      isPending: false,
      handleGoBack: jest.fn(),
    });
    (useSignUpForm as jest.Mock).mockReturnValue({
      errors: {},
      handleSubmit: (fn: () => unknown) => fn,
      control: {},
    });
  });

  it('matches snapshot', () => {
    const tree = renderer.create(<SignUp />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
