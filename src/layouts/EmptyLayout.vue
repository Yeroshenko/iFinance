<template>
  <div class="empty-layout">
    <router-view />
  </div>
</template>

<style lang="sass">
.empty-layout
  min-height: 100vh
  // background-color: rgba(0,0,0, 0.05)
  background-color: rgba(var(--vs-gray-1), 1)
</style>
