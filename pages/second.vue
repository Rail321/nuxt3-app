<template>
  <NuxtLayout>
    <div>
      <div v-if="loading">
        <p>Загрузка...</p>
      </div>
      
      <div v-else>
        <p v-for="role of roles" v-bind:key="role.slug">
          <span>{{ role.title }}</span>
        </p>
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup>
  import {
    loading,
    data as roles,
    requestSoft
  } from '@/modules/roles'

  onMounted( () => {
    requestSoft()
  } )
</script>