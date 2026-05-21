<script setup>
const props = defineProps({
  'size': String, // 'big', 'medium', 'small'
  'color': String, // 'black', 'white', 'gray'
  'content': String,
});
</script>

<template>
  <button type="button" :class="[props.color, props.size]">{{ props.content }}</button>
</template>

<style scoped>
button {
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  cursor: pointer;
}

.big {
  width: 350px;
  height: 45px;
  font-size: 20px;
}

.medium {
  width: 300px;
  height: 70px;
  font-size: 40px;
}

.small {
  width: 90px;
  height: 45px;
  font-size: 20px;
}

.black {
  background-color: var(--personal-color-black);
  color: var(--personal-color-white);
}

.white {
  background-color: var(--personal-color-white);
  color: var(--personal-color-black);
}

.gray {
  background-color: var(--personal-color-gray);
  color: var(--personal-color-white);
}
</style>