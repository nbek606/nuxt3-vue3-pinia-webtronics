<template lang="">
    <div class="q-pa-md">
        <q-card bordered flat>
            <q-card-section 
                v-for="col in columns"
                :key="col.value"
            >     
                <q-item-section>                  
                    <q-item-label caption>
                        {{ col.label }}
                    </q-item-label>
                    <q-item-label>
                        {{ col.value }}
                    </q-item-label>
                </q-item-section>      
            </q-card-section>
        </q-card>
    </div>
</template>
<script>

import { useTicketByIdColumns } from './TicketService'

export default {
    props: {
        ticket: {
            type: Object,
            required: true
        }
    },

    setup (props) {
        const ticket = toRef(props, 'ticket')

        const columns = computed(() => {
            return useTicketByIdColumns(ticket.value)
        })

        return {
            columns
        }
    }
}
</script>
<style lang="">
    
</style>