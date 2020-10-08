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

> Note: You will need mark `source` as a type of `any` until a new release of Plyr is available.

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
        <Plyr ref={(player) => (this.player = player)} />
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

Click
[here](https://stackblitz.com/edit/react-vfptdd?ctl=1&embed=1&file=index.js&hideExplorer=1&hideNavigation=1&view=preview)
to see example and you can play with
[this](https://stackblitz.com/edit/react-vfptdd?file=index.js) example.

## Contribute

[![Gitpod Ready-to-Code](https://img.shields.io/badge/Gitpod-Ready--to--Code-blue?logo=gitpod)](https://gitpod.io/#https://github.com/chintan9/plyr-react)
[![Join the package community on Pika](https://img.shields.io/badge/Pika%20Community-Ask%20questions,%20get%20answers-blue?style=flag-square)](https://www.pika.dev/npm/plyr-react)
[![BCH compliance](https://bettercodehub.com/edge/badge/chintan9/plyr-react?branch=master)](https://bettercodehub.com/)
[![Size](https://badgen.net/bundlephobia/minzip/plyr-react)](https://badgen.net/#bundlephobia)

## Support

If you like the project and want to support my work, give star or fork it.

## Thanks

- [@iwatakeshi](https://github.com/iwatakeshi) For provide help for convert to typescript.

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/mnervik"><img src="https://avatars1.githubusercontent.com/u/15329600?v=4" width="100px;" alt=""/><br /><sub><b>mnervik</b></sub></a><br /><a href="https://github.com/chintan9/plyr-react/issues?q=author%3Amnervik" title="Bug reports">🐛</a></td>
    <td align="center"><a href="http://www.iwatakeshi.com"><img src="https://avatars3.githubusercontent.com/u/1505448?v=4" width="100px;" alt=""/><br /><sub><b>Takeshi</b></sub></a><br /><a href="#ideas-iwatakeshi" title="Ideas, Planning, & Feedback">🤔</a> <a href="#question-iwatakeshi" title="Answering Questions">💬</a> <a href="#translation-iwatakeshi" title="Translation">🌍</a> <a href="#userTesting-iwatakeshi" title="User Testing">📓</a> <a href="#example-iwatakeshi" title="Examples">💡</a> <a href="https://github.com/chintan9/plyr-react/issues?q=author%3Aiwatakeshi" title="Bug reports">🐛</a></td>
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
