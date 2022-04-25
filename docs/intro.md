---
sidebar_position: 1
---

# Introduction



<img
src="https://user-images.githubusercontent.com/23579958/143738613-d374adcf-24b8-4f44-8e75-673d5681c1a5.png"
title="plyr-react" width="450" alt="plyr-react logo" />

A responsive media player that is simple, easy to use, and customizable
for video, audio, YouTube, and Vimeo.  
![tree-shakeable][] ![side-effect free][]

[![license][]][1] [![downloads][]][2] [![bundle size][]][3] [![Language
grade: JavaScript][]][4] [![contributors badge][]][5]

  [tree-shakeable]: https://img.shields.io/badge/Tree%20Shakeable-d4e157
  [side-effect free]: https://img.shields.io/badge/Side%20Effect%20Free-ffeb3b
  [license]: https://img.shields.io/badge/License-MIT-yellow.svg
  [1]: https://github.com/chintan9/plyr-react/blob/master/LICENSE
  [downloads]: https://img.shields.io/npm/dt/plyr-react.svg
  [2]: https://npmjs.org/package/plyr-react
  [bundle size]: https://img.shields.io/bundlephobia/minzip/plyr-react.svg
  [3]: https://bundlephobia.com/result?p=plyr-react
  [Language grade: JavaScript]: https://img.shields.io/lgtm/grade/javascript/g/chintan9/plyr-react.svg?logo=lgtm&logoWidth=18
  [4]: https://lgtm.com/projects/g/chintan9/plyr-react/context:javascript
  [contributors badge]: https://img.shields.io/badge/all_contributors-3-orange.svg
  [5]: #contributors


## Installation

```sh
# NPM
npm install plyr-react@next

# Yarn
yarn add plyr-react@next
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