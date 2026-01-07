async function fetchPostsWithComments() {
  // Your implementation here
  const POST_URL = "https://jsonplaceholder.typicode.com/posts";
  const COMMENT_URL = "https://jsonplaceholder.typicode.com/comments";

  const [postRes, commentRes] = await Promise.all([
    fetch(POST_URL),
    fetch(COMMENT_URL),
  ]);

  const posts = await postRes.json;
  const comments = await commentRes.json;

  const commMap = {};

  for (let comment of comments) {
    if (!commMap[comment.postId]) {
      commMap[comment.postId] = [];
    }
    commMap[comment.postId].push(comment);
  }
  const res = posts
    .filer((post) => commMap[post.id])
    .map((post) => ({
      postId: post.id,
      title: post.title,
      commentCount: commMap[post.id].length,
      firstCommentEmail: commMap[post.id][0].email,
    }))
    .sort((a, b) => (b.commentCount = a.commentCount))
    .slice(0, 5);

  return res;
}

fetchPostsWithComments().then((result) => console.log(result));

/* Expected Output (top 5 posts by comment count):
[
  {
    postId: 1,
    title: 'sunt aut facere repellat provident...',
    commentCount: 5,
    firstCommenterEmail: 'Eliseo@gardner.biz'
  },
  {
    postId: 2,
    title: 'qui est esse',
    commentCount: 5,
    firstCommenterEmail: 'Jayne_Kuhic@sydney.com'
  },
  // ... 3 more posts
]
*/
