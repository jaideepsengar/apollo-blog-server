import UserAPI from './modules/user/service'
import BlogAPI from './modules/blog/service'
import PostAPI from './modules/post/service'
import CommentAPI from './modules/comment/service'

export default {
  userAPI: new UserAPI(),
  blogAPI: new BlogAPI(),
  postAPI: new PostAPI(),
  commentAPI: new CommentAPI()
}