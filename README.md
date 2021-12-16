<p align="center">
  <a href="https://react-interactive-widget.vercel.app/" rel="noopener" target="_blank"><img width="150" src="https://mui.com/static/logo.svg" alt="MUI logo"></a></p>
</p>

<h1 align="center">React Interactive Widget</h1>

<div align="center">

Quickly build beautiful [React](https://reactjs.org/) component. React Interactive Widget(RIW) is a simple and customizable component library to build faster, beautiful, and more accessible React applications.

[![license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/mui-org/material-ui/blob/HEAD/LICENSE)
[![npm latest package](https://img.shields.io/npm/v/@mui/material/latest.svg)](https://www.npmjs.com/package/@mui/material)
[![npm next package](https://img.shields.io/npm/v/@mui/material/next.svg)](https://www.npmjs.com/package/@mui/material)
[![npm downloads](https://img.shields.io/npm/dm/@mui/material.svg)](https://www.npmjs.com/package/@mui/material)
[![CircleCI](https://circleci.com/gh/mui-org/material-ui/tree/master.svg?style=shield)](https://app.circleci.com/pipelines/github/mui-org/material-ui?branch=master)
[![Coverage Status](https://img.shields.io/codecov/c/github/mui-org/material-ui/master.svg)](https://codecov.io/gh/mui-org/material-ui/branch/master)
[![Follow on Twitter](https://img.shields.io/twitter/follow/MaterialUI.svg?label=follow+Material-UI)](https://twitter.com/MaterialUI)
[![Renovate status](https://img.shields.io/badge/renovate-enabled-brightgreen.svg)](https://github.com/mui-org/material-ui/issues/27062)
[![Average time to resolve an issue](https://isitmaintained.com/badge/resolution/mui-org/material-ui.svg)](https://isitmaintained.com/project/mui-org/material-ui "Average time to resolve an issue")
[![Crowdin](https://badges.crowdin.net/material-ui-docs/localized.svg)](https://translate.mui.com/project/material-ui-docs)
[![Open Collective backers and sponsors](https://img.shields.io/opencollective/all/material-ui)](https://opencollective.com/mui)

</div>

## Installation

MUI is available as an [npm package](https://www.npmjs.com/package/@mui/material).

**[Stable channel v5](https://mui.com/)**

```sh
// with npm
npm install @mui/material @emotion/react @emotion/styled

// with yarn
yarn add @mui/material @emotion/react @emotion/styled
```

<details>
  <summary>Older versions</summary>

- **[v4.x](https://v4.mui.com/)** ([Migration from v4 to v5](https://mui.com/guides/migration-v4/))
- **[v3.x](https://v3.mui.com/)** ([Migration from v3 to v4](https://mui.com/guides/migration-v3/))
- **[v0.x](https://v0.mui.com/)** ([Migration to v1](https://mui.com/guides/migration-v0x/))

</details>

Please note that `@next` will only point to pre-releases; to get the latest stable release use `@latest` instead.

via [OpenCollective](https://opencollective.com/mui)

Gold Sponsors are those who have pledged \$500/month or more to MUI.

### There is more!

See the full list of [our backers](https://mui.com/discover-more/backers/).

## Usage

Here is a quick example to get you started, **it's all you need**:

```jsx
import React from "react";
import ReactDOM from "react-dom";
import Button from "@mui/material/Button";

function App() {
  return (
    <Button variant="contained" color="primary">
      Hello World
    </Button>
  );
}

ReactDOM.render(<App />, document.querySelector("#app"));
```

Yes, it's really all you need to get started as you can see in this live and interactive demo:

[![Edit Button](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/4j7m47vlm4)

## Questions

For _how-to_ questions and other non-issues,
please use [StackOverflow](https://stackoverflow.com/questions/tagged/mui) instead of GitHub issues.
There is a StackOverflow tag called "material-ui" that you can use to tag your questions.

## Examples

Are you looking for an example project to get started?
[We host some](https://mui.com/getting-started/example-projects/).

## Documentation

Check out our [documentation website](https://mui.com/).

## Contributing

Read the [contributing guide](/CONTRIBUTING.md) to learn about our development process, how to propose bugfixes and improvements, and how to build and test your changes to MUI.

Notice that contributions go far beyond pull requests and commits.
Although we love giving you the opportunity to put your stamp on MUI, we also are thrilled to receive a variety of [other contributions](https://mui.com/getting-started/faq/#mui-is-awesome-how-can-i-support-the-project).

## Roadmap

The future plans and high priority features and enhancements can be found in the [roadmap](https://mui.com/discover-more/roadmap/) file.

## License

This project is licensed under the terms of the
[MIT license](/LICENSE).
