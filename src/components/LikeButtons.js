import React, { useState } from "react";

const LikeButtons = ({ upvotes = 0, downvotes = 0 }) => {
  const [votes, setVotes] = useState(() => ({
    upvotes: upvotes,
    downvotes: downvotes,
  }));
  return (
    <div>
      <button
        onClick={() =>
          setVotes(() => ({
            downvotes: downvotes,
            upvotes: upvotes + 1,
          }))
        }
      >{`${votes.upvotes} 👍`}</button>
      <button
        onClick={() =>
          setVotes(() => ({
            downvotes: downvotes + 1,
            upvotes: upvotes,
          }))
        }
      >{`${votes.downvotes} 👎`}</button>
    </div>
  );
};

export default LikeButtons;
