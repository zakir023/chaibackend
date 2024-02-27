require('dotenv').config()
const express = require('express')
const app = express()
const githubData={
      "login": "zakir023",
      "id": 130754267,
      "node_id": "U_kgDOB8sm2w",
      "avatar_url": "https://avatars.githubusercontent.com/u/130754267?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/zakir023",
      "html_url": "https://github.com/zakir023",
      "followers_url": "https://api.github.com/users/zakir023/followers",
      "following_url": "https://api.github.com/users/zakir023/following{/other_user}",
      "gists_url": "https://api.github.com/users/zakir023/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/zakir023/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/zakir023/subscriptions",
      "organizations_url": "https://api.github.com/users/zakir023/orgs",
      "repos_url": "https://api.github.com/users/zakir023/repos",
      "events_url": "https://api.github.com/users/zakir023/events{/privacy}",
      "received_events_url": "https://api.github.com/users/zakir023/received_events",
      "type": "User",
      "site_admin": false,
      "name": "zakir abbas",
      "company": null,
      "blog": "",
      "location": null,
      "email": null,
      "hireable": null,
      "bio": null,
      "twitter_username": null,
      "public_repos": 21,
      "public_gists": 0,
      "followers": 0,
      "following": 1,
      "created_at": "2023-04-14T10:31:55Z",
      "updated_at": "2024-02-01T08:09:21Z"
    }

const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/twitter',(req,res)=>{
      res.send('zakirdotcom')
})
app.get('/login',(req,res)=>{
      res.send("<h1> please login at chai aur code <h1>")
})
app.get('/youtube',(req,res)=>{
      res.send("<h2> chai aur code <h2>")
})

app.get('/github',(req,res)=>{
      res.json(githubData);
})




app.listen(process.env.port, () => {
  console.log(`Example app listening on port ${port}`)
}) 