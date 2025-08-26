import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { useSignUpForm } from '../useSignUpForm';

jest.mock('@hookform/resolvers/zod', () => ({ zodResolver: jest.fn(() => 'resolver') }));
jest.mock('react-hook-form', () => ({ useForm: jest.fn() }));
jest.mock('@locales', () => ({ useTranslation: () => ({ t: (k: string) => k }) }));

describe('useSignUpForm', () => {
  it('provides form utilities', () => {
    const handleSubmit = jest.fn();
    const control = {};
    const errors = { email: { message: 'error' } };
    (useForm as jest.Mock).mockReturnValue({ handleSubmit, control, formState: { errors } });

    const result = useSignUpForm();
    expect(zodResolver).toHaveBeenCalled();
    expect(result.handleSubmit).toBe(handleSubmit);
    expect(result.control).toBe(control);
    expect(result.errors).toBe(errors);
  });
});
