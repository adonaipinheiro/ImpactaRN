export const StackActions = {
  replace: jest.fn((to: string, params?: unknown) => ({ type: 'replace', to, params })),
  push: jest.fn((to: string, params?: unknown) => ({ type: 'push', to, params })),
};

export const createNavigationContainerRef = jest.fn(() => ({ current: null }));
