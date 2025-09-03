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
  <a href="https://www.npmjs.com/package/plyr-react">
  <img src="https://img.shields.io/npm/v/plyr-react?style=flat&colorA=000000&colorB=000000" alt="Version">
  </a>
  <a href="https://www.npmjs.com/package/plyr-react">
  <img src="https://img.shields.io/npm/dt/plyr-react.svg?style=flat&colorA=000000&colorB=000000" alt="Downloads">
  </a>
</p>

You can see a live demo [here](https://githubbox.com/chintan9/plyr-react/tree/master/example/react).

> Make sure to select the version for the plyr-react in the dependencies.

### Plyr-React: The Complete Guide to a Customizable React Media Player

**Plyr-React** is a responsive, accessible, and highly customizable media player component for React. It wraps the popular [Plyr](https://github.com/sampotts/plyr) media player, providing a simple and powerful way to integrate video, audio, YouTube, and Vimeo content into your React applications.

The library is designed for modern development, featuring a tree-shakeable and side-effect-free build, ensuring optimal performance. It offers both a simple component for quick setup and an advanced hook for complex, custom integrations.

#### Key Features

- **Broad Media Support:** Natively supports HTML5 `<video>` and `<audio>`, as well as embedded players from YouTube and Vimeo.
- **Deep Customization:** A rich set of options allows you to control every aspect of the player's UI and behavior, including controls, settings menus, and event listeners.
- **Accessibility Focused:** Built on the accessible foundation of the underlying Plyr player.
- **Modern React API:** Offers a simple `<Plyr />` component for easy use and a powerful `usePlyr` hook for full control and custom logic.
- **Full Programmatic Access:** Provides direct access to the Plyr instance via React refs, allowing you to control playback, volume, fullscreen, and more from your application code.
- **TypeScript Support:** Fully typed for a superior developer experience, with exported types for props, options, and the player instance.
- **Streaming Support:** Can be integrated with streaming libraries like HLS.js for adaptive bitrate streaming.

---

### Installation

You can install `plyr-react` using NPM, Yarn, or PNPM.

```bash
# NPM
npm install plyr-react

# Yarn
yarn add plyr-react

# PNPM
pnpm add plyr-react
```

_(Note: PNPM instructions have been added for completeness as they were not present in the original documentation.)_

---

### Peer Dependencies

For `plyr-react` to function correctly, it requires you to install some packages in your project yourself. These are known as peer dependencies. The `package.json` file specifies the following:

- **`react`**: Version `16.8` or newer.
- **`plyr`**: Version `3.7.7` or a compatible version.

You must ensure these are listed in your project's `package.json`. Most package managers will warn you if these are missing.

**To install peer dependencies:**

```bash
# NPM
npm install react react-dom plyr

# Yarn
yarn add react react-dom plyr

# PNPM
pnpm add react react-dom plyr
```

---

### System Requirements

- **Node.js:** Version `16` or higher.
- **React:** Version `16.8` or higher.

---

### Usage Guide

#### 1. Basic Usage: The `<Plyr />` Component

For most use cases, the `<Plyr />` component is the simplest way to get started. Remember to import the stylesheet to apply the default player theme.

```tsx
import Plyr from "plyr-react"
import "plyr-react/plyr.css"

// Player source configuration
const plyrProps = {
  source: {
    type: "video",
    sources: [
      {
        src: "https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-720p.mp4",
        type: "video/mp4",
        size: 720,
      },
    ],
    poster:
      "https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.jpg",
  },
  options: {
    // Full list of options: https://github.com/sampotts/plyr#options
    controls: [
      "play-large",
      "play",
      "progress",
      "current-time",
      "mute",
      "volume",
      "captions",
      "settings",
      "pip",
      "airplay",
      "fullscreen",
    ],
  },
}

function MyPlayer() {
  return <Plyr {...plyrProps} />
}
```

> **Important CSS Path Change:**
> As of **v5.0.0**, the CSS import path is `plyr-react/plyr.css`. For older versions (v4), you must use `plyr-react/dist/plyr.css`.

#### 2. Advanced Usage: The `usePlyr` Hook

For full control over the player's lifecycle and integration, the `usePlyr` hook is the recommended approach. It allows you to build a completely custom component wrapper.

```jsx
import React from "react"
import { usePlyr } from "plyr-react"
import "plyr-react/plyr.css"

// This example re-creates the <Plyr /> component using the hook
const CustomPlyr = React.forwardRef((props, ref) => {
  const { source, options = null, ...rest } = props

  // usePlyr returns a ref that you can attach to a <video> or <div> element.
  const raptorRef = usePlyr(ref, {
    source,
    options,
  })

  return <video ref={raptorRef} className="plyr-react plyr" {...rest} />
})
```

#### 3. Accessing the Player API via Refs

You can control the player instance programmatically by using a ref. The ref gives you access to the full Plyr API. The ref's `current` object will contain a `plyr` property, which is the player instance.

```tsx
import React, { useRef, useEffect } from "react"
import Plyr from "plyr-react"
import "plyr-react/plyr.css"

const PlayerController = () => {
  const ref = useRef(null)

  const playVideo = () => {
    // ref.current.plyr is the Plyr instance
    if (ref.current && ref.current.plyr) {
      ref.current.plyr.play()
    }
  }

  const enterFullscreen = () => {
    if (ref.current && ref.current.plyr) {
      ref.current.plyr.fullscreen.enter()
    }
  }

  return (
    <div>
      <Plyr
        ref={ref}
        source={{
          type: "video",
          sources: [{ src: "/path/to/video.mp4", type: "video/mp4" }],
        }}
      />
      <button onClick={playVideo}>Play</button>
      <button onClick={enterFullscreen}>Go Fullscreen</button>
    </div>
  )
}
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

<a href="https://github.com/chintan9/plyr-react/tree/tsdown/" title="Early access for nightly version">
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

#### Acknowledgments and Key Contributors

The development and maintenance of this project have been supported by several key contributors:

- **@realamirhe (Amir.H Ebrahimi):** Assisted with infrastructure, documentation, tooling, maintenance, and testing, including the integration with `react-aptor`.
- **@iwatakeshi (Takeshi):** Led the conversion of the project to TypeScript and contributed ideas, translations, user testing, and examples.
- **@mnervik:** Provided valuable support through testing and user feedback.

#### Structure

![d2](https://github.com/user-attachments/assets/21812834-874f-4797-98cb-42b57ae29486)
