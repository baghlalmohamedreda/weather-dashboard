const API_URL = "http://localhost:8080/api/weather";
export async function getsearchweather(city) {
    const url = `${API_URL}?city=${encodeURIComponent(city)}`;
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`Erreur API : ${response.status}`);
    }
    const data = await response.json();
    return data;
}