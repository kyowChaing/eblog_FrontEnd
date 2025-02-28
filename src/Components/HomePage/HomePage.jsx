import React from 'react'
import Banner from './Banner/Banner'
import RecentBlogPosts from './RecentBlogPosts/RecentBlogPosts'
import NewsLetter from './NewsLetter/NewsLetter'
import OurTechnology from '../ExtraSection/OurTechnology'

function HomePage() {
  return (
    <>
      <Banner></Banner>
      <RecentBlogPosts></RecentBlogPosts>
      <OurTechnology></OurTechnology>
      <NewsLetter></NewsLetter>
      
    </>
  )
}

export default HomePage