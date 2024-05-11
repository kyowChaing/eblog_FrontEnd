import { Link } from 'react-router-dom';
import recentBlogPosts from '../../JSON/recentBlogPost.json';
import { Card } from "flowbite-react";


function WishList() {
  return (
    <>
     <div className=" grid md:grid-cols-2 lg:grid-cols-3 ">
                {
                    recentBlogPosts.map(recentBlogPost => (
                        <Card
                            className="max-w-sm"
                            imgAlt="Meaningful alt text for an image that is not purely decorative"
                            imgSrc={recentBlogPost.Image}
                        >
                            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                {recentBlogPost.Title}
                            </h5>
                            <p className="font-normal text-gray-700 dark:text-gray-400">
                                {recentBlogPost.ShortDescription}
                            </p>

                            <div className="mt-4 flex space-x-3 lg:mt-6">
                                <Link>
                                <a
                                    href="#"
                                    className="inline-flex items-center rounded-lg bg-cyan-700 px-4 py-2 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
                                >
                                    Details
                                </a>
                                </Link>
                                <Link>
                                <a
                                    href="#"
                                    className="inline-flex items-center rounded-lg border border-gray-300 bg-red-500 px-4 py-2 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
                                >
                                    Remove
                                </a>
                                </Link>
                            </div>
                        </Card>
                    ))
                }

            </div>
    
    </>
  )
}

export default WishList