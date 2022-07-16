<template>
  <div class="check-button" :class="{check: isChecked}">
    <img src="~assets/image/cart/tick.svg" alt="">
  </div>
</template>

<script>
export default {
  name: 'checkButton',
  props: {
    isChecked: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style>
  .check-button {
    border-radius: 50%;
    height: 20px;
    border: 2px solid #ccc;
  }
  .check {
    border-color: red;
    background-color: red;
  }
</style>