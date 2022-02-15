export default {
    state: {
        isCollapse: false,
        isShow: false,
        menu: [
            {
              path: "/",
              name: "home",
              label: "首页",
              icon: "s-home",
            },
            {
              path: "/mall",
              name: "mall",
              label: "商品管理",
              icon: "video-play",
            },
            {
              path: "/user",
              name: "user",
              label: "用户管理",
              icon: "user",
            },
            {
              label: "其他",
              icon: "location",
              children: [
                {
                  path: "/page1",
                  name: "page1",
                  label: "页面1",
                  icon: "setting",
                },
                {
                  path: "/page2",
                  name: "page2",
                  label: "页面2",
                  icon: "setting",
                },
              ],
            },
          ]
    },
    mutations: {
        collapseMenu(state) {
            state.isCollapse = !state.isCollapse
        },
        showMain(state) {
            state.isShow = !state.isShow
        },
        showMenuUser(state){
            state.menu.splice(2,2)
        }
    }
}