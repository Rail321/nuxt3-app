<template>
  <NuxtLayout>
    <div>
      <p v-if="loading">Загрузка...</p>
      
      <p v-else-if="error">{{ error }}</p>
      
      <div v-else>
        <p v-for="role of roles" v-bind:key="role.slug">
          <span>{{ role.title }}</span>
        </p>
      </div>

      <button type="button" v-on:click="requestHard" v-bind:disabled="loading">Обновить</button>

      <p v-if="ready">Роли подгружены</p>
    </div>
  </NuxtLayout>
</template>

<script setup>
  import {
    data as roles,
    ready,
    loading,
    error,
    requestSoft,
    requestHard
  } from '@/modules/Roles'

  onMounted( () => {
    requestSoft()
  } )
</script>