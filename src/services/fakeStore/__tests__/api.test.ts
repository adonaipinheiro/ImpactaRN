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

  it('skips interceptors when not in dev', () => {
    const g = global as unknown as { __DEV__: boolean };
    const original = g.__DEV__;
    g.__DEV__ = false;
    jest.resetModules();
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const { fakeStoreApi: api } = require('../api');
    expect(api.interceptors.request.handlers.length).toBe(0);
    expect(api.interceptors.response.handlers.length).toBe(0);
    g.__DEV__ = original;
  });
});
