<template>
  <v-container fluid>
    <v-row class="ma-0">
      <v-col>
        <div class="text-body-1">Search</div>
        <v-text-field dense outlined />
        <v-btn x-small class="mt-n8" color="error">Clear filters</v-btn>
      </v-col>
      <v-col>
        <div class="text-body-1">Type</div>
        <ButtonGroup />
      </v-col>
      <v-col>
        <div class="text-body-1">Priority</div>
        <ButtonGroup />
      </v-col>
      <v-col>
        <div class="text-body-1">Reporter</div>
        <ItemSelector />
      </v-col>
      <v-col>
        <div class="text-body-1">Assignees</div>
        <ItemSelector />
      </v-col>
      <v-col>
        <div class="text-body-1">Section</div>
        <ItemSelector />
      </v-col>
      <v-col>
        <div class="text-body-1">Date</div>
        <DatePicker />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
  import ItemSelector from "./ItemSelector.vue";
  import DatePicker from "./DatePicker.vue";
  import ButtonGroup from "./ButtonGroup.vue";

  export default {
    name: "FilterBar",
    components: {
      ItemSelector,
      DatePicker,
      ButtonGroup,
    },
  };
</script>
