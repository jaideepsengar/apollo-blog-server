export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Query = {
  __typename?: 'Query';
  _empty?: Maybe<Scalars['String']>;
  blogs: Array<Maybe<Blog>>;
  blog?: Maybe<Blog>;
  blogsByUser?: Maybe<Array<Maybe<Blog>>>;
  posts: Array<Maybe<Post>>;
  post?: Maybe<Post>;
  postByBlog?: Maybe<Array<Maybe<Post>>>;
  users: Array<Maybe<User>>;
  user?: Maybe<User>;
  comments: Array<Maybe<Comment>>;
  comment?: Maybe<Comment>;
  commentsByPost?: Maybe<Array<Maybe<Comment>>>;
};


export type QueryBlogArgs = {
  id: Scalars['ID'];
};


export type QueryBlogsByUserArgs = {
  id: Scalars['ID'];
};


export type QueryPostArgs = {
  id: Scalars['ID'];
};


export type QueryPostByBlogArgs = {
  blogId: Scalars['ID'];
};


export type QueryUserArgs = {
  id: Scalars['ID'];
};


export type QueryCommentArgs = {
  id: Scalars['ID'];
};


export type QueryCommentsByPostArgs = {
  postId: Scalars['ID'];
};

export type Mutation = {
  __typename?: 'Mutation';
  _empty?: Maybe<Scalars['String']>;
  createBlog?: Maybe<CreateBlogMutationResponse>;
};


export type MutationCreateBlogArgs = {
  blog?: Maybe<BlogInput>;
};

export type MutationResponse = {
  code: Scalars['String'];
  success: Scalars['Boolean'];
  message: Scalars['String'];
};

export type Blog = {
  __typename?: 'Blog';
  id: Scalars['ID'];
  title: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  user: User;
  blogPosts?: Maybe<Array<Maybe<Post>>>;
};

export type BlogInput = {
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  createdBy: Scalars['ID'];
};

export type CreateBlogMutationResponse = MutationResponse & {
  __typename?: 'CreateBlogMutationResponse';
  code: Scalars['String'];
  success: Scalars['Boolean'];
  message: Scalars['String'];
  blog?: Maybe<Blog>;
};

export type Post = {
  __typename?: 'Post';
  id: Scalars['ID'];
  title: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  blog: Blog;
};

export type User = {
  __typename?: 'User';
  id: Scalars['ID'];
  name: Scalars['String'];
  email: Scalars['String'];
  posts?: Maybe<Array<Maybe<Post>>>;
  blogs?: Maybe<Array<Maybe<Blog>>>;
};

export type Comment = {
  __typename?: 'Comment';
  id: Scalars['ID'];
  description?: Maybe<Scalars['String']>;
  post: Post;
};
