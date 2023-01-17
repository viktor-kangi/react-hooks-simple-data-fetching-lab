// create your App component here

import React, {useEffect, useState} from "react";

const API = "https://dog.ceo/api/breeds/image/random"

function App() {
    const [dogImages, setDogImages] = useState("")

    useEffect(() => {
        fetch(API)
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
            <img src={dogImages} alt="A Random Dog" />
        </div>
    )
}

export default App
