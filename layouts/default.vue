<template>
  <div>
    <div>
      <NuxtLink to="/">Главная</NuxtLink>
      <span>&nbsp;</span>
      <NuxtLink to="/second">Вторая</NuxtLink>
    </div>

    <div>
      <slot />
    </div>
  </div>
</template>