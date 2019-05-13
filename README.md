# Password Strength Meter (React) Demo

**You can checkout the full article on Scotch: [Password Strength Meter in React](https://scotch.io/tutorials/password-strength-meter-in-react).**

This project contains a demo source code showing how to use the [zxcvbn][zxcvbn] JavaScript library in a [React][react] application. Prior experience working with the React framework is required for complete understanding of the demo code. You can checkout the [docs][react-docs] to learn more about React.

Here are screenshots of the demo React application:

![Demo Application](https://i.imgur.com/JLiYFLz.jpg)

Before you begin, make sure you have [`npm`][npm] and [`node`][node] installed on your system. It is recommended that you use [`yarn`][yarn] instead of `npm` to run and manage the package. Follow this [guide to install yarn][yarn-install] on your system.

Once you have either `yarn` or `npm` installed, run the following commands to get started.

> Note that this demo was bootstrapped using the `create-react-app` package. You can look through this [extensive guide for the available scripts](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#available-scripts).

**Using NPM**

```sh
npm install
npm start
```

**Using Yarn**

```sh
yarn
yarn start
```

You can also get a [live demo on Code Sandbox][code-demo].

[![Edit password-strength-react](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/8kkrpy7260)


## License

This package is covered by the MIT license. Below is a copy of the license (please read carefully).

```
MIT License

Copyright (c) 2018 Glad Chinda

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```



[react-docs]: https://reactjs.org/docs/
[react]: https://reactjs.org/
[code-demo]: https://codesandbox.io/s/8kkrpy7260
[node]: https://nodejs.org/en/
[npm]: https://npmjs.com/
[yarn]: https://yarnpkg.com/
[yarn-install]: https://yarnpkg.com/lang/en/docs/install/
[zxcvbn]: https://github.com/dropbox/zxcvbn
