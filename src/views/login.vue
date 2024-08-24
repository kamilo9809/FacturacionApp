<template>
    <div>
        <div>
            <div>
                <label for="user">Usuario</label>
                <input type="text" name="user" id="user">
            </div>
            <div>
                <label for="password">Contraseña</label>
                <input type="password" name="password" id="password">
            </div>
            <button @click="Logged()">Ingresar</button>
        </div>
    </div>
</template>

<script setup>
import {useRouter} from 'vue-router'

    const router = useRouter()

    const Logged=()=>{
            router.push('/dashboard/')
    }
</script>