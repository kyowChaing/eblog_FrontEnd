
import { Link } from 'react-router-dom';
import recentBlogPosts from '../../../JSON/recentBlogPost.json';
import { Card } from "flowbite-react";



function RecentBlogPosts() {
    return (
        <>

            <div className=" grid md:grid-cols-2 lg:grid-cols-3 ">
                {
                    recentBlogPosts.map(recentBlogPost => (
                        // <div className="card w-96 bg-base-100 shadow-xl">
                        //     <figure><img src={recentBlogPost.Image} className='bg-[#353535]' alt="" /></figure>
                        //     <div className="card-body">
                        //         <h2 className="card-title">{recentBlogPost.Title}</h2>
                        //         <p>{recentBlogPost.ShortDescription}</p>

                        //         <div className="card-actions justify-start">
                        //             <div className="badge badge-outline p-4 ">Category: {recentBlogPost.Category}</div>
                        //         </div>
                        //         <div className="card-actions justify-center">
                        //             <button className="btn btn-primary">Details</button>
                        //             <button className="btn btn-primary">Wishtlist</button>
                        //         </div>
                        //     </div>
                        // </div>

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
                                    className="inline-flex items-center rounded-lg border border-gray-300 bg-white px-4 py-2 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
                                >
                                    Wishtlist
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

export default RecentBlogPosts