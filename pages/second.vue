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
  import useRoles from '@/use/roles'

  const { loading, request } = useRoles()
  const roles = ref( [] )
  const fetchRoles = async () => roles.value = await request()
  onMounted( fetchRoles )
</script>