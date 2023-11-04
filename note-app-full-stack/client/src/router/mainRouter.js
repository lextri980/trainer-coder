export const mainRouter = [
  {
    path: 'note/list',
    name: 'note-list',
    component: () => import("@/pages/note/NoteList.vue"),
    meta: {
      auth: true
    }
  },
]