import UserAPI from './user/service'
import BlogAPI from './blog/service'
import PostAPI from './post/service'

export default {
  userAPI: new UserAPI(),
  blogAPI: new BlogAPI(),
  postAPI: new PostAPI()
}