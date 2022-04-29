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
npm install plyr-react@4.0.0-alpha.1

# Yarn
yarn add plyr-react@4.0.0-alpha.1
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
return <Plyr ref={ref} />

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

**Basic HLS integration** <a href="https://codesandbox.io/s/hidden-frost-mpdjj?file=/src/HLS.tsx" title="codesandbox example (ts)">
Codesandbox
</a>

**Demo:** https://react-fpmwns.stackblitz.io

## Nightly version of plyr-react:

<a href="https://github.com/chintan9/plyr-react/tree/dev/example" title="early access for alpha version">
 <img src="https://user-images.githubusercontent.com/23579958/150494317-912b4ce3-8d22-4c05-aec5-a28934d2f2e7.png">
</a>

## Contribute

We are open to all new contribution, feel free to read [CONTRIBUTING](https://github.com/chintan9/plyr-react/blob/master/CONTRIBUTING.md) and [CODE OF CONDUCT](https://github.com/chintan9/plyr-react/blob/master/CODE_OF_CONDUCT.md) section, make new issue to discuss about the problem, and improve/fix/enhance the source code with your PRs.
There is a ready to code Gitpod, you can jump into it from <a href="https://gitpod.io/#https://github.com/chintan9/plyr-react" title="Gitpod plyr-react"><img src="https://img.shields.io/badge/Gitpod-Ready--to--Code-blue?logo=gitpod" alt="Gitpod Ready-to-Code"><a/>

## Support

If you like the project and want to support my work, give star ⭐ or fork it.
[![Featured on Openbase](https://badges.openbase.com/js/featured/plyr-react.svg?token=taplQ9iU8GI6oqsRiTD6H6Dl4A4o787VVK0gS6m3RKo=)](https://openbase.com/js/plyr-react?utm_source=embedded&amp;utm_medium=badge&amp;utm_campaign=rate-badge)

## Thanks

- [@realamirhe](https://github.com/realamirhe) For provide help for integrate to react-aptor.
- [@iwatakeshi](https://github.com/iwatakeshi) For provide help for convert to typescript.
