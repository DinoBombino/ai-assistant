<script>
import { BCard, BCardBody, BButton } from 'bootstrap-vue-next'

export default {
  name: 'Home',
  components: { BCard, BCardBody, BButton },
}
</script>

<template>
  <div class="d-flex flex-column min-vh-100 bg-light align-items-center justify-content-center p-4">
    <BCard class="shadow-lg" style="max-width: 400px;">
      <BCardBody>
        <h1 class="text-primary mb-4">AI-Ассистент-Учитель</h1>
        <p class="text-muted mb-4">Задавайте вопросы по учёбе и получайте помощь!</p>
        <router-link to="/chat">
          <BButton variant="primary">Начать чат</BButton>
        </router-link>
      </BCardBody>
    </BCard>
  </div>
</template>