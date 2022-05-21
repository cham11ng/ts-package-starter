# @cham11ng/ts-package-starter

Mono-repo collection of utils, library, common and interfaces.

## Setup

1. Generate a GitHub access token with `read:packages` and `write:packages` access.
![image](https://user-images.githubusercontent.com/18543860/66896057-e6477b80-f013-11e9-850d-70c6dedd9881.png)

2. Log in to `npm` with your **GitHub account username** in `Username` and the **generated github access token** in `Password` . 
```bash
$ npm login --registry https://npm.pkg.github.com
Username: <Your GitHub username>
Password: <NPM_GITHUB_TOKEN>
Email: (this IS public) <Your email id>
Logged in as <Your GitHub username> on https://npm.pkg.github.com/.
```

3. That's it. :tada: You can now fetch packages from GitHub Registry.

## Usage

To use packages from the private GitHub registry in your repository.

1. Create `.npmrc` file with scope and registry mapping.
```
@cham11ng:registry=https://npm.pkg.github.com
```
2. Install the package
```
yarn add @cham11ng/ts-package-starter
```

## Publish

```
yarn publish
```
