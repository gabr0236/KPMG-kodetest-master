<template>
  <v-container fluid class="pt-0">
    <v-card class="d-flex justify-start align-center" flat tile>
      <h1 class="mr-4 py-0">Review notes</h1>
      <PopupForm />
    </v-card>
    <v-divider></v-divider>
  </v-container>
</template>

<script>
  import PopupForm from "./PopupForm.vue";
  export default {
    name: "PageHeader",
    components: {
      PopupForm,
    },
  };
</script>
