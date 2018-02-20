const jefes = [
    { nivel: "5", nombre: "Huevo nivel 5"},
    { nivel: "5", nombre: "Rayquaza"},
    { nivel: "4", nombre: "Huevo nivel 4"},
    { nivel: "4", nombre: "Tyranitar"}
]

const gimnasios = [
    { nombre: "Gordita", direccion: "escuela normal" },
    { nombre: "Tren fijo", direccion: "tren fijo" },
]

var app = new Vue({
    el: '#app',
    data: {
        gimnasios: gimnasios,
        jefes: jefes,
        gim_elegido: 0,
        jefe_elegido: 0,
        hora_elegida: "12:00"
    },
    computed: {
        gimMostrar: function() {
            const g = this.gimnasios[this.gim_elegido].nombre + "( " + this.gimnasios[this.gim_elegido].direccion + " )";
            return  g;
        },
        jefeMostrar: function() {
            const j = this.jefes[this.jefe_elegido].nombre;
            return  j;
        } 
    },
    methods: {
        copiar: function(e) {
            var copyTextarea = document.querySelector('#lista');
            copyTextarea.select();

            try {
                var successful = document.execCommand('copy');
                var msg = successful ? 'successful' : 'unsuccessful';
                console.log('Copying text command was ' + msg);
            } catch (err) {
                console.log('Oops, unable to copy');
            }
        }
    }
})
