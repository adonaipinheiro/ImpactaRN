import { useQuery } from '@tanstack/react-query';

import { productsGetRequest } from '@services';

import { useDashboard } from '../useDashboard';

jest.mock('@tanstack/react-query', () => ({ useQuery: jest.fn() }));
jest.mock('@services', () => ({ productsGetRequest: jest.fn() }));

describe('useDashboard', () => {
  it('exposes query data', () => {
    (useQuery as jest.Mock).mockReturnValue({ data: [1], isFetching: false });
    const result = useDashboard();
    expect(productsGetRequest).not.toHaveBeenCalled();
    expect(result).toEqual({ data: [1], isFetching: false });
  });
});
