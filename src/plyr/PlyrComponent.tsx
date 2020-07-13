/* eslint-disable react/self-closing-comp */
import React, { useEffect, HTMLAttributes } from 'react'
/// <reference path="../plyrlib.d.ts" />
import PlyrLib, { Options, SourceInfo } from 'plyr'

export type PlyrProps = HTMLAttributes<HTMLVideoElement> & {
  source: SourceInfo
  options?: Options
}

export const Plyr: React.SFC<PlyrProps> = (props) => {
  const { options = null, source, ...rest } = props
  let player: PlyrLib
  useEffect(() => {
    player = new PlyrLib('.plyr-react', (options as any) ?? {})
    if (source) {
      player.source = source
    }
    return () => player?.destroy()
  })

  if (typeof window === 'undefined') return null

  return <video className="plyr-react plyr" {...rest}></video>
}

export default Plyr
