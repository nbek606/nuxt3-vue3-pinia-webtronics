export default defineNuxtRouteMiddleware((to, from) => {
  const { $store } = useNuxtApp();
  const auth = $store.$state.auth
  
  if(!auth && to.path !== '/login'){ 
    return navigateTo('/login')
  }
  else if (auth && to.path === '/login'){
    return navigateTo('/')  
  }
  
  return
})