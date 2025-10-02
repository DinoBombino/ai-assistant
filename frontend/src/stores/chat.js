// import { defineStore } from 'pinia'
// import axios from 'axios'

// export const useChatStore = defineStore('chat', {
//   state: () => ({
//     messages: [], // [{ role: 'user'|'assistant', content: string }]
//   }),
//   actions: {
//     async sendMessage(message) {
//       this.messages.push({ role: 'user', content: message })
//       try {
//         const response = await axios.post('/api/chat', { message })
//         this.messages.push({ role: 'assistant', content: response.data.reply })
//       } catch (error) {
//         this.messages.push({ role: 'assistant', content: 'Ошибка: не удалось связаться с ассистентом.' })
//       }
//     },
//   },
// })

import { defineStore } from 'pinia'

export const useChatStore = defineStore('chat', {
  state: () => ({
    messages: [], // [{ role: 'user'|'assistant', content: string }]
  }),
  actions: {
    async sendMessage(message) {
      this.messages.push({ role: 'user', content: message })
      try {
        // Временная заглушка вместо API
        const reply = `Получено: ${message}. Ожидаем n8n интеграцию.`
        this.messages.push({ role: 'assistant', content: reply })
      } catch (error) {
        this.messages.push({ role: 'assistant', content: 'Ошибка: не удалось обработать сообщение.' })
      }
    },
  },
})

// import { defineStore } from 'pinia'
// import axios from 'axios'

// export const useChatStore = defineStore('chat', {
//   state: () => ({
//     messages: [], // [{ role: 'user'|'assistant', content: string }]
//   }),
//   actions: {
//     async sendMessage(message) {
//       this.messages.push({ role: 'user', content: message })
//       try {
//         // Замени на n8n webhook, когда получишь URL
//         // const response = await axios.post('https://your-n8n.app/webhook/chat', { message })
//         const response = await axios.post('/api/chat', { message }) // Текущая заглушка
//         this.messages.push({ role: 'assistant', content: response.data.reply })
//       } catch (error) {
//         this.messages.push({ role: 'assistant', content: 'Ошибка: не удалось связаться с ассистентом.' })
//       }
//     },
//   },
// })