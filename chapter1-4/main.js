var app = new Vue({
  el: "#app",
  data: {
    price: 0,
    stock: 5,
  },
  filters: {
    test: function(val) {
      return val + 5;
    },
  },
  methods: {
    onDeleteItem: function() {
      this.stock--;
    },
  },
  watch: {
    // プロパティを監視
    stock: function (newStock, oldStock) {
      console.log(newStock);
      console.log(oldStock);
      if (newStock == 0) {
        this.price = 1000000;
      }
    }
  }
});
