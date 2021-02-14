const app = new Vue({
  el: "#tablax",
  data: {
    numero: 2,
    factores: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  },
  methods: {
    comprobar(factor) {
      console.log(this.producto);
      if (this.numero * factor == this.producto) {
        alert("Muy bien!");
      } else {
        alert("Mmm... revisala");
      }
      this.producto = "";
    },
    siguiente() {
      if (this.numero < 10) {
        this.numero = this.numero + 1;
      }
    },
    anterior() {
      if (this.numero > 0) {
        this.numero = this.numero - 1;
      }
    },
  },
});
