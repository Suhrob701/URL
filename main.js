const ip = document.getElementById("ip");
const city = document.getElementById("city");
const country = document.getElementById("country");
const isp = document.getElementById("isp");
const map = document.getElementById("map");

async function fetchClocation() {
    try {
        let res = await fetch('http://ip-api.com/json/');
        let data = await res.json();

        ip.textContent = data.query;    
        city.textContent = data.city;
        country.textContent = data.country;
        isp.textContent = data.isp;

        let lat = data.lat;
        let lon = data.lon;
        map.src = `//www.google.com/maps?q=${lat},${lon}&output=embed`;
    } catch (error) {
        console.error("Xatolik:", error);
    }
}

fetchClocation();
