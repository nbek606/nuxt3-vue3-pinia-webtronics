import routeList from "./routeList";

export const useBreadcrumbs = (dynamicRouteName = '') => {
    const route = useRoute()
    let breadcrumbs = []
   
    watch(() => ({
        path: route.path,
        name: route.name,
        meta: route.meta,
        matched: route.matched,
    }), (route) => {
        breadcrumbs = getBreadcrumbs(route.path, dynamicRouteName)
    }, {
        immediate: true,
    })
 
    return breadcrumbs
}

const getBreadcrumbs = (path, dynamicRouteName) => {
    
    const homePage = { name: 'Главная', path: '/' };
    let breadcrumbs = [homePage]

    if (path === '/') {
        return breadcrumbs
    }
    
    breadcrumbs = [...breadcrumbs, ...generateBreadcrumbs(path)]

    if (dynamicRouteName !== '') {
        breadcrumbs.push({ 
            name: dynamicRouteName, 
            path: '' 
        })
    }

    return breadcrumbs
} 

const generateBreadcrumbs = (path) => {
    const pathList = path.split('/')

    const newBreadcrumbs = []

    pathList.forEach(pathItem => {
        if (routeList[pathItem]) {
            newBreadcrumbs.push({
                name: routeList[pathItem],
                path: pathItem
            })
        }
    });
    
    return newBreadcrumbs
}