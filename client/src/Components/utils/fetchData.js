const exeroptions={method: 'GET',
headers: {
  'content-type': 'application/octet-stream',
  'X-RapidAPI-Key': '1f7da9fe20msh26abc0eabd301b0p11e27ejsne50bb3a20ca1',
  'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
}
};


const fetchData=async(url,options)=>{
const response=await fetch(url,options);
const data= await response.json();
return data;
}

export {fetchData,exeroptions};