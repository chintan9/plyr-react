PlyrComponent examples:

###### PlyrComponent Default
```js
import { PlyrComponent } from 'plyr-react';

<PlyrComponent />
```

###### PlyrComponent Youtube
```js
import { PlyrComponent } from 'plyr-react';

<PlyrComponent sources={ {
      sources: {
        type: "video",
        sources: [
          {
            src: "ZPt9dJw1Dbw",
            provider: "youtube"
          }
        ]
      }
    }}/>
```