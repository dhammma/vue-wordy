<script setup lang="ts">
import { useGameStore } from '@/stores/game'

const ALL_LETTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const gameStore = useGameStore()
</script>

<template>
  <div :style="{ display: 'flex', flexDirection: 'row', gap: '5px' }">
    <button
      v-for="currentLetter in ALL_LETTERS.split('')"
      v-bind:key="currentLetter"
      :style="{ padding: '10px', cursor: 'pointer' }"
      @click="gameStore.enterLetter(currentLetter)"
    >
      {{ currentLetter }}
    </button>
    <button
      :style="{ padding: '10px', cursor: 'pointer' }"
      @click="gameStore.clearLetter()"
      :disabled="!gameStore.canClearLetter"
    >
      {{ '⌫' }}
    </button>
    <button
      :style="{ padding: '10px', cursor: 'pointer' }"
      @click="gameStore.enterWord()"
      :disabled="!gameStore.canEnterWord"
    >
      {{ '⏎' }}
    </button>
  </div>
</template>
