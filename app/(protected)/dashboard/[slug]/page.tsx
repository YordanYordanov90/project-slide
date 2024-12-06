import React from 'react'

type Props = {
    params: {slug: string}
}

const page = ({params: {slug}}: Props) => {
  return (
    <div>Dashboard/{slug}  </div>
  )
}

export default page