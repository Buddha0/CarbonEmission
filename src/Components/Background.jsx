import Nav from "./Nav"
export default function Background({title}) {
    return (
        <>
            <div className="about-section">
                <Nav />
                <div className="about-title">
                    <h1>{title}</h1>
                </div>
            </div>
        </>
    )
}