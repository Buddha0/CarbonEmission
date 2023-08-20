import { data } from "./CausesAndSolutionApi"
import { Link } from "react-router-dom"

export default function Causes() {
    return (
        <>
            <div className="cause-and-solution-section">
                <div className="section-title">
                <h1>Causes and Solutions of Carbon Emission</h1>
                </div>
      
                <div className="grid-gallery">
                    {data.map((datas) => {
                        return (
                            <div className="grid-card">
                                <img src={datas.image} className="grid-img"></img>
                                <div className="grid-card-description">
                                    <h1>{datas.title}</h1>
                                    <p>{datas.cause.substring(0,90)}...</p>
                                   <Link to = {`/cardsInfo/${datas.title}`} ><button>Know More</button></Link> 
                                    
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}