import React from 'react'
import Banner from './Banner/Banner'
import RecentBlogPosts from './RecentBlogPosts/RecentBlogPosts'
import NewsLetter from './NewsLetter/NewsLetter'

function HomePage() {
  return (
    <>
      <Banner></Banner>
      <RecentBlogPosts></RecentBlogPosts>
      <NewsLetter></NewsLetter>
    </>
  )
}

export default HomePage