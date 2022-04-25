---
id: advanced
title: Advanced
sidebar_position: 1
---

## Using `ref`

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