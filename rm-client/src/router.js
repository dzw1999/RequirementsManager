import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from './components/Login.vue'
import Home from './components/Home.vue'
import Welcome from './components/Welcome.vue'
import Profile from './components/Users/Profile.vue'
import Password from './components/Users/Password.vue'
import UserList from './components/Users/UserList.vue'
import ProjectList from './components/Projects/ProjectList.vue'
import FileList from './components/Tools/FileList.vue'
import ProjectHomepage from './components/Projects/ProjectHomepage.vue'
import AddProject from './components/Projects/AddProject.vue'
import AddFile from './components/Tools/AddFile.vue'
import ImportFileDoc from './components/Tools/ImportFileDoc.vue'
import ProjectProfile from './components/Projects/ProjectProfile.vue'
import ScopeInfo from './components/Tools/ScopeInfo.vue'
import SpreadInfo from './components/Tools/SpreadInfo.vue'
import AddSingleRequirement from './components/Requirements/AddSingleRequirement.vue'
import ImportRequirementDoc from './components/Requirements/ImportRequirementDoc.vue'
import RequirementHomepage from './components/Requirements/RequirementHomepage.vue'
import ArchiveProjectHomepage from './components/Projects/Archive/ProjectHomepage.vue'
import ArchiveRequirementHomepage from './components/Requirements/Archive/RequirementHomepage.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/login' },
  { path: '/login', component: Login },
  {
    path: '/home',
    component: Home,
    redirect: '/welcome',
    children: [
      { path: '/welcome', component: Welcome },
      { path: '/users/profile', component: Profile },
      { path: '/users/password', component: Password },
      { path: '/users/userList', component: UserList },
      { path: '/projects/projectList', component: ProjectList },
      { path: '/tools/fileList', component: FileList },
      { path: '/tools/importFileDoc', component: ImportFileDoc },
      { path: '/tools/scopeInfo', component: ScopeInfo },
      { path: '/tools/spreadInfo', component: SpreadInfo },
      {
        path: '/projects/projectHomepage',
        component: ProjectHomepage,
        children: [
          { path: '/requirements/requirementHomepage', component: RequirementHomepage }
        ]
      },
      { path: '/projects/addProject', component: AddProject },
      { path: '/tools/addFile', component: AddFile },
      { path: '/projects/projectProfile', component: ProjectProfile },
      {
        path: '/projects/archive/projectHomepage',
        component: ArchiveProjectHomepage,
        children: [
          { path: '/requirements/archive/requirementHomepage', component: ArchiveRequirementHomepage }
        ]
      },
      { path: '/requirements/addSingleRequirement', component: AddSingleRequirement },
      { path: '/requirements/importRequirementDoc', component: ImportRequirementDoc }
    ]
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  // ????????????????????????????????????
  if (to.path === '/login') return next()
  // ???session storage??????token
  const token = window.sessionStorage.getItem('token')
  // ????????????token?????????????????????
  if (!token) return next('/login')
  // ??????
  next()
})

export default router
