const climas = [
'🌫', // 0 niebla
'☃', // 1 nieve
'☁', // 2 nublado
'🍃', // 3 viento
'☀', // 4 sol
'☂', // 5 luvia
'⛅' // 6 parcialmente
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
