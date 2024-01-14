<template lang="">
    <div>
        <div class="q-pa-md">
            <q-table
                grid
                grid-header
                flat bordered
                title="Тикеты"
                :rows="rows"
                :columns="columns"
                row-key="name"
                binary-state-sort
            >
                <template v-slot:item="props">
                    <div
                        class="q-pa-xs col-xs-12 col-sm-6 col-md-4 col-lg-3 grid-style-transition"
                    >   
                        <q-card bordered flat>
                            <q-list dense>
                                <q-card-section v-for="col in props.cols">     
                                    <q-item-section>                  
                                        <q-item-label caption>
                                            {{ col.label }}
                                        </q-item-label>
                                        <q-item-label 
                                            class="ellipsis"
                                            :class="{'cursor-pointer' : col.name == 'author'}"
                                            @click="navigateToProfile(col.name)"
                                        >
                                            {{ col.value }}
                                        </q-item-label>
                                    </q-item-section>      
                                 </q-card-section>
                            </q-list>
                            <q-separator />
                            <q-card-section>
                                <q-btn 
                                    color="primary"
                                    @click="navigateToTicketById(props.row.id)"
                                >
                                    Подробнее
                                </q-btn>
                            </q-card-section>
                        </q-card>
                    </div>
                </template>   
            </q-table>
        </div>
    </div>
</template>
<script>

import { useTicketColumns } from './TicketService'

export default {
    props: {
        tickets: {
            type: Array,
            required: true
        }
    },

    setup (props) {
        const rows = toRef(props, 'tickets')
        const columns = useTicketColumns

        const navigateToProfile = (name) => {
            if (name == 'author') {
                navigateTo('/profile')
            }
        }

        const navigateToTicketById = (id) => {
            navigateTo( '/tickets/' + id)
        }

        return {
            columns,
            rows,
            navigateToProfile,
            navigateToTicketById
        }
    }
}
</script>
<style lang="">
    
</style>