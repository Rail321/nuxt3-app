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
  import requestRoles from '@/api-imitator/roles'

  const roles = ref( null )
  const loading = ref( false )
  const fetchRoles = async () => {
    loading.value = true
    roles.value = await requestRoles()
    loading.value = false
  }

  onMounted( () => {
    fetchRoles()
  } )
</script>