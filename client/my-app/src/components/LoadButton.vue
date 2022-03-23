<template>
  <div class="mx-4 mt-0">
    <v-btn
      class="blue--text"
      color="blue lighten-5"
      block
      @click="onClickHandler"
      >Load more</v-btn
    >
  </div>
</template>

<script>
  export default {
    props: {
      //Onclick passed from parent
      onClickHandler: Function,
    },
  };
</script>
