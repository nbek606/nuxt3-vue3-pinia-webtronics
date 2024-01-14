<template lang="">
    <div class="login q-pa-md flex-center">
        <q-card class="q-pa-md" flat bordered>
            <Login 
                @auth="auth"
            />  
        </q-card>       
    </div> 
</template>
<script>

export default {
    setup () {
        const { $store } = useNuxtApp()
        
        const auth = async (username, password) => {
           $store.authentication({ username, password }).then(() => {
                navigateTo('/')
           })
        }

        return {
            auth,
            store: $store
        }
    }
}
</script>
<style lang="scss" scoped>
    .login {
        max-width: 400px;
        margin:  auto;
    }
</style>