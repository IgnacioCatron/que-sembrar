const mesSelect = document.getElementById('mes');
const resultadoDiv = document.getElementById('resultado');
const detallesPlantaDiv = document.getElementById('detallesPlanta');

const plantas = [
    {
        nombre: 'Tomates',
        imagen: 'images/tomates.png',
        meses: ['enero', 'febrero', 'marzo', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'],
        consejos: {
            agua: 'Riego frecuente, pero sin encharcar.',
            sol: 'Pleno sol, al menos 6-8 horas diarias.',
            suelo: 'Suelo bien drenado, rico en materia orgánica.',
            asociaciones: 'Albahaca, lechuga, zanahoria, cebolla.',
            recomendacion: 'Evitar el riego por encima para prevenir enfermedades foliares.'


        }
    },
    {
        nombre: 'Papas',
        imagen: 'images/papas.png',
        meses: ['enero', 'febrero', 'marzo'],
        consejos: {
            agua: 'Riego constante, especialmente durante la floración.',
            sol: 'Pleno sol.',
            suelo: 'Suelo suelto y bien drenado, preferiblemente arenoso.',
            asociaciones: 'Frijoles, maíz, repollo.',
            recomendacion: 'Rotar cultivos para prevenir plagas y enfermedades.'

        }
    },
    {
        nombre: 'Acelga',
        imagen: 'images/acelga.png',
        meses: ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'],
        consejos: {
            agua: 'Riego moderado, mantener el suelo húmedo.',
            sol: 'Pleno sol a sombra parcial.',
            suelo: 'Suelo rico en nutrientes, bien drenado.',
            asociaciones: 'Zanahoria, cebolla, apio.',
            recomendacion: 'Cosechar hojas exteriores regularmente para promover nuevo crecimiento.'

        }
    },
    {
        nombre: 'Zanahoria',
        imagen: 'images/zanahoria.png',
        meses: ['enero', 'febrero', 'marzo', 'julio', 'agosto', 'septiembre'],
        consejos: {
            agua: 'Riego regular y profundo.',
            sol: 'Pleno sol.',
            suelo: 'Suelo arenoso y suelto, bien drenado.',
            asociaciones: 'Tomates, cebolla, lechuga.',
            recomendacion: 'Aflojar el suelo antes de la siembra para facilitar el crecimiento de la raíz.'

        }
    },
    {
        nombre: 'Sandía',
        imagen: 'images/sandia.png',
        meses: ['enero', 'febrero', 'marzo', 'octubre', 'noviembre', 'diciembre'],
        consejos: {
            agua: 'Riego abundante, especialmente durante la fructificación.',
            sol: 'Pleno sol.',
            suelo: 'Suelo arenoso, bien drenado y fértil.',
            asociaciones: 'Maíz, calabaza, girasol.',
            recomendacion: 'Colocar paja debajo de las frutas para evitar la podredumbre.'

        }
    },
    {
        nombre: 'Melón',
        imagen: 'images/melon.png',
        meses: ['enero', 'febrero', 'marzo', 'octubre', 'noviembre', 'diciembre'],
        consejos: {
            agua: 'Riego regular, sin encharcar.',
            sol: 'Pleno sol.',
            suelo: 'Suelo suelto y bien drenado.',
            asociaciones: 'Maíz, lechuga, rábano.',
            recomendacion: 'Proporcionar un soporte para las frutas si se cultivan verticalmente.'

        }
    },
    {
        nombre: 'Cebollín',
        imagen: 'images/cebollin.png',
        meses: ['enero', 'febrero', 'marzo', 'julio', 'agosto', 'septiembre'],
        consejos: {
            agua: 'Riego moderado.',
            sol: 'Pleno sol.',
            suelo: 'Suelo bien drenado, ligero.',
            asociaciones: 'Zanahoria, apio, lechuga.',
            recomendacion: 'Cortar las hojas regularmente para promover el crecimiento denso.'


        }
    },
    {
        nombre: 'Rabanitos',
        imagen: 'images/rabano.png',
        meses: ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'],
        consejos: {
            agua: 'Riego frecuente y ligero.',
            sol: 'Pleno sol a sombra parcial.',
            suelo: 'Suelo suelto y bien drenado.',
            asociaciones: 'Lechuga, zanahoria, guisantes.',
            recomendacion: 'Sembrar cada dos semanas para una cosecha continua.'

        }
    },
    {
        nombre: 'Repollo',
        imagen: 'images/repollo.png',
        meses: ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio'],
        consejos: {
            agua: 'Riego regular.',
            sol: 'Pleno sol.',
            suelo: 'Suelo arcilloso y bien drenado.',
            asociaciones: 'Remolacha, cebolla, papa.',
            recomendacion: 'Utilizar redes para proteger del ataque de insectos.'

        }
    },
    {
        nombre: 'Lechuga',
        imagen: 'images/lechuga.png',
        meses: ['enero', 'febrero', 'marzo', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'],
        consejos: {
            agua: 'Riego constante, sin encharcar.',
            sol: 'Pleno sol a sombra parcial.',
            suelo: 'Suelo suelto y bien drenado, rico en materia orgánica.',
            asociaciones: 'Rábano, zanahoria, pepino.',
            recomendacion: 'Plantar en sombra parcial durante los meses más calurosos.'

        }
    },
    {
        nombre: 'Pimenton',
        imagen: 'images/pimientos.png',
        meses: ['enero', 'febrero', 'marzo', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'],
        consejos: {
            agua: 'Riego regular, mantener el suelo húmedo.',
            sol: 'Pleno sol.',
            suelo: 'Suelo fértil y bien drenado.',
            asociaciones: 'Zanahorias, pepinos, berenjenas.',
            recomendacion: 'Apoyar las plantas para evitar que se caigan por el peso de los frutos.'

        }
    },
    {
        nombre: 'Berenjenas',
        imagen: 'images/berenjenas.png',
        meses: ['enero', 'febrero', 'marzo', 'octubre', 'noviembre', 'diciembre'],
        consejos: {
            agua: 'Riego moderado.',
            sol: 'Pleno sol.',
            suelo: 'Suelo fértil y bien drenado.',
            asociaciones: 'Frijoles, espinacas, cebollas.',
            recomendacion: 'Proteger de los insectos con mallas finas.'

        }
    },
    {
        nombre: 'Cebollas',
        imagen: 'images/cebolla.png',
        meses: ['abril', 'mayo', 'junio', 'octubre', 'noviembre', 'diciembre'],
        consejos: {
            agua: 'Riego moderado.',
            sol: 'Pleno sol.',
            suelo: 'Suelo suelto y bien drenado.',
            asociaciones: 'Zanahorias, remolacha, lechuga.',
            recomendacion: 'Evitar el riego excesivo para prevenir la pudrición de la raíz.'

        }
    },
    {
        nombre: 'Coliflor',
        imagen: 'images/coliflor.png',
        meses: ['abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre'],
        consejos: {
            agua: 'Riego regular.',
            sol: 'Pleno sol.',
            suelo: 'Suelo arcilloso y bien drenado.',
            asociaciones: 'Frijoles, cebolla, zanahoria.',
            recomendacion: 'Blanquear las cabezas cubriéndolas con las hojas exteriores.'

        }
    },
    {
        nombre: 'Apio',
        imagen: 'images/apio.png',
        meses: ['abril', 'mayo', 'junio'],
        consejos: {
            agua: 'Riego frecuente.',
            sol: 'Pleno sol a sombra parcial.',
            suelo: 'Suelo húmedo y bien drenado.',
            asociaciones: 'Lechuga, repollo, pepino.',
            recomendacion: 'Mantener el suelo constantemente húmedo para evitar un sabor amargo.'

        }
    },
    {
        nombre: 'Kale',
        imagen: 'images/kale.png',
        meses: ['abril', 'mayo', 'junio'],
        consejos: {
            agua: 'Riego regular.',
            sol: 'Pleno sol a sombra parcial.',
            suelo: 'Suelo fértil y bien drenado.',
            asociaciones: 'Zanahoria, remolacha, cebolla.',
            recomendacion: 'Cosechar las hojas más viejas primero para un suministro continuo.'

        }
    },
    {
        nombre: 'Puerro',
        imagen: 'images/puerro.png',
        meses: ['abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre'],
        consejos: {
            agua: 'Riego regular.',
            sol: 'Pleno sol.',
            suelo: 'Suelo suelto y bien drenado.',
            asociaciones: 'Zanahoria, apio, remolacha.',
            recomendacion: 'Amontonar tierra alrededor de los tallos para blanquearlos.'

        }
    },
    {
        nombre: 'Alcachofa',
        imagen: 'images/alcachofa.png',
        meses: ['abril', 'mayo', 'junio'],
        consejos: {
            agua: 'Riego abundante.',
            sol: 'Pleno sol.',
            suelo: 'Suelo fértil y bien drenado.',
            asociaciones: 'Guisantes, rábano, lechuga.',
            recomendacion: 'Dividir las plantas cada 3-4 años para mantener la producción.'

        }
    },
    {
        nombre: 'Habas',
        imagen: 'images/habas.png',
        meses: ['abril', 'mayo', 'junio'],
        consejos: {
            agua: 'Riego regular.',
            sol: 'Pleno sol.',
            suelo: 'Suelo bien drenado.',
            asociaciones: 'Zanahoria, col, lechuga.',
            recomendacion: 'Plantarlas cerca de estructuras de soporte para guiarlas.'


        }
    },
    {
        nombre: 'Hinojo',
        imagen: 'images/hinojo.png',
        meses: ['abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'],
        consejos: {
            agua: 'Riego moderado.',
            sol: 'Pleno sol.',
            suelo: 'Suelo fértil y bien drenado.',
            asociaciones: 'Tomate, lechuga, pepino.',
            recomendacion: 'No plantar cerca de otras hierbas ya que puede inhibir su crecimiento.'

        }
    },
    {
        nombre: 'Rúcula',
        imagen: 'images/rucula.png',
        meses: ['abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'],
        consejos: {
            agua: 'Riego moderado.',
            sol: 'Pleno sol a sombra parcial.',
            suelo: 'Suelo fértil y bien drenado.',
            asociaciones: 'Zanahoria, remolacha, cebolla.',
            recomendacion: 'Sembrar sucesivamente para cosechar hojas jóvenes y tiernas.'

        }
    },
    {
        nombre: 'Betarraga',
        imagen: 'images/betarraga.png',
        meses: ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'],
        consejos: {
            agua: 'Riego moderado.',
            sol: 'Pleno sol.',
            suelo: 'Suelo suelto y bien drenado.',
            asociaciones: 'Frijoles, espinacas, cebollas.',
            recomendacion: 'Mantener el suelo constantemente húmedo para una mejor formación de la raíz.'

        }
    },
    {
        nombre: 'Espinaca',
        imagen: 'images/espinacas.png',
        meses: ['julio', 'agosto', 'septiembre'],
        consejos: {
            agua: 'Riego regular y abundante.',
            sol: 'Pleno sol a sombra parcial.',
            suelo: 'Suelo fértil y bien drenado.',
            asociaciones: 'Fresas, zanahoria, rábano.',
            recomendacion: 'Sembrar en sombra parcial durante los meses más calurosos.'

        }
    },
    {
        nombre: 'Pepino',
        imagen: 'images/pepino.png',
        meses: ['octubre', 'noviembre', 'diciembre'],
        consejos: {
            agua: 'Riego frecuente.',
            sol: 'Pleno sol.',
            suelo: 'Suelo arenoso y bien drenado.',
            asociaciones: 'Maíz, rábano, lechuga.',
            recomendacion: 'Proveer un enrejado para mantener los frutos limpios y rectos.'

        }
    },
    {
        nombre: 'Zapallo italiano',
        imagen: 'images/calabacin.png',
        meses: ['octubre', 'noviembre', 'diciembre'],
        consejos: {
            agua: 'Riego regular.',
            sol: 'Pleno sol.',
            suelo: 'Suelo fértil y bien drenado.',
            asociaciones: 'Maíz, frijoles, rábano.',
            recomendacion: 'Cosechar los frutos jóvenes para estimular la producción continua.'

        }
    },
    {
        nombre: 'Zapallo',
        imagen: 'images/calabaza.png',
        meses: ['octubre', 'noviembre', 'diciembre'],
        consejos: {
            agua: 'Riego regular y profundo.',
            sol: 'Pleno sol.',
            suelo: 'Suelo fértil y bien drenado.',
            asociaciones: 'Maíz, frijoles, girasol.',
            recomendacion: 'Proteger los frutos en desarrollo de la humedad excesiva.'

        }
    },
    {
        nombre: 'Arvejas',
        imagen: 'images/guisantes.png',
        meses: ['octubre', 'noviembre', 'diciembre'],
        consejos: {
            agua: 'Riego regular.',
            sol: 'Pleno sol a sombra parcial.',
            suelo: 'Suelo suelto y bien drenado.',
            asociaciones: 'Zanahoria, rábano, lechuga.',
            recomendacion: 'Proveer soporte para que las plantas trepen y crezcan verticalmente.'

        }
    },
    {
        nombre: 'Porotos verdes',
        imagen: 'images/judias-verdes.png',
        meses: ['octubre', 'noviembre', 'diciembre'],
        consejos: {
            agua: 'Riego regular.',
            sol: 'Pleno sol.',
            suelo: 'Suelo bien drenado.',
            asociaciones: 'Maíz, rábano, calabaza.',
            recomendacion: 'Cosechar regularmente para incentivar una mayor producción.'

        }
    }
];







mesSelect.addEventListener('change', () => {
    const mes = mesSelect.value;
    const siembrasMes = plantas.filter(planta => planta.meses.includes(mes));
    resultadoDiv.innerHTML = '';
    detallesPlantaDiv.innerHTML = ''; // Limpiar detalles al cambiar de mes

    if (siembrasMes.length > 0) {
        const ul = document.createElement('ul');
        siembrasMes.forEach((planta) => {
            const li = document.createElement('li');
            li.innerHTML = `<img src="${planta.imagen}" alt="${planta.nombre}">${planta.nombre}`;
            li.onclick = () => mostrarDetalles(planta);
            ul.appendChild(li);
        });

        resultadoDiv.appendChild(ul);
    } else {
        resultadoDiv.textContent = 'Selecciona un mes para ver qué sembrar.';
    }
});

function mostrarDetalles(planta) {
    detallesPlantaDiv.innerHTML = `
        <h3>Consejos para el cultivo de ${planta.nombre}</h3>
        <p><strong>Agua:</strong> ${planta.consejos.agua}</p>
        <p><strong>Sol:</strong> ${planta.consejos.sol}</p>
        <p><strong>Suelo:</strong> ${planta.consejos.suelo}</p>
        <p><strong>Asociaciones:</strong> ${planta.consejos.asociaciones}</p>
        <p><strong>Recomendación:</strong> ${planta.consejos.recomendacion}</p>
    `;
}
