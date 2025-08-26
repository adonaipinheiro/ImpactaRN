import { TouchableOpacity } from 'react-native';

import renderer, { act } from 'react-test-renderer';

import { SignUp } from '@screens/SignUp';
import { useSignUp, useSignUpForm } from '@screens/SignUp/hooks';

import { Input } from '@components';

jest.mock('@screens/SignUp/hooks', () => ({
  useSignUp: jest.fn(),
  useSignUpForm: jest.fn(),
}));

type RenderArgs = { field: { onChange: () => void; value: string } };

jest.mock('react-hook-form', () => ({
  Controller: ({ render }: { render: (args: RenderArgs) => unknown }) =>
    render({ field: { onChange: jest.fn(), value: '' } }),
}));

describe('SignUp screen', () => {
  const onSubmit = jest.fn();
  const handleGoBack = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
    (useSignUp as jest.Mock).mockReturnValue({
      t: (k: string) => k,
      onSubmit,
      isPending: false,
      handleGoBack,
    });
    (useSignUpForm as jest.Mock).mockReturnValue({
      errors: {},
      handleSubmit: (fn: () => unknown) => fn,
      control: {},
    });
  });

  it('renders form fields and handles actions', () => {
    let component: renderer.ReactTestRenderer;
    act(() => {
      component = renderer.create(<SignUp />);
    });

    const inputs = component!.root.findAllByType(Input);
    expect(inputs).toHaveLength(4);
    expect(inputs[0].props.placeholder).toBe('signUpScreenUserInput');

    const buttons = component!.root.findAllByType(TouchableOpacity);
    expect(buttons).toHaveLength(2);

    act(() => buttons[0].props.onPress());
    expect(onSubmit).toHaveBeenCalled();

    act(() => buttons[1].props.onPress());
    expect(handleGoBack).toHaveBeenCalled();
  });
});

