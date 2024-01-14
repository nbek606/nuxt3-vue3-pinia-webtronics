<template>
    <div class="q-pa-md breadcrumbs">
        <q-toolbar class="breadcrumbs___toolbar q-my-md">
            <q-breadcrumbs>
                <q-breadcrumbs-el 
                    class="cursor-pointer"
                    v-for="item in list"
                    :key="item.name"
                    :label="item.name"
                    @click="navigateToPage(item.path)"
                />
            </q-breadcrumbs>
            <q-space />
            <div 
                class="cursor-pointer"
                @click="logout"
            >
                Выход
            </div>    
        </q-toolbar>
      </div>
</template>
<script>

export default {
    props: {
        list: {
            type: [Array,Object],
            required: true
        }
    },

    setup (props) {
        const list = toRef(props, 'list')
        const { $store } = useNuxtApp()

        const navigateToPage = (path) => {
            navigateTo({
                path: ['', '/'].includes(path) ? '/': '/'+ path 
            })
        }

        const logout = async () => {
            $store.logout().then(() => {
                navigateTo('/login')
            })
        }

        return {
            list,
            logout,
            navigateToPage
        }
    }
}
</script>
<style lang="scss" scoped>
    .breadcrumbs {
        &___toolbar {
            background-color: #f0f1f4;
            color: #212529;
        }
    }
</style>