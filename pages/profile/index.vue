<template lang="">
    <div>
        <Breadcrumbs 
            :list="breadcrumbs"
        />
        <Profile
            :profile="profile"
        />
    </div>
</template>
<script>

import { useBreadcrumbs } from '../helpers/useBreadcrumbs'
import Breadcrumbs from '~/components/widgets/Breadcrumbs.vue'

export default {
    components: {
        Breadcrumbs
    },

    setup () {
        const breadcrumbs = useBreadcrumbs()

        const { $store } = useNuxtApp()
        
        const profile = toRef($store.getUser)

        return {
            breadcrumbs,
            profile
        }
    }    
}
</script>
<style lang="">
    
</style>