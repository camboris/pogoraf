const climas = [
'🌫', // 0 niebla
'☃', // 1 nieve
'☁', // 2 nublado
'🍃', // 3 viento
'☀', // 4 sol
'☂', // 5 luvia
'⛅' // 6 parcialmente
]

const jefes = [
    { nivel: 5, nombre: "Huevo nivel 5"},
    { nivel: 5, nombre: "Latios", clima: [3], cp_max: "2082", cp_max_clima: "2603"},
    { nivel: 5, nombre: "Latias", clima: [3], cp_max: "1929", cp_max_clima: "2412"},
    { nivel: 4, nombre: "Huevo nivel 4"},
    { nivel: 4, nombre: "Absol", clima: [0], cp_max: "1303", cp_max_clima: "1629"},
    { nivel: 4, nombre: "Aggron", clima: [6, 1], cp_max: "1716", cp_max_clima: "2145"},
    { nivel: 4, nombre: "Houndoom", clima: [4, 0], cp_max: "1445", cp_max_clima: "1806"},
    { nivel: 4, nombre: "Tyranitar", clima: [6, 0], cp_max: "2097", cp_max_clima: "2621"},
    { nivel: 4, nombre: "Walrein", clima: [5, 1], cp_max: "1489", cp_max_clima: "1862"},
    { nivel: 3, nombre: "Huevo nivel 3"},
    { nivel: 3, nombre: "Gengar", clima: [2, 0], cp_max: "1496", cp_max_clima: "1870"},
    { nivel: 3, nombre: "Granbull", clima: [2], cp_max: "1394", cp_max_clima: "1743"},
    { nivel: 3, nombre: "Jinx", clima: [1, 3], cp_max: "1435", cp_max_clima: "1794"},
    { nivel: 3, nombre: "Machamp", clima: [2], cp_max: "1650", cp_max_clima: "2063"},
    { nivel: 3, nombre: "Pinsir", clima: [5], cp_max: "1583", cp_max_clima: "1978"},
    { nivel: 3, nombre: "Piloswine", clima: [1, 4], cp_max: "1305", cp_max_clima: "1601"},
    { nivel: 2, nombre: "Huevo nivel 2"},
    { nivel: 2, nombre: "Exeggutor", clima: [3, 4], cp_max: "1666", cp_max_clima: "2083"},
    { nivel: 2, nombre: "Mawile", clima: [1, 2], cp_max: "848", cp_max_clima: "1060"},
    { nivel: 2, nombre: "Misdreavus", clima: [0], cp_max: "1018", cp_max_clima: "1272"},
    { nivel: 2, nombre: "Sableye", clima: [0], cp_max: "745", cp_max_clima: "932"},
    { nivel: 2, nombre: "Sneasel", clima: [0, 1], cp_max: "1067", cp_max_clima: "1334"},
]

//TODO: hacer lista iconos, poner cp aparte, como direccion en los gimansios y concatenar

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
            const j = this.jefes[this.jefe_elegido];
            let nj = j.nombre;
            if(j.clima) {
                let clima = j.clima.map((c) => climas[c])
                            .reduce((c, a) => c + a, '');
                nj = j.nombre + " (" + j.cp_max + " / " + clima + j.cp_max_clima + ")";
            }
            return  nj;
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
