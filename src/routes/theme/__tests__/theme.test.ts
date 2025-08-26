import { Colors } from '@utils';

import { ImpactaTheme } from '../index';

describe('ImpactaTheme', () => {
  it('uses project colors', () => {
    expect(ImpactaTheme.colors.primary).toBe(Colors.primary);
    expect(ImpactaTheme.dark).toBe(false);
  });
});
