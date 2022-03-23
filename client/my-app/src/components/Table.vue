<template>
  <!-- datatabel for viewing the note data. Each cell has unique formatting for displaying the element -->
  <v-container fluid>
    <v-data-table
      v-model="selected"
      :headers="headers"
      :items="theData"
      hide-default-footer
      disable-pagination
      class="elevation-1 ma-2 pa-n3"
      show-select
      hide-default-header
    >
      <template v-slot:[`item.title`]="{ item }">
        <div class="text-no-wrap font-weight-bold">
          {{ item.title }}
        </div>
      </template>
      <template v-slot:[`item.type`]="{ item }">
        <v-chip dark color="grey darken-2" label class="ma-2" small>
          {{ item.type }}
        </v-chip>
      </template>
      <template v-slot:[`item.status`]="{ item }">
        <v-chip
          label
          :color="getStatusColor(item.status)"
          class="ma-2"
          dark
          small
        >
          {{ item.status }}
        </v-chip>
      </template>
      <template v-slot:[`item.priority.text`]="{ item }">
        <v-chip
          label
          :color="getPriorityColor(item.priority.text)"
          class="ma-2"
          dark
          small
        >
          {{ item.priority.text }}
        </v-chip>
      </template>
      <template v-slot:[`item.dueDate`]="{ item }">
        <div class="text-no-wrap text-body-2">
          {{ item.dueDate }}
        </div>
      </template>
      <template v-slot:[`item.assignees`]="{ item }">
        <div v-for="a in item.assignees" :key="a.$oid" class="mr-n5">
          {{ a.$oid }}
        </div>
      </template>
      <template v-slot:[`item.sectionRef`]="{ item }">
        <div class="text-no-wrap text-body-2">
          {{ item.sectionRef }}
        </div>
      </template>
      <template v-slot:[`item.updatedAt.$date`]="{ item }">
        <div class="text-no-wrap text-body-2">
          {{ formatDateTime(item.updatedAt.$date) }}
        </div>
      </template>
      <template v-slot:[`item.createdAt.$date`]="{ item }">
        <div class="text-no-wrap text-body-2">
          {{ formatDateTime(item.createdAt.$date) }}
        </div>
      </template>
    </v-data-table>
  </v-container>
</template>

<script>
  export default {
    singleSelect: true,
    props: ["theData", "users"],
    name: "NoteTable",
    data() {
      return {
        selected: [],
        headers: [
          {
            text: "Title",
            value: "title",
          },
          { text: "Type", value: "type" },
          { text: "Status", value: "status" },
          { text: "Priority", value: "priority.text" },
          { text: "Due Date", value: "dueDate" },
          { text: "Assignees", value: "assignees" },
          { text: "Reporter", value: "reporterId.$oid" },
          { text: "Section", value: "sectionRef" },
          { text: "Updated Date", value: "updatedAt.$date" },
          { text: "Created Date", value: "createdAt.$date" },
        ],
      };
    },
    methods: {
      //Set color of status tags
      getStatusColor(status) {
        switch (String(status)) {
          case "In Progress":
            return "blue";
          case "Pending documentation":
            return "orange";
          case "Addressed":
          case "Closed":
            return "green";
          default:
            return "grey darken-2";
        }
      },
      //Set color of priority tags
      getPriorityColor(priority) {
        switch (String(priority)) {
          case "High":
            return "red";
          case "Low":
            return "green";
          case "Medium":
            return "orange";
          default:
            return "grey darken-2";
        }
      },
      //Format the note.time to local time
      formatDateTime(ISOdate) {
        return new Date(ISOdate).toLocaleString();
      },

      getAssigneeImg($oid) {
        //This was supposed to return the photo of the user,
        // but i didnt get it to work within the given time
        if (this.users) {
          this.users.filter((u) => {
            //console.log("u.id: " + u.id + ", $oid: " + $oid);
            if (u.id === $oid) {
              console.log("img print!: " + u.id);
              return <img src={u.photo} alt={u.name} />;
            }
          });
        }
      },
    },
  };
</script>
