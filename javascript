var map = L.map('map').setView([32.5,-115.1],10);

L.tileLayer(
'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
{
attribution:'© OpenStreetMap'
}
).addTo(map);

fetch('datos.csv')
.then(response => response.text())
.then(data => {

const rows = data.split('\n').slice(1);

rows.forEach(row => {

const cols = row.split(',');

const id = cols[0];
const direccion = cols[1];
const lat = parseFloat(cols[2]);
const lng = parseFloat(cols[3]);
const estado = cols[4];

if(estado.trim() === "SIN ESTADO"){

L.marker([lat,lng])
.addTo(map)
.bindPopup(
"<b>ID:</b> " + id +
"<br><b>Dirección:</b> " + direccion
);

}

});

});
