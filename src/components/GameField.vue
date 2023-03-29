<script setup lang="ts">
// defineProps<{
//   size: number
// }>()

import { useGameStore } from '@/stores/game'

const FIELD_SIZE = 5
const CELL_SIZE = 50
const gameStore = useGameStore()
</script>

<template>
  <div
    :style="{
      display: 'grid',
      gridTemplateColumns: 'repeat(5, 1fr)',
      gridTemplateRows: 'repeat(5, 1fr)',
      rowGap: '5px',
      columnGap: '5px'
    }"
  >
    <div
      v-for="cellIndex in FIELD_SIZE * FIELD_SIZE"
      v-bind:key="cellIndex"
      :style="{
        width: `${CELL_SIZE}px`,
        height: `${CELL_SIZE}px`,
        backgroundColor: 'orange',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }"
    >
      {{ gameStore.enteredLetters[cellIndex - 1] ?? '' }}
    </div>
  </div>
</template>
