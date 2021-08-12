import React from 'react'
import ContentLoader from "react-content-loader"

const LoadingBlock = () => {
  return (
    <ContentLoader
      speed={2}
      width={280}
      height={460}
      viewBox="0 0 280 460"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <rect x="154" y="309" rx="0" ry="0" width="0" height="2"/>
      <rect x="0" y="268" rx="6" ry="6" width="280" height="26"/>
      <rect x="85" y="321" rx="0" ry="0" width="1" height="0"/>
      <rect x="0" y="304" rx="6" ry="6" width="280" height="84"/>
      <rect x="0" y="416" rx="6" ry="6" width="81" height="31"/>
      <circle cx="140" cy="120" r="120"/>
      <rect x="152" y="404" rx="22" ry="22" width="128" height="49"/>
    </ContentLoader>
  )
}

export default LoadingBlock