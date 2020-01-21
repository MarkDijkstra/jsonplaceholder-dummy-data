# jsonplaceholder-dummy-data

![npm](https://img.shields.io/npm/v/@markdijkstra/jsonplaceholder-dummy-data)
![NPM](https://img.shields.io/npm/l/@markdijkstra/jsonplaceholder-dummy-data)
![GitHub issues](https://img.shields.io/github/issues/MarkDijkstra/jsonplaceholder-dummy-data)
![CircleCI](https://img.shields.io/circleci/build/github/MarkDijkstra/jsonplaceholder-dummy-data)
![Website](https://img.shields.io/website?url=https%3A%2F%2Fjsonplaceholder.typicode.com%2F)

Basic package which shows random json data with less code pulled from [https://jsonplaceholder.typicode.com](https://jsonplaceholder.typicode.com)


### How install


```npm
npm i @markdijkstra/jsonplaceholder-dummy-data
```

### How to use

```
import {jsonplaceholderDummyData} from '@markdijkstra/jsonplaceholder-dummy-data'

jsonplaceholderDummyData.get('/posts', LIMIT_VALUE).then(function(data){
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