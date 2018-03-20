const jefes = [
    { nivel: 5, nombre: "Huevo nivel 5"},
    { nivel: 5, nombre: "Lugia"},
    { nivel: 4, nombre: "Huevo nivel 4"},
    { nivel: 4, nombre: "Absol"},
    { nivel: 4, nombre: "Agron"},
    { nivel: 4, nombre: "Golem"},
    { nivel: 4, nombre: "Tyranitar"},
    { nivel: 3, nombre: "Huevo nivel 3"},
    { nivel: 3, nombre: "Gengar"},
    { nivel: 3, nombre: "Jolteon"},
    { nivel: 3, nombre: "Jynx"},
    { nivel: 3, nombre: "Machamp"},
    { nivel: 3, nombre: "Piloswine"},
    { nivel: 2, nombre: "Huevo nivel 2"},
    { nivel: 2, nombre: "Electabuzz"},
    { nivel: 2, nombre: "Exeggutor"},
    { nivel: 2, nombre: "Magnetric"},
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

const indicadores_posicion = [
"1⃣ ",
"2⃣ ",
"3⃣ ",
"4⃣ ",
"5⃣ ",
"6⃣ ",
"7⃣ ",
"8⃣ ",
"9⃣ ",
"🔟",
"1⃣1⃣ ",
"1⃣2⃣ ",
"1⃣3⃣ ",
"1⃣4⃣ ",
"1⃣5⃣ ",
"1⃣6⃣ ",
"1⃣7⃣ ",
"1⃣8⃣ ",
"1⃣9⃣ ",
"2⃣0⃣ ",
];

var app = new Vue({
    el: '#app',
    data: {
        gimnasios: gimnasios,
        jefes: jefes,
        gim_elegido: 0,
        jefe_elegido: 0,
        hora_elegida: "12:00",
        texto_copiado: false,
        participante: "",
        participantes: [],
        mostrar_participantes: false
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
        },
        textoListado: function() {
            const cant = (this.listaCorta) ? 10 : 20;
            let t = "";
            for (var i = 0; i < cant; ++i) {
                t += indicadores_posicion[i] + " - " + ((this.participantes[i]) ? this.participantes[i] : "") + "\n";
            }
            return t;
        },
    },
    methods: {
        agregarParticipante: function(e) {
            if(this.participante != "") {
                this.participantes.push(this.participante)
                this.participante = "";
            }
        },
        quitarParticipante: function(idx) {
            this.participantes.splice(idx, 1);
        },
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
