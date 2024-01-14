<template>
   <div class="q-pa-md">
        <div class="q-pa-md flex-center">
            <q-card class="q-gutter-md q-pr-md q-pb-md profile" bordered flat >  
                <div class="text-h4 text-center q-pb-md q-pt-md">
                    Профиль
                </div>   
                <q-input 
                    v-model="profile.first_name"
                    dense outlined
                    label="Имя"
                />
                <q-input 
                    v-model="profile.last_name"
                    dense outlined
                    label="Фамилия"
                />

                <q-input mask="date" dense outlined v-model="profile.brith_day">
                    <template v-slot:append>
                        <q-icon name="event" class="cursor-pointer">
                        <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                            <q-date v-model="date">
                            <div class="row items-center justify-end">
                                <q-btn v-close-popup label="Close" color="primary" flat />
                            </div>
                            </q-date>
                        </q-popup-proxy>
                        </q-icon>
                    </template>
                </q-input>

                <q-select 
                    v-model="profile.city" 
                    :options="cities"
                    dense outlined
                />

            </q-card>
        </div>    
    </div>        
</template>
<script>
export default {
    props: {
        profile: {
            type: Object,
            required: true
        }
    },

    setup (props) {
        const profile = toRef(props, 'profile')

        const cities = [
            'Ош',
            'Бишкек',
            'Москва',
            'Омск'   
        ]

        return {
            profile,
            cities
        }
    }
}
</script>
<style lang="scss" scoped>
    .profile {
        max-width: 400px;
        margin: auto;
    }
</style>