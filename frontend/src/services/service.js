const API_URL = "http://localhost:8080/api/weather";

export async function getsearchweather(city) {

    console.log("1️⃣ Service appelé avec :", city);

    const url = `${API_URL}?city=${encodeURIComponent(city)}`;

    console.log("2️⃣ URL appelée :", url);

    const response = await fetch(url);

    console.log("3️⃣ Réponse reçue :", response);
    console.log("4️⃣ Status :", response.status);

    if (!response.ok) {
        throw new Error(`Erreur API : ${response.status}`);
    }

    const data = await response.json();

    console.log("5️⃣ Données JSON :", data);

    return data;
}