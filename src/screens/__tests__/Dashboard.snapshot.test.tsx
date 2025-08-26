import renderer from 'react-test-renderer';

import { Dashboard } from '@screens/Dashboard';
import { useDashboard } from '@screens/Dashboard/hooks';

jest.mock('@screens/Dashboard/hooks', () => ({
  useDashboard: jest.fn(),
}));

describe('Dashboard screen snapshot', () => {
  beforeEach(() => {
    (useDashboard as jest.Mock).mockReturnValue({
      data: [],
      isFetching: false,
    });
  });

  it('matches snapshot', () => {
    const tree = renderer.create(<Dashboard />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
