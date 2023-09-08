import { ComponentProps } from 'react'

type PrefixProps = ComponentProps<'div'>

export function Prefix(props: PrefixProps) {
  return <div {...props} />
}

type ControlProps = ComponentProps<'input'>

export function Control(props: ControlProps) {
  return (
    <input
      className="w-full border-0 bg-transparent p-0 text-zinc-900 placeholder-zinc-600"
      {...props}
    />
  )
}

type RootProps = ComponentProps<'input'>

export function Root(props: RootProps) {
  return (
    <div
      className="mx-2 flex items-center gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm"
      {...props}
    />
  )
}
