# cra-template-istic

This template serves to start a project with [crate-react-app](https://create-react-app.dev/), serving as a basis for complex creations using a kit of already configured libs.

## How to use

to start using this template pass the `--template istic` tag when writing the project build command.

```sh
npx create-react-app project-app --template istic
```

or

```sh
yarn create react-app project-app --template istic
```

## Main installed libs

As this project was developed based on [cra-template-typescript](https://www.npmjs.com/package/cra-template-typescript), it already comes with typescript enabled by default.

- [Mantine](https://mantine.dev/): React UI lib that contains a set of components for building interfaces.
- [Axios](https://github.com/axios/axios): HTTP request lib based on `promises` for browser and node.js.
- [React query](https://tanstack.com/query/v4/docs/overview): React Query is often described as the missing data-fetching library for React, but in more technical terms, it makes fetching, caching, synchronizing and updating server state in your React applications a breeze.
- [React Router Context](https://www.npmjs.com/package/react-router-context): It is a library based on react-router-dom, which uses React's Context API for route state management and route access permission customization.
- [Husky](https://typicode.github.io/husky/#/): Library that uses git-hooks for code management

## Folder structure

```
- .husky
- .vscode
- public
- src
  - components
    - _commons
    - Layout
    - {custom_component_folder}
  - core
    - configs
    - contexts
    - domains
    - routes
    - types
  - pages
```

## Routes manager

For route management, the `react-router-context` library was used to facilitate the creation of routes and because it already brings the functionality of access permission to routes, with hooks for viewing the route tree and managing the access role.

The route management file is located in the `src/core/routes` folder

to learn more about lib, [visit the full documentation](https://www.npmjs.com/package/react-router-context)

## Requisition services

Services were created based on classes, to facilitate the use and sharing of methods, using the [axios](https://github.com/axios/axios) lib to manage request traffic.

Services are located in the `src/core/domains/{custom_domain}/{custom_domain}.services.ts` folder.

Below is an example of service applied to authentication request

```ts
import axiosInstance, { SERVICE_BASE_URL } from '@/core/configs/axios';
import { Repository } from './repository.types';

const URL_CONTROLER = `${SERVICE_BASE_URL}/users`;

export default {
  async list(user: string) {
    const result = await axiosInstance.get<Repository[]>(
      `${URL_CONTROLER}/${user}/repos`
    );

    return result.data;
  },
};
```

### Hooks exemples

```ts
import { useQuery } from '@tanstack/react-query';
import repositoryServices from './repository.services';

export function useRepositoryList(user: string) {
  return useQuery(['repositories', user], () => repositoryServices.list(user));
}
```

How to use hook with services

```ts
...

const [user, setUser] = useDebouncedState('SENAI-ISTIC', 1000);

const { data: repos, isLoading } = useRepositoryList(user);

...
```

## know more

For more information on the **Create React App**, see:

- [Getting Started](https://create-react-app.dev/docs/getting-started) – How to create a new project.
- [User Guide](https://create-react-app.dev) – How to develop projects started with Create React App.
