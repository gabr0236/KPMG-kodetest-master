<template>
  <v-select :items="items" chips multiple outlined dense color="blue">
    <template v-slot:selection="{ item, index }">
      <v-chip v-if="index === 0" small label color="blue" dark>
        <span>{{ item }}</span>
      </v-chip>
      <!-- display number of selected tags -->
      <span v-if="index === 1" class="blue--text text-caption">
        (+{{ value.length - 1 }} others)
      </span>
    </template>
  </v-select>
</template>

<script>
  export default {
    data: () => ({
      items: ["test1", "test2", "test3", "test4", "test5", "test6"],
      value: ["test1", "test2", "test3"],
    }),
  };
</script>
