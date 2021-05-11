<template>
  <div class="w-full flex flex-col items-center">
    <h1>The Cup Store</h1>
    <product
      v-for="product in products(product, id)"
      key="index"
      name="Colorful Cups"
      :price="999"
      :image="cups1"
    ></product>

    <cart></cart>
  </div>
</template>

<script>
import Product from "./components/Product";
import Cart from "./components/Cart";
import Cups1 from "./assets/cups1.jpg";
import Cups2 from "./assets/cups2.jpg";
import Cups3 from "./assets/cups3.jpg";

export default {
  name: "App",
  components: {
    Product,
    Cart,
  },

  data: () => {
    return {
      cups1: Cups1,
      cups2: Cups2,
      cups3: Cups3,
      products: [
        {
          id: 120,
          name: "Colorful Cups",
          price: 999,
          image: "./assets/cups1.jpg",
        },
        {
          id: 121,
          name: "Coffee & Home",
          price: 1449,
          image: "./assets/cups2.jpg",
        },
        {
          id: 122,
          name: "Old red Friend",
          price: 1999,
          image: "./assets/cups3.jpg",
        },
      ],
    };
  },

  methods: {},
};
</script>

<style>
body {
  padding: 15px 0;
  font-size: 14px;
  background: #eeffff;
  color: #888;
}
h1 {
  text-align: center;
  font-size: 24px;
  margin-bottom: 15px;
}
</style>
