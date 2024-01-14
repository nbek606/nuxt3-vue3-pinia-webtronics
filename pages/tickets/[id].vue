<template lang="">
    <Breadcrumbs 
        :list="breadcrumbs"
    />
    <TicketById 
        :ticket="ticket"
    />
</template>
<script>

import { useBreadcrumbs } from '../helpers/useBreadcrumbs'
import Breadcrumbs from '~/components/widgets/Breadcrumbs.vue'
import TicketById from '~/components/tickets/TicketById.vue'

export default {
    components: {
      Breadcrumbs,
      TicketById
    },

    setup () {
        const route = useRoute()
        const { $store } = useNuxtApp()
        const ticket = toRef({})
        const breadcrumbs = toRef({})

        onMounted (async() => {
            await $store.getTicketById(route.params.id).then((response) => {
                ticket.value = response
            })

            breadcrumbs.value = useBreadcrumbs(ticket.value.title)
        })
        return {
            breadcrumbs,
            ticket
        }
    }
}
</script>
<style lang="">
    
</style>