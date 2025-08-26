import BootSplash from 'react-native-bootsplash';
import renderer, { act } from 'react-test-renderer';

import { useApp } from '../useApp';

function TestComponent() {
  useApp();
  return null;
}

describe('useApp hook', () => {
  it('calls BootSplash.hide on mount', async () => {
    await act(async () => {
      renderer.create(<TestComponent />);
    });
    expect(BootSplash.hide).toHaveBeenCalledWith({ fade: true });
  });
});
