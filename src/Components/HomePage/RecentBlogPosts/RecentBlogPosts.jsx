
import recentBlogPosts from '../../../JSON/recentBlogPost.json';

console.log(recentBlogPosts)

function RecentBlogPosts() {
    return (
        <>

            <div className=" grid md:grid-cols-2 lg:grid-cols-3 ">
                {
                    recentBlogPosts.map(recentBlogPost => (
                        <div className="card w-96 bg-base-100 shadow-xl">
                            <figure><img src={recentBlogPost.Image} className='bg-[#353535]' alt="" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{recentBlogPost.Title}</h2>
                                <p>{recentBlogPost.ShortDescription}</p>
                            
                                <div className="card-actions justify-start">
                                    <div className="badge badge-outline p-4 ">Category: {recentBlogPost.Category}</div>
                                </div>
                                <div className="card-actions justify-center">
                                    <button className="btn btn-primary">Details</button>
                                    <button className="btn btn-primary">Wishtlist</button>
                                </div>
                            </div>
                        </div>
                    ))
                }
    
            </div>

        </>
    )
}

export default RecentBlogPosts