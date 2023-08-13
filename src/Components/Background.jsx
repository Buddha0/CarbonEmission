import Nav from "./Nav"
export default function Background({title,toggleContact, setToggleContact}) {
    return (
        <>
            <div className="about-section">
                <Nav toggleContact={toggleContact} setToggleContact={setToggleContact} />
                <div className="about-title">
                    <h1>{title}</h1>
                </div>
            </div>
        </>
    )
}