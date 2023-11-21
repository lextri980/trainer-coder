export const mainRouter = [
  {
    path: 'note/list',
    name: 'note-list',
    component: () => import("@/pages/note/NoteList.vue"),
    meta: {
      auth: true
    }
  },
  {
    path: 'link-card/list',
    name: 'link-card-list',
    component: () => import("@/pages/linkcard/LinkCard.vue"),
    meta: {
      auth: true
    }
  },
  {
    path: 'profile',
    name: 'profile',
    component: () => import("@/pages/profile/Profile.vue"),
    meta: {
      auth: true
    }
  },
]