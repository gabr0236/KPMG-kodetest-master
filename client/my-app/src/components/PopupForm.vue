<!-- barebone popup -->
<template>
  <div>
    <v-dialog width="300">
      <template v-slot:activator="{ on }">
        <v-btn color="blue" dark v-on="on" small> New </v-btn>
      </template>
      <v-card>
        <div>
          <h1 class="pa-3" align="center">This is a form</h1>
        </div>
      </v-card>
    </v-dialog>
  </div>
</template>
