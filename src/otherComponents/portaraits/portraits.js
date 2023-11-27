import axios from "axios"
import { useEffect, useState } from "react"

const Portraits = () => {
    const [portraits, setPortraits] = useState([])

    const getList = async () => {
        let res = await axios.get('http://localhost:2000/portraits')
        setPortraits(res.data)
    }
    useEffect(() => {
         getList()
    }, [])
    return (
        <div className="col-12 portraits">

            {
                portraits.map((item) => {
                    return (
                        <div key={item.id} className="portraitBox col-10">
                            <figure>
                                <img src={item.url} />
                            </figure>
                            <h2>
                                {item.title}
                            </h2>
                            <p>
                                Art is a diverse range of human activity, and its resulting product, that involves creative or imaginative talent generally expressive of technical proficiency, beauty, emotional power, or conceptual ideas.[1][2][3]

                                There is no generally agreed definition of what constitutes art,[4][5][6] and its interpretation has varied greatly throughout history and across cultures. In the Western tradition, the three classical branches of visual art are painting, sculpture, and architecture.[7] Theatre, dance, and other performing arts, as well as literature, music, film and other media such as interactive media, are included in a broader definition of the arts.[1][8] Until the 17th century, art referred to any skill or mastery and was not differentiated from crafts or sciences. In modern usage after the 17th century, where aesthetic considerations are paramount, the fine arts are separated and distinguished from acquired skills in general, such as the decorative or applied arts.

                                The nature of art and related concepts, such as creativity and interpretation, are explored in a branch of philosophy known as aesthetics.[9] The resulting artworks are studied in the professional fields of art criticism and the history of art.
                            </p>
                        </div>

                    )
                })
            }
        </div>

    )
}
export default Portraits