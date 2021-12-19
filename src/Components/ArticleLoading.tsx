import React from 'react'
import ContentLoader from 'react-content-loader'

function ArticleLoading() {
    return (
    <div>
      <ContentLoader
        speed={3}
        width={320}
        height={340}
        viewBox="0 0 320 460"
        backgroundColor="#aaaaaa"
        foregroundColor="#cccccc">
        <rect x="6" y="200" rx="0" ry="0" width="320" height="80" />
        <rect x="6" y="300" rx="0" ry="0" width="150" height="20" />
        <rect x="6" y="340" rx="0" ry="0" width="320" height="200" />
      </ContentLoader>
    </div>
      
    )
}

export default ArticleLoading
