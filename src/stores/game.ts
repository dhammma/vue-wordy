import { defineStore } from 'pinia'

interface GameStoreState {
  currentRow: number
  currentCell: number
  isKeyboardDisplayed: boolean
  enteredLetters: string[]
}

const getInitialState = (): GameStoreState => ({
  currentRow: 0,
  currentCell: 0,
  isKeyboardDisplayed: true,
  enteredLetters: []
})

export const useGameStore = defineStore('game', {
  state: getInitialState,
  getters: {
    canClearLetter(): boolean {
      return this.enteredLetters.length % 5 > 0
    },
    canEnterWord(): boolean {
      return this.enteredLetters.length > 0 && this.enteredLetters.length % 5 === 0
    }
  },
  actions: {
    enterLetter(letter: string) {
      this.enteredLetters.push(letter)
    },
    clearLetter() {
      this.enteredLetters.pop()
    },
    enterWord() {
      // to be implemented
    }
  }
})
