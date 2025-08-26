jest.mock('@utils', () => ({
  requestMonitor: jest.fn((c) => c),
  responseMonitor: jest.fn((r) => r),
  catchError: jest.fn((e) => Promise.reject(e)),
}));

import { fakeStoreApi } from '../api';

describe('fakeStoreApi', () => {
  it('configures baseURL and headers', () => {
    expect(fakeStoreApi.defaults.baseURL).toBe('http://example.com');
    expect(fakeStoreApi.defaults.headers['Content-Type']).toBe('application/json');
  });

  it('registers interceptors', () => {
    expect(fakeStoreApi.interceptors.request.handlers.length).toBeGreaterThan(0);
    expect(fakeStoreApi.interceptors.response.handlers.length).toBeGreaterThan(0);
  });
});
