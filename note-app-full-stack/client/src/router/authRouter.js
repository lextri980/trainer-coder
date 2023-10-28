export const authRouter = [
  {
    path: 'login',
    name: 'login',
    component: () => import("@/pages/auth/Login.vue"),
    meta: {}
  },
  {
    path: 'register',
    name: 'register',
    component: () => import("@/pages/auth/Register.vue"),
    meta: {}
  },
]