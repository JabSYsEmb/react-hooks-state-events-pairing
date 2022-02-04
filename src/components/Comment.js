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

const Comment = ({ user, comment }) => {
  return (
    <div>
      <h3>{user}</h3>
      <p>{comment}</p>
    </div>
  );
};

export default Comment;
