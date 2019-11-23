import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/Index'
import LoginReg from './views/LoginReg'
import Account from './views/Account'
import Details from './views/Details'
import EyePalettes from './views/EyePalettes'
import NotFound from './views/NotFound'

Vue.use(Router)

export default new Router({
  routes: [
    {path:"/",component:Index},
    {path:"",component:Index},
    {path:"/login",component:LoginReg},
    {path:'/account',component:Account},
    {path:"/eyepalettes",component:EyePalettes},
    {path:"/details/:pid",component:Details,props:true},
    {path:"*",component:NotFound},
    
  ]
})
