var app = new Vue({
  el: "#app",
  data: {
    price: 0,
    stock: 1,
  },
  filters: {
    test: function (val) {
      return val + 5;
    }
  }
});
app.stock = 1;
app.price = 1000;
