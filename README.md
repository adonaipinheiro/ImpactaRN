# ImpactaRN

Aplicativo móvel desenvolvido com [React Native](https://reactnative.dev) e TypeScript.

## Tecnologias

- [React Native](https://reactnative.dev)
- [React Navigation](https://reactnavigation.org)
- [React Query](https://tanstack.com/query/latest)
- [Zustand](https://github.com/pmndrs/zustand)
- [React Hook Form](https://react-hook-form.com)
- [i18next](https://www.i18next.com)
- [react-native-config](https://github.com/luggit/react-native-config)

## Pré-requisitos

- [Node.js](https://nodejs.org) >= 18
- npm 10 ou superior
- Ambiente de desenvolvimento configurado para React Native
  ([guia oficial](https://reactnative.dev/docs/set-up-your-environment))

## Instalação

Clone o repositório e instale as dependências:

```bash
npm install
```

## Executando o projeto

### Iniciar o Metro Bundler
```bash
npm start
```

### Android
```bash
npm run android
```

### iOS
Instale as dependências do CocoaPods (apenas no primeiro uso ou após atualizar dependências nativas):

```bash
cd ios && bundle install && bundle exec pod install && cd ..
```

Em seguida, execute:

```bash
npm run ios
```

## Scripts úteis

- `npm test` – executa os testes com Jest
- `npm run lint` – analisa o código com ESLint
- `npm run lint:fix` – tenta corrigir automaticamente problemas de lint

## Estrutura do projeto

```
src/
  assets/      # arquivos estáticos
  components/  # componentes reutilizáveis
  hooks/       # hooks personalizados
  locales/     # textos e traduções
  routes/      # navegação do aplicativo
  screens/     # telas da aplicação
  services/    # serviços de comunicação externa
  store/       # estado global
  utils/       # utilidades e helpers
```

## Contribuindo

Contribuições são bem-vindas! Abra uma issue para discutir mudanças ou envie um pull request.

## Licença

Este projeto não possui uma licença definida.
