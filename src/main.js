const jefes = [
    { nivel: 5, nombre: "Huevo nivel 5"},
    { nivel: 5, nombre: "Rayquaza"},
    { nivel: 4, nombre: "Huevo nivel 4"},
    { nivel: 4, nombre: "Absol"},
    { nivel: 4, nombre: "Agron"},
    { nivel: 4, nombre: "Feraligatr"},
    { nivel: 4, nombre: "Lapras"},
    { nivel: 4, nombre: "Snorlax"},
    { nivel: 4, nombre: "Tyranitar"},
    { nivel: 3, nombre: "Huevo nivel 3"},
    { nivel: 3, nombre: "Azumarill"},
    { nivel: 3, nombre: "Jynx"},
    { nivel: 3, nombre: "Machamp"},
    { nivel: 2, nombre: "Huevo nivel 2"},
    { nivel: 3, nombre: "Piloswine"},
    { nivel: 2, nombre: "Cloyster"},
    { nivel: 2, nombre: "Dewgong"},
    { nivel: 2, nombre: "Mawile"},
    { nivel: 2, nombre: "Sableye"},
]


const gimnasios = [
    { nombre: "Belgrano", direccion: "Bv. Santa Fe 555" },
    { nombre: "Campana", direccion: "Bv. Roca y Rosario" },
    { nombre: "Castillo Hotel", direccion: "Bv. Lehmann y Salva" },
    { nombre: "Colegio Nacional", direccion: "9 de julio 387" },
    { nombre: "Eva Perón", direccion: "Gaboto y Las Heras" },
    { nombre: "Gordita", direccion: "Primera Junta y Víctor Manuel" },
    { nombre: "León", direccion: "Plaza 25 de Mayo" },
    { nombre: "Pelo Electrizado", direccion: "Bv. Irigoyen y 26 de enero" },
    { nombre: "Pirámide", direccion: "Suipacha y Fanti" },
    { nombre: "Pizzurno", direccion: "Bv. Irigoyen y Fanti" },
    { nombre: "Postes Parados", direccion: "Av. Suipacha 550" },
    { nombre: "Tren fijo", direccion: "Roque Saenz Peña y Av. Mitre" },
    { nombre: "Venado", direccion: "Plaza 25 de Mayo" },
]

var app = new Vue({
    el: '#app',
    data: {
        gimnasios: gimnasios,
        jefes: jefes,
        gim_elegido: 0,
        jefe_elegido: 0,
        hora_elegida: "12:00",
        texto_copiado: false
    },
    computed: {
        gimMostrar: function() {
            const g = this.gimnasios[this.gim_elegido].nombre + " (" + this.gimnasios[this.gim_elegido].direccion + ")";
            return  g;
        },
        jefeMostrar: function() {
            const j = this.jefes[this.jefe_elegido].nombre;
            return  j;
        },
        listaCorta: function() {
            if(this.jefes[this.jefe_elegido].nivel <= 3) {
                return true;
            }
            return false;
        },
        cantFilas: function() {
            return (this.listaCorta) ? 12 : 22;
        }
    },
    methods: {
        copiar: function(e) {
            var copyTextarea = document.querySelector('#lista');
            copyTextarea.select();

            try {
                var successful = document.execCommand('copy');
                var msg = successful ? 'successful' : 'unsuccessful';
                this.texto_copiado = true;
                console.log('Copying text command was ' + msg);
            } catch (err) {
                console.log('Oops, unable to copy');
            }
        }
    }
})
