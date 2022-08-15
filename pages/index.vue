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

      <button type="button" v-on:click="requestHard" v-bind:disabled="loading">Обновить</button>
    </div>
  </NuxtLayout>
</template>

<script setup>
  import {
    loading,
    data as roles,
    requestSoft,
    requestHard
  } from '@/modules/roles'

  onMounted( () => {
    requestSoft()
  } )
</script>