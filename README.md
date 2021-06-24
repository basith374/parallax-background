# parallax-background

> An interactive parallax image component

[![NPM](https://img.shields.io/npm/v/@basith374/parallax-background.svg)](https://www.npmjs.com/package/parallax-background) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com) [![build](https://github.com/basith374/parallax-background/actions/workflows/main.yml/badge.svg)](https://github.com/basith374/parallax-background/actions/workflows/main.yml)

## Install

```bash
npm install --save @basith374/parallax-background
```

## Usage

```jsx
import React, { Component } from 'react'

import Parallax from '@basith374/parallax-background'
import '@basith374/parallax-background/dist/index.css'

import bg0 from './assets/bg1.png';
import bg1 from './assets/bg2.png';
import bg2 from './assets/bg3.png';

class Example extends Component {
  render() {
    return <Parallax images={[bg0, bg1, bg2]} />
  }
}
```

> NOTE: Make sure the parent container has some height since the root container uses `height:100%`

## License

MIT © [basith374](https://github.com/basith374)
