<template>
    <div>
      <Breadcrumbs 
        :list="breadcrumbs"
      />
      <Tickets 
        :tickets="ticketsList"
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

      let ticketsList = toRef([])

      onMounted (async() => {
        $store.getTickets().then((response) => {
          ticketsList.value = response
        })
      })
    
      return {
        breadcrumbs,
        ticketsList
      }
    }
}
</script>
<style>
    
</style>