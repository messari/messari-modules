# Welcome To Messari Modules!

### What is Messari Modules?

Messari Modules are modularized React components used across the Messari webapp to display data in a contained and easy to digest way. Messari Modules are a family of composable components that make up a module!

### What to do with Messari Modules?

This open-source project was created in an effort to allow the community to build their own modules. The module components help create a consistent look & feel and if the community creates modules that we deem are valuable, we may end up implementing them ourselves!

### Storybook

The Messari Modules has a story that is hosted within the repository. Pull the repo and execute:

```
yarn & yarn run storybook
```

This will install necessary dependencies and run the storybook (served with Webpack)!

#### Module Part Hierarchy

```
-> MessariModule

  --> MessariModuleHeader
    --> MessariModuleTitle
    --> MessariModuleDivider
    --> MessariModuleHeaderLinkIcon

  --> MessariModuleBody
    --> MessariModuleLoadingIncidator
    --> Go Crazy! This is where the fun happens
    --> MessariModuleError

  --> MessariModuleFooter
```
