<template>
  <v-form v-model="valid">
    <v-container class="grey lighten-5">
      <v-alert v-if="submitted" type="success">Invoice successfully created</v-alert>
      <v-alert v-if="error" type="error">Please enter all fields</v-alert>
      <v-row no-gutters>
        <v-col cols="12" md="8">
          <v-text-field v-model="memo" :rules="memoRules" label="Memo" required></v-text-field>
        </v-col>
      </v-row>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      <v-row no-gutters>
        <v-col cols="12">
          <lineItems @newLineItem="handler"></lineItems>
        </v-col>
      </v-row>
      <v-row justify="end">
        <v-spacer></v-spacer>
        <v-col class="text-right">
          <v-btn v-on:click="submitForm" text large color="primary">Submit</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
import lineItems from "../components/lineItems";
import InvoiceDataService from "../services/InvoiceDataService";

export default {
  components: {
    lineItems
  },
  mounted() {},
  data() {
    return {
      valid: false,
      memo: "",
      lineItems: [],
      total: 0,
      memoRules: [v => !!v || "Memo is required"],
      submitted: false,
      error: false
    };
  },
  methods: {
    handler(linesItems, total) {
      this.lineItems = linesItems;
      this.total = total;
    },
    submitForm() {
      const data = {
        lineItems: this.lineItems,
        memo: this.memo,
        total: this.total
      };

      if (this.memo) {
        InvoiceDataService.create(data)
          .then(response => {
            console.log(response.data);
            this.submitted = true;
            setTimeout(() => (this.submitted = false), 3000);
          })
          .catch(e => {
            console.log(e);
          });

        this.memo = "";
      } else {
        this.error = true;
        setTimeout(() => (this.error = false), 3000);
      }
    }
  }
};
</script>

<style></style>
