jest.mock('../navigation', () => ({ navigation: { replace: jest.fn(), push: jest.fn(), goBack: jest.fn() } }));
jest.mock('../../stack/MainStack.routes', () => ({
  MainStackScreenNames: { SignIn: 'SignIn', SignUp: 'SignUp', Dashboard: 'Dashboard' },
}));

import { MainStackScreenNames } from '../../stack/MainStack.routes';
import { coordinator } from '../coordinator';
import { navigation } from '../navigation';

describe('coordinator', () => {
  it('navigates to screens', () => {
    coordinator.gotToSignIn();
    expect(navigation.replace).toHaveBeenCalledWith(MainStackScreenNames.SignIn);

    coordinator.gotToSignUp();
    expect(navigation.push).toHaveBeenCalledWith(MainStackScreenNames.SignUp);

    coordinator.gotToDashboard();
    expect(navigation.replace).toHaveBeenCalledWith(MainStackScreenNames.Dashboard);

    coordinator.goBack();
    expect(navigation.goBack).toHaveBeenCalled();
  });
});
