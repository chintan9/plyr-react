# plyr-react

<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->

[![All Contributors](https://img.shields.io/badge/all_contributors-2-orange.svg?style=flat-square)](#contributors-)

<!-- ALL-CONTRIBUTORS-BADGE:END -->

![plyr-react](https://socialify.git.ci/chintan9/plyr-react/png?description=1&forks=1&issues=1&pulls=1)

## Installation

This plugin requires minimum **Node.js with npm or yarn**.

```sh
# with npm
npm i plyr-react

# with yarn
yarn add plyr-react
```

## Usage

```tsx
import Plyr from 'plyr-react'
import 'plyr-react/dist/plyr.css'

export default function App() {
  return (
    <Plyr
      source={
        {
          /* ... */
        }
      }
      options={
        {
          /* ... */
        }
      }
    />
  )
}
```

### Using `ref`

```tsx
// Component class
class MyComponent extends Component {
  constructor(props) {
    super(props)
    this.player = createRef()
  }

  componentDidMount() {
    // Access the internal plyr instance
    console.log(this.player.current.plyr)
  }

  render() {
    return (
      <>
        <Plyr ref={(player) => (this.player.current = player)} />
      </>
    )
  }
}

// Functional component

const MyComponent = () => {
  const ref = useRef()
  useEffect(() => console.log(ref.current.plyr))
  return (
    <>
      <Plyr ref={ref} />
    </>
  )
}
```

## Example

You can fork this example
https://stackblitz.com/edit/react-fpmwns?file=src/App.js
Demo
https://react-fpmwns.stackblitz.io

## Contribute

[![Gitpod Ready-to-Code](https://img.shields.io/badge/Gitpod-Ready--to--Code-blue?logo=gitpod)](https://gitpod.io/#https://github.com/chintan9/plyr-react)
![npm](https://img.shields.io/npm/dt/plyr-react)
[![BCH compliance](https://bettercodehub.com/edge/badge/chintan9/plyr-react?branch=master)](https://bettercodehub.com/)
[![Size](https://badgen.net/bundlephobia/minzip/plyr-react)](https://badgen.net/#bundlephobia)

## Support

If you like the project and want to support my work, give star or fork it.

## Thanks

- [@iwatakeshi](https://github.com/iwatakeshi) For provide help for convert to typescript.
