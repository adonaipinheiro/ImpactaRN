import { tMock, changeLanguageMock } from 'react-i18next';

import { useTranslation } from '../useTranslation';

describe('useTranslation hook', () => {
  it('wraps t and changeLanguage', () => {
    const { t, changeLanguage: changeLng } = useTranslation();
    t('test');
    changeLng('ptBR');
    expect(tMock).toHaveBeenCalledWith('test', undefined);
    expect(changeLanguageMock).toHaveBeenCalledWith('ptBR');
  });
});
