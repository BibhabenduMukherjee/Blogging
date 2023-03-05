import Link from 'next/link'
import React from 'react'

function CustomList({
    children,
    route
  }: {
    children: React.ReactNode
    route : string
  }) {
  return (
    <Link href={route}>{children}</Link>
  )
}

export default CustomList