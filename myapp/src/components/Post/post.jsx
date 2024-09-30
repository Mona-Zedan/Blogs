import "./post.css";

export default function Post() {
  return (
    <div className="post">
      <img
        className="postImg"
        src="https://30.media.tumblr.com/tumblr_l7wionYFnz1qzl7pko1_500.jpg"
        alt=""
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
          </div>
          <span className="postTitle">
            Lorem ipsum dolor sit amet
          </span>
          <hr/>
          <span className="postDate">1 hour ago</span>
          </div>
          <p className="postDesc">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
            Ratione, at? Blanditiis consequatur nostrum omnis dolorum,
            corporis commodi iusto, deserunt pariatur voluptatibus id,
            qui officia suscipit sapiente. Facere animi id rerum.
            </p>
          </div>
  );
}