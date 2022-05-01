export const ROUTES = {
  HOME: "/",
  ERROR: "*",
  SIGN_IN: "/signin",
  SIGN_UP: "/register",
  STUDY_ROUTE: "/studyRoute", //lộ trình
  LEARNING: "/learning", //khóa đang học
  DOCUMENT: "/document", //tài liệu lập trình
  BLOG: "/blog",
  INFO: "/about", //thông tin trang web
  JOB: "/job", //cơ hội việc làm
  CALL: "/call", //liên hệ
  POSTSAVES: "/me/bookmark/posts",
  EDITPOST: "/edit-post/:link",
  NEWPOST: "/new-post",
  ACCOUNT: "/account",
  ADMIN: "/admin",
  UNLEARN: "/course/:link", //khóa chưa học
  LEARN: "/learn/:link/:id", //khóa đang học
  RULES: "/rules", //điều khoản
  RULES1: "/rules1", //điều khoản nhỏ
  SECURITY: "/security",
  BLOGTOPIC: "/topic/:id",
  LESSON: "/lesson/:id",
  EXERCISE: "/exercise/:id",
  FORGOT: "/forgotPassword",
  RESETPASS: "/forgot-password/:token",
  ACTIVE: "/active/:token",
  SEARCH: "/search/:id",
};
