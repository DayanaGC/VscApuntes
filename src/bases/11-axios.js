
        


   import axios from 'axios'

   const apiKey = 'gxUxvIBODPWHqIpVUqW0P9gVcvN1ssF9'

   //`https://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`


 const giphyApi = axios.create({
     baseURL: 'https://api.giphy.com/v1/gifs',
     params: {
         api_key: apiKey
     }
     
 })

export default giphyApi
 
 
//giphyApi.get('/random')
 //.then( resp => {

   //  const { data } = resp.data
   //  const { url } = data.images.original


   //console.log( url )


    //const img = document.createElement('img')
    //img.src = url

     //document.body.append( img )

//})