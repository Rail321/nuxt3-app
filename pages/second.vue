<template>
  <NuxtLayout>
    <div>
      <div v-if="loading">
        <p>Загрузка...</p>
      </div>
      
      <div v-else>
        <p v-for="role of Roles.get()" v-bind:key="role.slug">
          <span>{{ role.title }}</span>
        </p>
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup>
  import Roles from '@/modules/Roles'

  const loading = ref( false )
  const fetchRoles = async () => {
    loading.value = true
    await Roles.fetch()
    loading.value = false
  }

  onMounted( () => {
    fetchRoles()
  } )
</script>