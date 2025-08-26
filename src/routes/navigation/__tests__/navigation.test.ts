import { StackActions, type NavigationContainerRef } from '@react-navigation/native';

import { navigation, navigationRef } from '../navigation';

describe('navigation helpers', () => {
    beforeEach(() => {
      navigationRef.current = {
        dispatch: jest.fn(),
        canGoBack: jest.fn().mockReturnValue(true),
        goBack: jest.fn(),
      } as unknown as NavigationContainerRef<unknown>;
      jest.clearAllMocks();
    });

  it('replace dispatches action', () => {
    navigation.replace('Home', { id: 1 });
    expect(StackActions.replace).toHaveBeenCalledWith('Home', { id: 1 });
    expect(navigationRef.current.dispatch).toHaveBeenCalledWith({ type: 'replace', to: 'Home', params: { id: 1 } });
  });

  it('push dispatches action', () => {
    navigation.push('Home');
    expect(StackActions.push).toHaveBeenCalledWith('Home', undefined);
    expect(navigationRef.current.dispatch).toHaveBeenCalledWith({ type: 'push', to: 'Home', params: undefined });
  });

  it('goBack uses navigationRef', () => {
    navigation.goBack();
    expect(navigationRef.current.goBack).toHaveBeenCalled();
  });

  it('goBack does nothing if cannot go back', () => {
    navigationRef.current.canGoBack.mockReturnValue(false);
    navigation.goBack();
    expect(navigationRef.current.goBack).not.toHaveBeenCalled();
  });
});
