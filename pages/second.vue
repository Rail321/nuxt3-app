<template>
  <NuxtLayout>
    <div>
      <p v-if="Roles.loading">Загрузка...</p>
      
      <p v-else-if="Roles.error">{{ Roles.error }}</p>
      
      <div v-else>
        <p v-for="role of Roles.data" v-bind:key="role.slug">
          <span>{{ role.title }}</span>
        </p>
      </div>

      <button type="button" v-on:click="Roles.requestHard" v-bind:disabled="Roles.loading">Обновить</button>

      <p v-if="Roles.ready">Роли подгружены</p>
    </div>
  </NuxtLayout>
</template>

<script setup>
  import Roles from '@/modules/Roles'

  onMounted( () => {
    Roles.requestSoft()
  } )
</script>