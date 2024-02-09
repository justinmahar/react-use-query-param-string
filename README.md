<h2 align="center">
  🔡 react-use-query-param-string
</h2>
<h3 align="center">
  React hook for easily getting and setting query param strings.
</h3>
<p align="center">
  <a href="https://badge.fury.io/js/react-use-query-param-string" target="_blank" rel="noopener noreferrer"><img src="https://badge.fury.io/js/react-use-query-param-string.svg" alt="npm Version" /></a>&nbsp;
  <a href="https://github.com/justinmahar/react-use-query-param-string/" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/badge/GitHub-Source-success" alt="View project on GitHub" /></a>&nbsp;
  <a href="https://github.com/justinmahar/react-use-query-param-string/actions?query=workflow%3ADeploy" target="_blank" rel="noopener noreferrer"><img src="https://github.com/justinmahar/react-use-query-param-string/workflows/Deploy/badge.svg" alt="Deploy Status" /></a>
</p>
<!-- [lock:donate-badges] 🚫--------------------------------------- -->
<p align="center">
  <a href="https://ko-fi.com/justinmahar"><img src="https://img.shields.io/static/v1?label=Buy%20me%20a%20coffee&message=%E2%9D%A4&logo=KoFi&color=%23fe8e86" alt="Buy me a coffee" /></a>&nbsp;<a href="https://github.com/sponsors/justinmahar" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/static/v1?label=Sponsor&message=%E2%9D%A4&logo=GitHub&color=%23fe8e86" alt="Sponsor"/></a>
</p>
<!-- [/lock:donate-badges] ---------------------------------------🚫 -->

## Documentation

Read the **[official documentation](https://justinmahar.github.io/react-use-query-param-string/)**.

## Overview

This hook allows you to use a query param string the same way you'd use regular React state (i.e. via React.useState). 

You can also use the getQueryParams() and setQueryParams() functions to get/set query params yourself.

### Features include:

- **👍 Read and set query params with ease**
  - Use query param strings just like you would React state
- **🔄 State syncing across components**
  - Hooks stay synchronized even when used in multiple components.
- **🙅‍♂️ No Router interference**
  - Uses `window` functions that don't interfere with router frameworks.
- **💁‍♀️ Convenience functions available**
  - Use `getQueryParams()` or `setQueryParams()` to get/set query params yourself.

<!-- [lock:donate] 🚫--------------------------------------- -->

## Donate 

If this project helped you, please consider buying me a coffee or sponsoring me. Your support is much appreciated!

<a href="https://ko-fi.com/justinmahar"><img src="https://img.shields.io/static/v1?label=Buy%20me%20a%20coffee&message=%E2%9D%A4&logo=KoFi&color=%23fe8e86" alt="Buy me a coffee" /></a>&nbsp;<a href="https://github.com/sponsors/justinmahar" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/static/v1?label=Sponsor&message=%E2%9D%A4&logo=GitHub&color=%23fe8e86" alt="Sponsor"/></a>

<!-- [/lock:donate] ---------------------------------------🚫 -->

## Table of Contents

- [Documentation](#documentation)
- [Overview](#overview)
  - [Features include:](#features-include)
- [Donate](#donate)
- [Table of Contents](#table-of-contents)
- [Installation](#installation)
- [Quick Start](#quick-start)
- [TypeScript](#typescript)
- [Icon Attribution](#icon-attribution)
- [Contributing](#contributing)
- [⭐ Found It Helpful? Star It!](#-found-it-helpful-star-it)
- [License](#license)

## Installation

```
npm i react-use-query-param-string
```

## Quick Start

```jsx
import { useQueryParamString } from 'react-use-query-param-string';
```

```jsx
// Will use query param `q` and have a default value of empty string.
// `initialized` will be true after the value has been read from the query params.
const [searchText, setSearchText, initialized] = useQueryParamString('q', '');
```

See the [useQueryParamString docs](https://justinmahar.github.io/react-use-query-param-string/?path=/story/hooks-usequeryparamstring--page) for more usage details, including static functions.

<!-- [lock:typescript] 🚫--------------------------------------- -->

## TypeScript

Type definitions have been included for [TypeScript](https://www.typescriptlang.org/) support.

<!-- [/lock:typescript] ---------------------------------------🚫 -->

<!-- [lock:icon] 🚫--------------------------------------- -->

## Icon Attribution

Favicon by [Twemoji](https://github.com/twitter/twemoji).

<!-- [/lock:icon] ---------------------------------------🚫 -->

<!-- [lock:contributing] 🚫--------------------------------------- -->

## Contributing

Open source software is awesome and so are you. 😎

Feel free to submit a pull request for bugs or additions, and make sure to update tests as appropriate. If you find a mistake in the docs, send a PR! Even the smallest changes help.

For major changes, open an issue first to discuss what you'd like to change.

<!-- [/lock:contributing] --------------------------------------🚫 -->

## ⭐ Found It Helpful? [Star It!](https://github.com/justinmahar/react-use-query-param-string/stargazers)

If you found this project helpful, let the community know by giving it a [star](https://github.com/justinmahar/react-use-query-param-string/stargazers): [👉⭐](https://github.com/justinmahar/react-use-query-param-string/stargazers)

## License

See [LICENSE.md](https://justinmahar.github.io/react-use-query-param-string/?path=/story/license--page).