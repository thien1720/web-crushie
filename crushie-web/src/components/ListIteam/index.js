import { useState, useEffect } from "react"

function ListIteam() {
    const [cards, setCard] = useState([])
    useEffect(() => {

        fetch("https://api-rn.onrender.com/project")
            .then((res) => res.json())
            .then((card) => setCard(card));

    }, [])

    // console.log(cards)
    return cards
}

export default ListIteam