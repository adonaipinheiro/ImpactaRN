import { TouchableOpacity } from 'react-native';

import renderer, { act } from 'react-test-renderer';

import { SignIn } from '@screens/SignIn';
import { useSignIn, useSignInForm } from '@screens/SignIn/hooks';

import { Input } from '@components';

jest.mock('@screens/SignIn/hooks', () => ({
  useSignIn: jest.fn(),
  useSignInForm: jest.fn(),
}));

type RenderArgs = { field: { onChange: () => void; value: string } };

jest.mock('react-hook-form', () => ({
  Controller: ({ render }: { render: (args: RenderArgs) => unknown }) =>
    render({ field: { onChange: jest.fn(), value: '' } }),
}));

describe('SignIn screen', () => {
  const onSubmit = jest.fn();
  const handleGoToSignUp = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
    (useSignIn as jest.Mock).mockReturnValue({
      t: (k: string) => k,
      onSubmit,
      isPending: false,
      handleGoToSignUp,
    });
    (useSignInForm as jest.Mock).mockReturnValue({
      errors: {},
      handleSubmit: (fn: () => unknown) => fn,
      control: {},
    });
  });

  it('renders form fields and handles actions', () => {
    let component: renderer.ReactTestRenderer;
    act(() => {
      component = renderer.create(<SignIn />);
    });

    const inputs = component!.root.findAllByType(Input);
    expect(inputs).toHaveLength(2);
    expect(inputs[0].props.placeholder).toBe('signInScreenEmailInput');

    const buttons = component!.root.findAllByType(TouchableOpacity);
    expect(buttons).toHaveLength(2);

    act(() => buttons[0].props.onPress());
    expect(onSubmit).toHaveBeenCalled();

    act(() => buttons[1].props.onPress());
    expect(handleGoToSignUp).toHaveBeenCalled();
  });
});

