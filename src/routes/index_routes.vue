<template>
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <keep-alive>
          <suspense>
            <component :is="Component" />
            <template #fallback>
              Loading...
            </template>
          </suspense>
        </keep-alive>
      </transition>
    </router-view>
  </template>
  
  <script setup lang="ts">
  import { defineComponent,computed } from 'vue';
  import { useRoute } from 'vue-router';
  
  const route = useRoute();
  const componentId = computed(() => route.meta.componentId);
  import dashboard from '../views/dashboard.vue';


  
  defineComponent({
    components: {
      dashboard
    }
  });
  </script>
  