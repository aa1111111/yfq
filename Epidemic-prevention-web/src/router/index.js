import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
import Layout from "@/layout";

export const constantRoutes = [
    {
        path: '/',
        name:'login',
        component: () => import("@/views/login/index"),
    },
    {
      path: "/",
      redirect: "/index",
      component: Layout,
      children: [
        {
          path: "index",
          name: "index",
          component: () => import("@/views/index/index"),
          meta: { title: "首页", icon: "index" }
        }
      ]
    },
    {
      path: "/signUp",
    name: "signUp",
    component: () => import("@/views/login/signUp"),
    meta: { title: "注册", icon: "index" }
    },
    {
      path: "/DailyClock",
      redirect: "/DailyClock/dcindex",
      component: Layout,
  
      meta: { title: "每日健康管理", icon: "DailyClock", requireAuth: true },
      children: [
        {
          path: "/dcindex",
          name: "dcindex",
  
          component: () => import("@/views/DailyClock/dcindex"),
          meta: { title: "每日健康打卡", requireAuth: true }
        },
      ]
    },
    {
      path: "/AuditInfor",
      redirect: "/AuditInfor/hisJouIndex",
      component: Layout,
  
      meta: { title: "审核信息管理", icon: "AuditInfor", requireAuth: true },
      children: [
        {
          path: "/hisJouIndex",
          name: "hisJouIndex",
  
          component: () => import("@/views/AuditInfor/hisJouIndex"),
          meta: { title: "历史行程管理", requireAuth: true }
        },
        {
          path: "/goReportIndex",
          name: "goReportIndex",
  
          component: () => import("@/views/AuditInfor/goReportIndex"),
          meta: { title: "外出报备管理", requireAuth: true }
        },
        {
          path: "/returnApplyIndex",
          name: "returnApplyIndex",
  
          component: () => import("@/views/AuditInfor/returnApplyIndex"),
          meta: { title: "复工申请管理", requireAuth: true }
        },
      ]
    },
    {
      path: "/",
      redirect: "/realTime/rtindex",
      component: Layout,
      children: [
        {
          path: "/rtindex",
          name: "rtindex",
          component: () => import("@/views/realTime/rtindex"),
          meta: { title: "实时疫情状态" }
        }
      ]
    },
    {
      path: "/",
      redirect: "/NoticeMan/noticeIndex",
      component: Layout,
      children: [
        {
          path: "/noticeIndex",
          name: "noticeIndex",
          component: () => import("@/views/NoticeMan/noticeIndex"),
          meta: { title: "通知公告管理" }
        }
      ]
    },
    {
      path: "/",
      redirect: "/identityPage/identityIndex",
      component: Layout,
      children: [
        {
          path: "/identityIndex",
          name: "identityIndex",
          component: () => import("@/views/identityPage/identityIndex"),
          meta: { title: "身份认证" }
        }
      ]
    },
    {
      path: "/",
      redirect: "/DailyClock/userDailyIndex",
      component: Layout,
      children: [
        {
          path: "/userDailyIndex",
          name: "userDailyIndex",
          component: () => import("@/views/DailyClock/userDailyIndex"),
          meta: { title: "身份认证" }
        }
      ]
    },
    {
      path: "/",
      redirect: "/noticePage/announceIndex",
      component: Layout,
      children: [
        {
          path: "/announceIndex",
          name: "announceIndex",
          component: () => import("@/views/noticePage/announceIndex"),
          meta: { title: "通知公告" }
        }
      ]
    },
    {
      path: "/",
      redirect: "/gooutPage/gooutIndex",
      component: Layout,
      children: [
        {
          path: "/gooutIndex",
          name: "gooutIndex",
          component: () => import("@/views/gooutPage/gooutIndex"),
          meta: { title: "通知公告" }
        }
      ]
    },
    {
      path: "/",
      redirect: "/personalPage/personalIndex",
      component: Layout,
      children: [
        {
          path: "/personalIndex",
          name: "personalIndex",
          component: () => import("@/views/personalPage/personalIndex"),
          meta: { title: "个人信息" }
        }
      ]
    },
    {
      path: "/",
      redirect: "/ReturnPage/returnIndex",
      component: Layout,
      children: [
        {
          path: "/returnIndex",
          name: "returnIndex",
          component: () => import("@/views/ReturnPage/returnIndex"),
          meta: { title: "复工申请" }
        }
      ]
    },
  ];
  const createRouter = () =>
  new Router({
    mode: "history", // require service support
    base: "/Epidemic-prevention-web/",
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes
  });

const router = createRouter();

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter();
  router.matcher = newRouter.matcher; // reset router
}

export default router;
