// interface IPermission {
//     [k: string] : {
//       [k: string] : {
//         [k: string] : string | object,
//       }
//     };
//   }

export const PERMISSION = {
  home: {
    statistical: {
      title: "Thống kê",
      url: "/system/statistical",
      icon: "",
      menu: {},
    },
  },
  post: {
    edit: {
      title: "Thông tin",
      url: "/post/edit",
      icon: "",
      menu: {},
    },
  },
  course: {
    about: {
      title: "Thông tin",
      url: "/course/about",
      icon: "",
      menu: {},
    },
    exercise: {
      title: "Bài tập",
      url: "/course/exercise",
      icon: "",
      menu: {},
    },
  },
  user: {
    about: {
      title: "Thông tin",
      url: "/user/info",
      icon: "",
      menu: {},
    },
  },
};
