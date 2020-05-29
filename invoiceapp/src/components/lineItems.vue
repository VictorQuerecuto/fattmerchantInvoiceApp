<template>
  <div>
    <div v-for="(line, index) in lines" :key="index" class="row">
      <div class="col-lg-10">
        <v-row>
          <div class="col-2">
            <v-text-field v-model="line.item" :rules="itemRules" label="Item"></v-text-field>
          </div>
          <div class="col-6">
            <v-text-field v-model="line.details" :rules="detailRules" label="Item Details"></v-text-field>
          </div>
          <div class="col-2">
            <v-text-field v-model.number="line.quantity" :rules="quantityRules" label="Quantity"></v-text-field>
          </div>
          <div class="col-2">
            <v-text-field v-model.number="line.price" :rules="priceRules" prefix="$" label="Price"></v-text-field>
          </div>
        </v-row>
      </div>
      <div class="col-2 align-self-center">
        <div class="block float-right">
          <v-btn @click="removeLine(index)" class="mx-2" small fab dark color="pink">
            <v-icon dark>mdi-delete</v-icon>
          </v-btn>
          <v-btn
            v-if="index + 1 === lines.length"
            @click="addLine"
            class="mx-2"
            small
            fab
            dark
            color="indigo"
          >
            <v-icon dark>mdi-plus</v-icon>
          </v-btn>
        </div>
      </div>
      <v-spacer></v-spacer>
    </div>
    <div class="row justify-content-end">
      <div class="col-4"></div>
      <div class="col-5"></div>
      <div class="col-2">
        <h2>Total: &#36; {{ convertDecimal(total) }}</h2>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "lineItems",
  data() {
    return {
      lines: [],
      blockRemoval: true,
      total: 0.0,
      itemRules: [v => !!v || "Item is required"],
      detailRules: [v => !!v || "Details is required"],
      quantityRules: [v => !!v || "Quantity is required"],
      priceRules: [v => !!v || "Price is required"]
    };
  },
  computed: {
    price() {
      return this.lines.map(x => {
        return x.price;
      });
    },
    quantity() {
      return this.lines.map(x => {
        return x.quantity;
      });
    }
  },
  watch: {
    lines() {
      this.blockRemoval = this.lines.length <= 1;
      this.calculateTotal();
    },
    price: {
      immediate: true,
      handler() {
        this.calculateTotal();
        this.$emit("newLineItem", this.lines, this.total);
      }
    },
    quantity: {
      immediate: true,
      handler() {
        this.calculateTotal();
        this.$emit("newLineItem", this.lines, this.total);
      }
    }
  },
  methods: {
    convertDecimal(value) {
      return value.toFixed(2);
    },
    addLine() {
      let checkEmptyLines = this.lines.filter(line => line.item === null);

      if (checkEmptyLines.length >= 1 && this.lines.length > 0) {
        return;
      }

      this.lines.push({
        item: null,
        details: null,
        quantity: 0,
        price: 0
      });
    },
    removeLine(lineId) {
      if (!this.blockRemoval) {
        this.lines.splice(lineId, 1);
      }
    },
    calculateTotal() {
      this.total = this.lines
        .map(x => x.price * x.quantity)
        .reduce((a, b) => a + b, 0);
    }
  },
  mounted() {
    this.addLine();
  }
};
</script>

<style></style>
