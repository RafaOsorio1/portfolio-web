import React from "react";
import { Cardpost } from "./Cardpost";
import "./postsrecents.css";

export const PostsRecents = () => {
  return (
    <section className="cont-posts">
      <div className="post-cont-text">
        <h3>
          Recents <span className="word">post</span>
        </h3>
        <h4>
          View all post <span className="icon-view-all"></span>
        </h4>
      </div>
      <div className="cont-card">
        <Cardpost img="../src/assets/image-post.webp"></Cardpost>
        <Cardpost img="../src/assets/image-post2.webp"></Cardpost>
        <Cardpost img="../src/assets/image-post3.webp"></Cardpost>
        <Cardpost img="../src/assets/image-post4.webp"></Cardpost>
      </div>
    </section>
  );
};
