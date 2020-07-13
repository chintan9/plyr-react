/* eslint-disable react/self-closing-comp */
import React, { useEffect, HTMLAttributes } from 'react'
/// <reference path="../plyrlib.d.ts" />
import PlyrLib, { Options } from 'plyr'

export type PlyrProps = HTMLAttributes<HTMLDivElement> & {
  options?: Options
}

export const Plyr: React.SFC<PlyrProps> = (props) => {
  const { options = null } = props
  let player: PlyrLib
  useEffect(() => {
    player = new PlyrLib('.plyr-react', (options as any) ?? {})
    player.source = options?.source as any
    return () => player?.destroy()
  })

  if (typeof window === 'undefined') return <></>

  return <video className="plyr-react plyr"></video>
}

export default Plyr
