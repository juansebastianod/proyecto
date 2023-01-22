// https://rapidapi.com/ para las apis 
//https://www.npmjs.com/package/gh-pages   para ponerla solo es descargar codigo y cambiar packege.json los scrip para q corra con npm run deply o cualquier nombre

//https://commentpicker.com/youtube-channel-id.php  para sacar el codigo de yutube 


const Api='https://youtube-v31.p.rapidapi.com/search?channelId=UCSCAJJ1RJ4rfRTVW4gjYTpQ&part=snippet%2Cid&order=date&maxResults=5';
const content=null || document.getElementById('content');
const options={method:'GET',
headers:{
    'X-RapidAPI-Host':'youtube-v31.p.rapidapi.com',
    'X-RapidAPI-Key':'c68edbdba9mshc3cb6eb8038f3b2p1f444ajsna5de19fe1256'}};


async function fetchData(urlApi){

const responce=await fetch(urlApi,options)
const data= await responce.json()
return data;
}



(async()=>{try{const videos=await fetchData(Api);let view=`
    ${videos.items.map(video=>`
      <div class="group relative">
        <div
          class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
          <img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}" class="w-full">
        </div>
        <div class="mt-4 flex justify-between">
          <h3 class="text-sm text-gray-700">
            <span aria-hidden="true" class="absolute inset-0"></span>
            ${video.snippet.title}
          </h3>
        </div>
      </div>
    `).slice(0,4).join('')}
    `;content.innerHTML=view;}catch(error){console.log(error);}})();