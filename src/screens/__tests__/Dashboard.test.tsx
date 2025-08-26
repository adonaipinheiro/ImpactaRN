import { FlatList } from 'react-native';

import renderer, { act } from 'react-test-renderer';

import { Dashboard } from '@screens/Dashboard';
import { useDashboard } from '@screens/Dashboard/hooks';

jest.mock('@screens/Dashboard/hooks', () => ({
  useDashboard: jest.fn(),
}));

describe('Dashboard screen', () => {
  it('renders products list from hook data', () => {
    const data = [
      {
        id: 1,
        images: ['https://example.com/img.png'],
        title: 'Item',
        description: 'Desc',
        price: 99.99,
      },
    ];

    (useDashboard as jest.Mock).mockReturnValue({
      data,
      isFetching: false,
    });

    let component: renderer.ReactTestRenderer;
    act(() => {
      component = renderer.create(<Dashboard />);
    });

    const list = component!.root.findByType(FlatList);
    expect(list.props.data).toEqual(data);
  });
});

