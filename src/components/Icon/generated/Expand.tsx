import React from 'react'

function SvgExpand(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M10.293 12.293l1.415 1.414L6.418 19h3.583v2H4.5c-.828 0-1.5-.673-1.5-1.5V14h2v3.59l5.292-5.297zM19.5 3c.827 0 1.5.673 1.5 1.5V10h-2V6.418l-5.293 5.29-1.414-1.416L17.59 5H14V3z"
      />
    </svg>
  )
}

export default SvgExpand