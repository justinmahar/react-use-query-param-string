<h2 align="center">
  ❔ react-use-query-param-string
</h2>
<h3 align="center">
  React hook for easily getting and setting query param strings.
</h3>
<p align="center">
  <a href="https://badge.fury.io/js/react-use-query-param-string" target="_blank" rel="noopener noreferrer">
    <img src="https://badge.fury.io/js/react-use-query-param-string.svg" alt="npm Version" />
  </a>
  <a href="https://github.com/justinmahar/react-use-query-param-string/" target="_blank" rel="noopener noreferrer">
    <img src="https://img.shields.io/badge/GitHub-Source-success" alt="View project on GitHub" />
  </a>
  <a href="https://github.com/justinmahar/react-use-query-param-string/actions?query=workflow%3ADeploy" target="_blank" rel="noopener noreferrer">
    <img src="https://github.com/justinmahar/react-use-query-param-string/workflows/Deploy/badge.svg" alt="Deploy Status" />
  </a>
</p>

## Documentation

Read the **[official documentation](https://justinmahar.github.io/react-use-query-param-string/)**.

## Donate 

This project is the result of countless of hours of work and I really hope it saves you hours of your own precious time.

If you would like to join others in showing support for the development of this project, then please feel free to buy me a coffee.

<a href="https://paypal.me/thejustinmahar/5">
  <img src="https://justinmahar.github.io/react-use-query-param-string/support/coffee-1.png" alt="Buy me a coffee" height="35" />
</a> <a href="https://paypal.me/thejustinmahar/15">
  <img src="https://justinmahar.github.io/react-use-query-param-string/support/coffee-3.png" alt="Buy me 3 coffees" height="35" />
</a> <a href="https://paypal.me/thejustinmahar/25">
  <img src="https://justinmahar.github.io/react-use-query-param-string/support/coffee-5.png" alt="Buy me 5 coffees" height="35" />
</a>

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

See the [useQueryParamString docs](https://justinmahar.github.io/react-use-query-param-string/?path=/story/hooks-usequeryparamstring--page) for more usage details.

## Utility Functions

You can use the `getQueryParams()` and `setQueryParams()` functions to get/set query params yourself.

### `getQueryParams`

Retrieve all decoded query params as a ParsedQuery map.

#### Signature

`getQueryParams() => queryString.ParsedQuery`

#### Usage

```jsx
import { getQueryParams } from 'react-use-query-param-string';
```

```jsx
const params = getQueryParams();
console.log(params);
```

### `setQueryParams`

Set the query params via a ParsedQuery map.

#### Signature

`setQueryParams(query: queryString.ParsedQuery) => void`

#### Usage

```jsx
import { setQueryParams } from 'react-use-query-param-string';
```

```jsx
setQueryParams({ myParam: 'hey yo!' });
```

## TypeScript

Type definitions have been included for [TypeScript](https://www.typescriptlang.org/) support.

## Icon Attribution

Icon by [Twemoji](https://github.com/twitter/twemoji).

## Contributing

Open source software is awesome and so are you. 😎

Feel free to submit a pull request for bugs or additions, and make sure to update tests as appropriate. If you find a mistake in the docs, send a PR! Even the smallest changes help.

For major changes, open an issue first to discuss what you'd like to change.

## ⭐ Found It Helpful? [Star It!](https://github.com/justinmahar/react-use-query-param-string/stargazers)

If you found this project helpful, let the community know by giving it a [star](https://github.com/justinmahar/react-use-query-param-string/stargazers): [👉⭐](https://github.com/justinmahar/react-use-query-param-string/stargazers)

## License

See [LICENSE.md](https://justinmahar.github.io/react-use-query-param-string/?path=/story/license--page).