/**
 * Derived from https://github.com/tdaines/plyr/blob/296-typescript-definitions/plyr.d.ts
 */
import { optimize } from 'webpack'

declare module 'plyr' {
  export default class Plyr {
    constructor(className: string, options?: Options): Plyr
    getContainer(): HTMLElement
    getMedia(): HTMLMediaElement | HTMLDivElement
    getEmbed(): any
    getType(): string
    isReady(): boolean
    on(event: string, callback: (this: this, event: CustomEvent) => void): void
    on(
      event: string[],
      callback: (this: this, event: CustomEvent) => void
    ): void
    on(event: 'setup', callback: (this: this, event: CustomEvent) => void): void
    on(event: 'ready', callback: (this: this, event: CustomEvent) => void): void
    on(
      event: 'canplay',
      callback: (this: this, event: CustomEvent) => void
    ): void
    on(
      event: 'canplaythrough',
      callback: (this: this, event: CustomEvent) => void
    ): void
    on(
      event: 'emptied',
      callback: (this: this, event: CustomEvent) => void
    ): void
    on(event: 'ended', callback: (this: this, event: CustomEvent) => void): void
    on(event: 'error', callback: (this: this, event: CustomEvent) => void): void
    on(
      event: 'loadeddata',
      callback: (this: this, event: CustomEvent) => void
    ): void
    on(
      event: 'loadedmetadata',
      callback: (this: this, event: CustomEvent) => void
    ): void
    on(
      event: 'loadstart',
      callback: (this: this, event: CustomEvent) => void
    ): void
    on(event: 'pause', callback: (this: this, event: CustomEvent) => void): void
    on(event: 'play', callback: (this: this, event: CustomEvent) => void): void
    on(
      event: 'playing',
      callback: (this: this, event: CustomEvent) => void
    ): void
    on(
      event: 'progress',
      callback: (this: this, event: CustomEvent) => void
    ): void
    on(
      event: 'seeked',
      callback: (this: this, event: CustomEvent) => void
    ): void
    on(
      event: 'seeking',
      callback: (this: this, event: CustomEvent) => void
    ): void
    on(
      event: 'stalled',
      callback: (this: this, event: CustomEvent) => void
    ): void
    on(
      event: 'timeupdate',
      callback: (this: this, event: CustomEvent) => void
    ): void
    on(
      event: 'volumechange',
      callback: (this: this, event: CustomEvent) => void
    ): void
    on(
      event: 'waiting',
      callback: (this: this, event: CustomEvent) => void
    ): void
    on(
      event: 'enterfullscreen',
      callback: (this: this, event: CustomEvent) => void
    ): void
    on(
      event: 'exitfullscreen',
      callback: (this: this, event: CustomEvent) => void
    ): void
    on(
      event: 'captionsenabled',
      callback: (this: this, event: CustomEvent) => void
    ): void
    on(
      event: 'captionsdisabled',
      callback: (this: this, event: CustomEvent) => void
    ): void
    on(
      event: 'destroyed',
      callback: (this: this, event: CustomEvent) => void
    ): void
    play(): void
    pause(): void
    stop(): void
    restart(): void
    rewind(seekTime?: number): void
    forward(seekTime?: number): void
    seek(seekTime: number): void
    getCurrentTime(): number
    getDuration(): number
    getVolume(): number
    isMuted(): boolean
    setVolume(volume?: number): void
    togglePlay(toggle?: boolean): void
    toggleMute(muted?: boolean): void
    toggleCaptions(show?: boolean): void
    toggleFullscreen(event: Event): void
    isFullscreen(): boolean
    support(mimeType: string): boolean
    poster(url: string): void
    destroy(): void
    source: SourceInfo
    // source(): string
    // source(source: SourceInfo): void
  }
  interface il8n {
    restart?: string
    rewind?: string
    play?: string
    pause?: string
    forward?: string
    buffered?: string
    currentTime?: string
    duration?: string
    volume?: string
    toggleMute?: string
    toggleCaptions?: string
    toggleFullscreen?: string
  }
  var il8n: {
    prototype: il8n
  }
  interface KeyboardShortcuts {
    focused?: boolean
    global?: boolean
  }
  var KeyboardShortcuts: {
    prototype: KeyboardShortcuts
  }
  interface Tooltips {
    controls?: boolean
    seek?: boolean
  }
  var Tooltips: {
    prototype: Tooltips
  }
  interface FullScreenOptions {
    enabled?: boolean
    fallback?: boolean
    allowAudio?: boolean
  }
  var FullScreenOptions: {
    prototype: FullScreenOptions
  }
  interface Captions {
    defaultActive?: boolean
  }
  var Captions: {
    prototype: Captions
  }
  interface Storage {
    enabled?: boolean
    key?: string
  }
  var Storage: {
    prototype: Storage
  }
  export interface Options {
    autoplay?: boolean
    captions?: Captions
    classes?: Object
    clickToPlay?: boolean
    controls?: string[]
    debug?: boolean
    disableContextMenu?: boolean
    displayDuration?: boolean
    duration?: number | null
    enabled?: boolean
    fullscreen?: FullScreenOptions
    hideControls?: boolean
    html?: string
    iconPrefix?: string
    iconUrl?: string
    il8n?: il8n
    keyboardShortcuts?: KeyboardShortcuts
    listeners?: Object
    loadSprite?: boolean
    seekTime?: number
    selectors?: Object
    showPosterOnEnd?: boolean
    storage?: Storage
    tooltips?: Tooltips
    volume?: number
  }
  var Options: {
    prototype: Options
  }
  interface Source {
    src: string
    type: string
  }
  var Source: {
    prototype: Source
  }
  interface Track {
    kind: string
    label: string
    srcLang?: string
    src: string
    default?: boolean
  }
  var Track: {
    prototype: Track
  }
  interface SourceInfo {
    type: 'video' | 'audio' | string
    title?: string
    sources: Source[]
    poster?: string
    tracks?: Track[]
  }
  var SourceInfo: {
    prototype: Source
  }
  interface Support {
    basic: boolean
    full: boolean
  }
  function setup(targets: NodeList, options: Options): Plyr[]
  function setup(targets: HTMLElement, options: Options): Plyr[]
  function setup(targets: HTMLElement[], options: Options): Plyr[]
  function setup(targets: string, options: Options): Plyr[]
  function setup(options: Options): Plyr[]
  function get(): Plyr[]
  function get(container: string): Plyr[]
  function supported(type?: string): Support
}
