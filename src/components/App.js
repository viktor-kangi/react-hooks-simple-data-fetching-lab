// create your App component here

import React, {useEffect, useState} from "react";

const url = "https://dog.ceo/api/breeds/image/random"

function App() {
    const [dogImages, setDogImages] = useState("")

    useEffect(() => {
        fetch(url)
        .then((response) => response.json())
        .then((image) => {
            setDogImages(image.message)
        })
    }, [])
    if(dogImages === ""){
        return <p>Loading...</p>
    }
    return (
        <div>
            <img src={dogImages} alt="Random Dog" />
        </div>
    )
}

export default App
