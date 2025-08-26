export const tMock = jest.fn((k: string, _o?: unknown) => k);
export const changeLanguageMock = jest.fn();

export const initReactI18next = {
  type: '3rdParty',
  init: jest.fn(),
};

export const useTranslation = () => ({
  t: tMock,
  i18n: { changeLanguage: changeLanguageMock },
});
