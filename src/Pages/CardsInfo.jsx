import { useParams } from "react-router-dom"
import { data } from "../Components/AboutComponents/CausesAndSolutionApi"
import { Link } from "react-router-dom"
import Background from "../Components/Background"
import Nav from "../Components/Nav"
import { useEffect } from "react"

export default function CardsInfo() {
    
    const { title } = useParams()
    const singleData = data.find((datas) => datas.title === title)
    useEffect(() => {
        // 👇️ scroll to top on page load
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
      }, []);
    
    return (
        <>
            <Background title = {title}/>
            <div className="cards-info-section">
                <div className="section-title">
                    <h1>{title}</h1>
                </div>


                <div className="card-info-container">

                    <img src={singleData.image} className="singleCardImg"></img>
                    <div className="card-info-description">

                        <div className="cause">
                            <h1>Cause</h1>
                            <p>{singleData.cause}</p>
                        </div>

                        <div className="solution">
                            <h1>Solution</h1>
                            <p>{singleData.solution}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="other-cards-section">
                <div className="section-title">
                <h1>Other Causes and Solution of Carbon Emissions</h1>
                </div>
                       
                <div className="grid-gallery">
                    {data.filter((data) => data.title !== title).map((datas) => {
                        return (
                            <div className="grid-card">
                                <img src={datas.image} className="grid-img"></img>
                                <div className="grid-card-description">
                                    <h1>{datas.title}</h1>
                                    <p>{datas.cause.substring(0, 90)}...</p>
                                    <Link to={`/cardsInfo/${datas.title}`} onClick = {()=>window.scrollTo({top: 0, left: 0, behavior: 'smooth'})}><button>Know More</button></Link>

                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>


        </>
    )
}