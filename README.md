<h1 align="center">Plyr React</h1>
<p align="center"><img src="https://user-images.githubusercontent.com/23579958/143738613-d374adcf-24b8-4f44-8e75-673d5681c1a5.png" title="plyr-react" alt="plyr-react logo" width="450"></p>
<p align="center">
A responsive media player that is simple, easy to use, and customizable for video, audio, YouTube, and Vimeo.
  <br>
  <img src="https://img.shields.io/badge/Tree%20Shakeable-d4e157" alt="tree-shakeable" />
  <img src="https://img.shields.io/badge/Side%20Effect%20Free-ffeb3b" alt="side-effect free" />
</p>	
<p align="center">
  <a href="https://github.com/chintan9/plyr-react/blob/master/LICENSE">
    <img src="https://img.shields.io/badge/License-MIT-yellow.svg" alt="license" />
  </a>
  <a href="https://npmjs.org/package/plyr-react">
    <img src="https://img.shields.io/npm/dt/plyr-react.svg" alt="downloads" />
  </a>
  <a href="https://bundlephobia.com/result?p=plyr-react">
    <img src="https://img.shields.io/bundlephobia/minzip/plyr-react.svg" alt="bundle size" />
</a>
  <a href="https://lgtm.com/projects/g/chintan9/plyr-react/context:javascript">
    <img src="https://img.shields.io/lgtm/grade/javascript/g/chintan9/plyr-react.svg?logo=lgtm&logoWidth=18" alt="Language grade: JavaScript" />
  </a>

  <a href="#contributors">
    <img src="https://img.shields.io/badge/all_contributors-3-orange.svg" alt="contributors badge" />
  </a>
</p>

## Installation

```sh
# NPM
npm install plyr-react

# Yarn
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
          /* https://github.com/sampotts/plyr#the-source-setter */
        }
      }
      options={
        {
          /* https://github.com/sampotts/plyr#options */
        }
      }
      {
        ...{
          /* Direct props for inner video tag (mdn.io/video) */
        }
      }
    />
  )
}
```

### Using `ref`

```tsx
// Functional component
const MyComponent = () => {
  const ref = useRef()

  useEffect(() => {
    // Access the internal plyr instance
    console.log(ref.current.plyr)
  })

  return <Plyr ref={ref} />
}

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
```

## API:

Currently the exported APIs contains a latest instance of plyr.  
In other words, the passing ref will have access to the player in the structure shown below.

```jsx
;<Plyr ref={ref} />

// ref can get access to latest plyr instance with `ref.current.plyr`
ref = { current: { plyr } }

// so you can make your player fullscreen 🎉
ref.current.plyr.fullscreen.enter()
```

## Example

> You can fork these examples

**Javascript example:** <a href="https://stackblitz.com/edit/react-fpmwns?file=src/App.js" title="stackblitz example (js)">
<img src="https://developer.stackblitz.com/img/open_in_stackblitz.svg" alt="stackblitz example (js)" width="185">
</a>

**Typescript example:** <a href="https://codesandbox.io/s/plyr-react-new-api-forked-cg08k?file=/src/App.tsx" title="codesandbox example (ts)">
<img src="https://codesandbox.io/static/img/play-codesandbox.svg" alt="codesandbox example (ts)" width="185">
</a>

**Demo:** https://react-fpmwns.stackblitz.io

## Contribute

[![Gitpod Ready-to-Code](https://img.shields.io/badge/Gitpod-Ready--to--Code-blue?logo=gitpod)](https://gitpod.io/#https://github.com/chintan9/plyr-react)
![npm](https://img.shields.io/npm/dt/plyr-react)
[![BCH compliance](https://bettercodehub.com/edge/badge/chintan9/plyr-react?branch=master)](https://bettercodehub.com/)
[![Size](https://badgen.net/bundlephobia/minzip/plyr-react)](https://badgen.net/#bundlephobia)

## Support

If you like the project and want to support my work, give star or fork it.

## Thanks

- [@amirHossein-Ebrahimi](https://github.com/amirHossein-Ebrahimi) For provide help for integrate to react-aptor.
- [@iwatakeshi](https://github.com/iwatakeshi) For provide help for convert to typescript.
