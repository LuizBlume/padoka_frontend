<script setup>
import { ref, onMounted } from 'vue';
import SubmitButton from './SubmitButton.vue';

// Cria um array de referências para os inputs
const inputRefs = ref([])
const digits = ref(['', '', '', ''])

const handleInput = (index) => {
  // Permite apenas números
  if (!/^\d$/.test(digits.value[index])) {
    digits.value[index] = ''
    return
  }

  // Move para o próximo input
  if (index < digits.value.length - 1) {
    inputRefs.value[index + 1].focus()
  } else {
    inputRefs.value[index].blur()
  }
}

const handleBackspace = (index) => {
  // Volta para o input anterior se o campo estiver vazio
  if (digits.value[index] === '' && index > 0) {
    inputRefs.value[index - 1].focus()
  }
}

onMounted(() => {
  // Coloca o foco no primeiro input ao montar o componente
  inputRefs.value[0].focus()
})

</script>

<template>
  <div class="verification-container">
    <h1>Digite o código de verificação</h1>
    <p>Foi enviado o código de verificação para emailemailemail@gmail.com</p>
    <div class="verification-code">
      <input
        v-for="(digit, index) in digits"
        :key="index"
        v-model="digits[index]"
        @input="handleInput(index)"
        @keydown.backspace="handleBackspace(index)"
        type="text"
        maxlength="1"
        class="digit-input"
        :ref="(el) => (inputRefs[index] = el)"
      />
    </div>
    <p id="resend-code" >Reenviar código 25s</p>
    <SubmitButton title="Enviar"/>
  </div>
</template>

<style scoped>
@import '../assets/Sass/components/VerificationCode/VerificationCode.scss';
</style>
