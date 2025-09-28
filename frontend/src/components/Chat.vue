<script>
import { BCard, BCardHeader, BCardBody, BButton, BFormInput } from 'bootstrap-vue-next'
import { useChatStore } from '../stores/chat'

export default {
  name: 'Chat',
  components: { BCard, BCardHeader, BCardBody, BButton, BFormInput },
  data() {
    return {
      input: '',
      chatStore: useChatStore(),
    }
  },
  methods: {
    async send() {
      if (!this.input.trim()) return
      await this.chatStore.sendMessage(this.input)
      this.input = ''
    },
  },
}
</script>

<template>
  <div class="d-flex flex-column min-vh-100 bg-light p-4">
    <BCard class="shadow-lg flex-grow-1" style="max-width: 800px; margin: auto;">
      <BCardHeader>
        <h2 class="mb-0 text-primary">Чат с Ассистентом</h2>
      </BCardHeader>
      <BCardBody class="d-flex flex-column">
        <div class="flex-grow-1 overflow-auto mb-3" style="max-height: 500px;">
          <div
            v-for="(msg, index) in chatStore.messages"
            :key="index"
            :class="['p-3 mb-2 rounded', msg.role === 'user' ? 'bg-primary text-white ms-auto' : 'bg-secondary-subtle']"
            style="max-width: 70%;"
          >
            <strong>{{ msg.role === 'user' ? 'Ты:' : 'Ассистент:' }}</strong> {{ msg.content }}
          </div>
        </div>
        <div class="d-flex gap-2">
          <BFormInput
            v-model="input"
            @keyup.enter="send"
            placeholder="Задай вопрос..."
            class="flex-grow-1"
          />
          <BButton variant="primary" @click="send">Отправить</BButton>
        </div>
      </BCardBody>
    </BCard>
  </div>
</template>

<style scoped>
/* Плавное появление сообщений */
div.bg-primary, div.bg-secondary-subtle {
  animation: slide-in 0.3s ease-out;
}
@keyframes slide-in {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>