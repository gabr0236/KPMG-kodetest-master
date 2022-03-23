<template>
  <div>
    <v-breadcrumbs :items="items" class="pa-4">
      <template v-slot:divider>
        <v-icon>mdi-chevron-right</v-icon>
      </template>
    </v-breadcrumbs>
  </div>
</template>

<script>
  export default {
    data: () => ({
      //Static elements, should eventually be hooked up to routes
      items: [
        {
          text: "Engagements",
          href: "ring",
        },
        {
          text: "Microsoft 2021",
          href: "msft-2021",
        },
        {
          text: "Review notes",
          disabled: true,
          href: "review-notes",
        },
      ],
    }),
  };
</script>
