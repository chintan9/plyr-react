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
  <img src="https://img.shields.io/badge/License-MIT-yellow.svg?style=flat&colorA=000000&colorB=000000" alt="License">
  </a>
  <a href="https://lgtm.com/projects/g/chintan9/plyr-react/context:javascript">
  <img src="https://img.shields.io/lgtm/grade/javascript/g/chintan9/plyr-react.svg?logo=lgtm&style=flat&colorA=000000&colorB=000000" alt="Code quality">
  </a>
  <a href="https://bundlephobia.com/result?p=plyr-react">
  <img src="https://img.shields.io/bundlephobia/minzip/plyr-react?label=bundle%20size&style=flat&colorA=000000&colorB=000000" alt="Build Size">
  </a>
  <a href="https://www.npmjs.com/package/plyr-react">
  <img src="https://img.shields.io/npm/v/plyr-react?style=flat&colorA=000000&colorB=000000" alt="Version">
  </a>
  <a href="https://www.npmjs.com/package/plyr-react">
  <img src="https://img.shields.io/npm/dt/plyr-react.svg?style=flat&colorA=000000&colorB=000000" alt="Downloads">
  </a>
</p>

You can see a live demo [here](https://githubbox.com/chintan9/plyr-react/tree/master/example/react).

> Make sure to select the version for the plyr-react in the dependencies.

## Installation

```bash
# NPM
npm install plyr-react

# Yarn
yarn add plyr-react
```

## Usage

### Ready to use `<Plyr />` component

The simplest form of react integration with the plyr is to use the `<Plyr />` component, it is best for the static
videos.

```tsx
import Plyr from "plyr-react"
import "plyr-react/plyr.css"

const plyrProps = {
  source: undefined, // https://github.com/sampotts/plyr#the-source-setter
  options: undefined, // https://github.com/sampotts/plyr#options
  // Direct props for inner video tag (mdn.io/video)
}

function MyPlyrVideo() {
  return <Plyr {...plyrProps} />
}
```

<details>
<summary>Old version 4 plyr-react</summary>
- The path for an import of css styles has been changed in version 5, if you are using the version 4, apply following change in the above code

```diff
- import "plyr-react/plyr.css"
+ import "plyr-react/dist/plyr.css"
```

</details>

### Ready to use `usePlyr` hook

If you need the full control over all if possible integration one can imagine, usePlyr is your hook. Here is a simple
and exact Plyr component made with the `usePlyr` hook. Are curios about how it works follow
this [thread](https://github.com/chintan9/plyr-react/issues/732#issuecomment-1029714462) and
this [proposal](https://github.com/chintan9/plyr-react/issues/678#issue-1043113412).

```jsx
const Plyr = React.forwardRef((props, ref) => {
  const { source, options = null, ...rest } = props
  const raptorRef = usePlyr(ref, {
    source,
    options,
  })
  return <video ref={raptorRef} className="plyr-react plyr" {...rest} />
})
```

### Accessing the plyr instance using refs

```tsx
// Function base component
const MyComponent = () => {
  const ref = useRef()

  useEffect(() => {
    console.log("internal plyr instance:", ref.current.plyr)
  })

  return <Plyr ref={ref} />
}

// Class base component
class MyComponent extends Component {
  constructor(props) {
    super(props)
    this.player = createRef()
  }

  componentDidMount() {
    console.log("internal plyr instance", this.player.current.plyr)
  }

  render() {
    return <Plyr ref={(player) => (this.player.current = player)} />
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

**Javascript
example:** <a href="https://stackblitz.com/edit/react-fpmwns?file=src/App.js" title="stackblitz example (js)">
<img src="https://developer.stackblitz.com/img/open_in_stackblitz.svg" alt="stackblitz example (js)" width="185">
</a>

**Typescript
example:** <a href="https://codesandbox.io/s/plyr-react-new-api-forked-cg08k?file=/src/App.tsx" title="codesandbox example (ts)">
<img src="https://codesandbox.io/static/img/play-codesandbox.svg" alt="codesandbox example (ts)" width="185">
</a>

**Basic HLS
integration** <a href="https://codesandbox.io/s/hidden-frost-mpdjj?file=/src/HLS.tsx" title="codesandbox example (ts)">
Codesandbox
</a>

> Check out the examples directory for the useHls integration guide.

```jsx
<video
  ref={usePlyr(ref, {
    ...useHls(hlsSource, options),
    source,
  })}
  className="plyr-react plyr"
/>
```

**Demo:** https://react-fpmwns.stackblitz.io

## Nightly version of plyr-react:

<a href="https://github.com/chintan9/plyr-react/tree/dev/example" title="Early access for nightly version">
 <img src="https://user-images.githubusercontent.com/23579958/150494317-912b4ce3-8d22-4c05-aec5-a28934d2f2e7.png">
</a>

## Contribute

We are open to all new contribution, feel free to
read [CONTRIBUTING](https://github.com/chintan9/plyr-react/blob/master/CONTRIBUTING.md)
and [CODE OF CONDUCT](https://github.com/chintan9/plyr-react/blob/master/CODE_OF_CONDUCT.md) section, make new issue to
discuss about the problem
[![Gitter](https://badges.gitter.im/plyr-react/community.svg)](https://gitter.im/plyr-react/community?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge), and improve/fix/enhance the source code with your PRs. There is a ready to code Gitpod, you
can jump into it
from <a href="https://gitpod.io/#https://github.com/chintan9/plyr-react" title="Gitpod plyr-react"><img src="https://img.shields.io/badge/Gitpod-Ready--to--Code-blue?logo=gitpod" alt="Gitpod Ready-to-Code"><a/>

## Support

If you like the project and want to support my work, give star ⭐ or fork it.
[![Featured on Openbase](https://badges.openbase.com/js/featured/plyr-react.svg?token=taplQ9iU8GI6oqsRiTD6H6Dl4A4o787VVK0gS6m3RKo=)](https://openbase.com/js/plyr-react?utm_source=embedded&amp;utm_medium=badge&amp;utm_campaign=rate-badge)

## Thanks

- [@realamirhe](https://github.com/realamirhe) For provide help for integrate to react-aptor.
- [@iwatakeshi](https://github.com/iwatakeshi) For provide help for convert to typescript.
