<template>
    <q-form 
        @submit="auth"
        class="q-gutter-md"
    >
        <div class="text-h4 text-center q-pb-md q-pt-md">
            Вход
        </div>    
        <q-input 
            v-model="username"
            dense outlined
            label="Username *"
            :rules="usernameRules"
        />

        <q-input 
            v-model="password"
            dense outlined
            :type="showPassword ? 'password' : 'text'"
            label="Пароль *"
            :rules="passwordRules"
        >
            <template v-slot:append>
                <q-icon 
                    :name="showPassword ? 'visibility_off' : 'visibility'"
                    class="cursor-pointer"
                    @click="showPassword = !showPassword"
                />
            </template>
        </q-input>
        <div 
            v-if="errorMessage"
            class="text-red"
        >
            {{ errorMessage }}
        </div>
        <div class="q-pb-md">
            <q-btn 
                no-caps
                label="Войти"
                type="submit"
                color="primary"
                class="full-width"
            />
        </div>
    </q-form>
</template>
<script>

import { ref } from "vue"
import { usernameRules, passwordRules } from './LoginService'

export default {
    setup (props, { emit }) {
        const username = ref('')
        const password = ref('')
        const showPassword = ref(false)
        const { $store } = useNuxtApp()
        
        const errorMessage = computed(() => {
            return $store.getErrorMessage
        })

        const auth = () => {
            emit('auth', username.value, password.value)
        }
        

        return {
            username,
            password,
            showPassword,
            usernameRules,
            passwordRules,
            errorMessage,
            auth
        }
    }
}
</script>
<style lang="scss" scoped>
    
</style>