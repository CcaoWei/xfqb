import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Layout from "../components/Layout.vue";

Vue.use(VueRouter);

const tabs = {
  service: 6,
  about: 1,
  best: 5,
  purchase: 1,
  branch: 1,
  statute: 2,
  notice: 2
};
const tabsNum = function(name) {
  const num = tabs[name];
  let child = [];
  for (let i = 0; i < num; i++) {
    const obj = {
      path: (i + 1).toString(),
      name: name + (i + 1).toString(),
      component: () =>
        import(
          /* webpackChunkName: "views" */ "../views/" +
            (name.charAt(0).toUpperCase() + name.slice(1)) +
            ".vue"
        )
    };
    child.push(obj);
  }
  return child;
};
// console.log(tabsNum('service'))
// for (let key in tabs) {
//   const obj = {
//     path: '/'+key,
//     name: key,
//     redirect: '/'+key+'/1',
//     component: Layout,
//     children: tabsNum(key),
//   }
//   // routes.push(obj);
// }
const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/about",
    name: "about",
    redirect: "/about/1",
    component: Layout,
    children: tabsNum("about")
    // component: () =>
    //   import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/best",
    name: "best",
    redirect: "/best/1",
    component: Layout,
    children: tabsNum("best")
    // component: () =>
    //   import(/* webpackChunkName: "best" */ "../views/Best.vue")
  },
  {
    path: "/notice",
    name: "notice",
    redirect: "/notice/1",
    component: Layout,
    children: tabsNum("notice")
    // component: () =>
    //   import(/* webpackChunkName: "notice" */ "../views/Notice.vue")
  },
  {
    path: "/purchase",
    name: "purchase",
    redirect: "/purchase/1",
    component: Layout,
    children: tabsNum("purchase")
    // component: () =>
    //   import(/* webpackChunkName: "purchase" */ "../views/Purchase.vue")
  },
  {
    path: "/service",
    name: "service",
    redirect: "/service/1",
    component: Layout,
    children: tabsNum("service")
    // component: () =>
    //   import(/* webpackChunkName: "service" */ "../views/Service.vue")
  },
  {
    path: "/statute",
    name: "statute",
    redirect: "/statute/1",
    component: Layout,
    children: tabsNum("statute")
    // component: () =>
    //   import(/* webpackChunkName: "statute" */ "../views/Statute.vue")
  },
  {
    path: "/branch",
    name: "branch",
    redirect: "/branch/1",
    component: Layout,
    children: tabsNum("branch")
    // component: () =>
    //   import(/* webpackChunkName: "branch" */ "../views/Branch.vue")
  },
  {
    path: "/detail",
    name: "detail",
    component: () =>
      import(/* webpackChunkName: "detail" */ "../views/Detail.vue")
  },
  {
    path: "/apply",
    name: "apply",
    component: () =>
      import(/* webpackChunkName: "detail" */ "../views/Apply.vue")
  }
];
// console.log(routes)
const router = new VueRouter({
  // mode: 'history',
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  }
});

export default router;
