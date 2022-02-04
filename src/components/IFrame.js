//   {
//     id: 1,
//     title: "React Today and Tomorrow and 90% Cleaner React With Hooks",
//     embedUrl: "https://www.youtube.com/embed/dpw9EHDh2bM",
//     views: 730707,
//     createdAt: "Oct 26, 2018",
//     upvotes: 9210,
//     downvotes: 185,
//     comments: [
//       {
//         id: 1,
//         user: "duanebot",
//         comment: "first!",
//       },
//       {
//         id: 2,
//         user: "gaeron",
//         comment: "What a great tutorial!",
//       },
//     ],
//   };

import { useState } from "react";
import Comments from "./Comments";
import LikeButtons from "./LikeButtons";

const IFrame = ({
  title,
  views,
  embedUrl,
  createdAt,
  upvotes,
  downvotes,
  comments,
}) => {
  const [isCommentShown, setIsCommentShown] = useState(false);

  return (
    <div className="ifram-div">
      <iframe
        width="919"
        height="525"
        src={embedUrl}
        frameBorder="0"
        allowFullScreen
        title="Thinking in React"
      />
      <h1>{title}</h1>
      <p>{`${views} Views | Uploaded ${createdAt}`}</p>
      <LikeButtons upvotes={upvotes} downvotes={downvotes} />
      <button onClick={() => setIsCommentShown((prev) => !prev)}>
        Hide Comments
      </button>
      {isCommentShown && (
        <div>
          <h2>{`${comments.length} Comments`}</h2>
          {comments?.map((comment) => {
            console.log(comment);
            return (
              <div>
                <Comments {...comment} />
                <LikeButtons {...comment} />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default IFrame;
