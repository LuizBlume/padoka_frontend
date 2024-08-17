<script setup>
import { defineProps } from 'vue';
const informations = defineProps({
    title: {
      type: String,
      required: true,
    },
});
</script>

<template>
    <input class="send-password" type="button" :value="informations.title">
</template>

<style scoped>
@import "../assets/Sass/components/SubmitButton.scss";
</style>