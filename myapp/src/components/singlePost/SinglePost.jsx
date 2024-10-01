import './singlepost.css';

function SinglePost() {
    return (
        <div className='singlePost'>
            <div className="singlePostWrapper">

                <img src="https://30.media.tumblr.com/tumblr_l7wionYFnz1qzl7pko1_500.jpg" alt="" className='singlePostImg' />

                <h1 className="singlePostTitle">
                    Lorem ipsum dolor sit amet.
                    <div className="singlePostEdit">
                        <i className="singlePostIcon fa-solid fa-pen-to-square"></i>
                        <i className="singlePostIcon fa-solid fa-trash"></i>
                    </div>
                </h1>

                <div className="singlePostInfo">
                    <span className='singlePostAuthor'>
                        Author : <b> Mona </b>
                    </span>
                    <span className='singlePostDate'>
                        1 hour ago
                    </span>
                </div>

                <p className='singlePostDesc'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero ex inventore quis rem, cumque laborum ad eius voluptas provident vero corrupti quod obcaecati nesciunt sit? Provident eius numquam dolorum possimus.
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi maxime deleniti voluptates. Mollitia ipsum officiis qui, cumque esse sequi, tenetur in voluptatem iure debitis hic reprehenderit recusandae suscipit quidem laudantium.
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor quas quia, ea ducimus, nisi quibusdam neque illo modi inventore eveniet minus non fuga architecto assumenda nihil in molestiae corporis voluptate.
                </p>
            </div>
        </div>
    )
}

export default SinglePost;
