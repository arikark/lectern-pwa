import Link from 'next/link'

export interface PathwayCardProps {
  slug: string
  title: string
  description: string
}

export default function PathwayCard({
  slug,
  title,
  description,
}: PathwayCardProps) {
  const href = `/pathways/${slug}`
  return (
    <Link href={href} className="w-40 rounded-md bg-slate-300 font-mono">
      <h1 className="w-full rounded-t-md p-2">{title}</h1>
      <div className="p-2 text-xs"> {description}</div>
    </Link>
  )
}
