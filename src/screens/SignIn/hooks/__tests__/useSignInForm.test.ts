import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { useSignInForm } from '../useSignInForm';

jest.mock('@hookform/resolvers/zod', () => ({ zodResolver: jest.fn(() => 'resolver') }));
jest.mock('react-hook-form', () => ({ useForm: jest.fn() }));
jest.mock('@locales', () => ({ useTranslation: () => ({ t: (k: string) => k }) }));

describe('useSignInForm', () => {
  it('provides form utilities', () => {
    const handleSubmit = jest.fn();
    const control = {};
    const errors = { email: { message: 'error' } };
    (useForm as jest.Mock).mockReturnValue({ handleSubmit, control, formState: { errors } });

    const result = useSignInForm();
    expect(zodResolver).toHaveBeenCalled();
    expect(result.handleSubmit).toBe(handleSubmit);
    expect(result.control).toBe(control);
    expect(result.errors).toBe(errors);
  });
});
