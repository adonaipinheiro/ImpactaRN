import { resources } from '../index';
import { ptBR } from '../ptBR';

describe('language resources', () => {
  it('includes ptBR translations', () => {
    expect(resources.ptBR.translation).toEqual(ptBR);
  });
});
