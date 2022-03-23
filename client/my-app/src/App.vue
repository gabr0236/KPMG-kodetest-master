<template>
  <v-app>
    <BreadCrumb />
    <v-main>
      <PageHeader />
      <FilterBar />
      <Table v-if="notes" :theData="notes" class="mt-n8" :users="users" />
      <LoadButton v-if="nextNotePage" :onClickHandler="loadMoreNotes" />
    </v-main>
  </v-app>
</template>

<script>
  import Table from "./components/Table";
  import BreadCrumb from "./components/BreadCrumb";
  import FilterBar from "./components/FilterBar";
  import PageHeader from "./components/PageHeader.vue";
  import LoadButton from "./components/LoadButton.vue";

  export default {
    name: "App",
    components: {
      Table,
      BreadCrumb,
      FilterBar,
      PageHeader,
      LoadButton,
    },
    data: () => ({
      notes: undefined, //Note array
      LIMIT: 3, //Page size, set to 3 instead of the requested 10 since we only have 10 notes
      nextNotePage: undefined, //For api call
      users: undefined, //User arr (pagination not used here)
    }),
    mounted() {
      this.$axios
        .get("http://localhost:6500/notes?page=1&limit=" + this.LIMIT)
        .then(({ data }) => {
          this.notes = data.results;
          this.nextNotePage = data.next.page;
        });

      //This should eventually be fetched ad-hoc,
      // potentially as a side effect of the other axios call to only
      // fetch users that appear in notes.
      this.$axios
        .get("http://localhost:6500/users?page=1&limit=100")
        .then(({ data }) => {
          this.users = data.results;
        });
    },
    methods: {
      //Method for getting next page from api
      loadMoreNotes: function () {
        //If there is a next page, axios.get()
        if (this.nextNotePage) {
          this.$axios
            .get(
              "http://localhost:6500/notes?page=" +
                this.nextNotePage +
                "&limit=" +
                this.LIMIT
            )
            .then(({ data }) => {
              //Append new notes to notes and set nextNotePage

              data.results.map((res) => this.notes.push(res));
              this.nextNotePage = data.next && data.next.page;
            });
        }
      },
    },
  };
</script>
