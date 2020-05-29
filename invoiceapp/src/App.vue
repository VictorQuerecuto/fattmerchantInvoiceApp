<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <h2>Invoices</h2>
      </div>

      <v-spacer></v-spacer>
    </v-app-bar>

    <v-content>
      <InvoiceFrom></InvoiceFrom>
    </v-content>
  </v-app>
</template>

<script>
import InvoiceFrom from "./components/InvoiceFrom";
export default {
  name: "App",

  components: {
    InvoiceFrom
  },

  data: () => ({
    //
  })
};
</script>

<style scoped>
</style>