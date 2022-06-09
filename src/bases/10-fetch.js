
const apiKey = 'gxUxvIBODPWHqIpVUqW0P9gVcvN1ssF9'

//https://api.giphy.com/v1/gifs/random?api_key=gxUxvIBODPWHqIpVUqW0P9gVcvN1ssF9



fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`)
    .then( resp => resp.json() )
    .then(({ data })=> {
        const { url } = data.imagenes.original
         

        const img = document.createElement('img')
        img.src = url


        document.body.apeend( img )
    }) 

    

