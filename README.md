![npm](https://img.shields.io/npm/v/@markdijkstra/jsonplaceholder-dummy-data)

# jsonplaceholder-dummy-data

Basic package which shows random json data with less code pulled from jsonplaceholder.typicode.com

### How to use

```
jsonplaceholder_dummy_data.get('/posts', LIMIT_VALUE).then(function(data){
   console.log(data);
});
```

### Resources to use

* /posts	(100 posts)
* /posts/1
* /posts/1/comments
* /comments?postId=1
* /posts?userId=1
* /comments	(500 comments)
* /albums	(100 albums)
* /photos	(5000 photos)
* /todos    (200 todos)
* /users	(10 users)



