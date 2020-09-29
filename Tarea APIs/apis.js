btn = document.querySelector("#btnDescargar");
img = document.querySelector("#imgDia");

async function getData() {
  response = await axios.get(
    "https://api.nasa.gov/neo/rest/v1/feed?api_key=npRcLXFne1vGGfxyXcaeyKqkUoVtv6bULsgyEUfr"
  );
  console.log(response);
  img.src = response.data.url;
}
// getData()
btn.onclick = getData;