<script setup lang="ts">
import GameField from './components/GameField.vue'
import GameKeyboard from './components/GameKeyboard.vue'
</script>

<template>
  <main>
    <GameField />
    <GameKeyboard :style="{ marginTop: '50px' }" />
  </main>
</template>

<style scoped>
main {
  display: flex;
  margin-top: 100px;
  flex-direction: column;
  align-items: center;
}
</style>
