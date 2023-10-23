export async function getPostBySlug() {
  
let baseUrl = import.meta.env.API_URL
const res = await fetch(baseUrl + '/api/graphql', {
  method: 'POST',
  headers: {
  'Content-Type': 'application/json'
  },
  body: JSON.stringify({
  "query": "query MyQuery {blogPost(status: PUBLISHED) { path displayText subtitle author modifiedUtc publishedUtc createdUtc image { urls } markdownBody { html } } }"
  })
})

const jsonResponse = await res.json()

const posts = jsonResponse.data.blogPost;

  // return {
  //   props: {
  //     post
  //   }
  // }
  return posts
}

export default getPostBySlug;
