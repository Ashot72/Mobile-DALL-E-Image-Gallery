const dalleUrl = 'https://api.openai.com/v1/images/generations';

const dalleApiCall = async (prompt: string) => {
    
        const response = await fetch(dalleUrl, 
        {
           method: "POST",    
           headers: {
                 'content-type': 'application/json',
                 Authorization: `Bearer ${process.env.EXPO_PUBLIC_APIKEY}`
             },
                 body: JSON.stringify({
                    prompt,
                    n: 1,
                    size: "512x512"
                })
        })

        const json = await response.json()
        return json?.data[0]?.url       
}

export default dalleApiCall