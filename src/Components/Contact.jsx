

export default function Contact({ toggleContact, setToggleContact }) {

    return (
        <>

            <form action="https://formspree.io/f/mqkvpyyv"
                method="POST"
                id="myForm"
                className={toggleContact ? "form-show" : ""}>
                <i className="fa-solid fa-x" onClick={() => setToggleContact(false)}></i>

                <img src="https://sushirainbow.files.wordpress.com/2020/11/wp-1605470582609.gif" className="gif"></img>
                <p className>Hey there! Want to Message Us?</p>
                <div className="form-padding">
                    <div className="input-div" >
                        <input type="text"
                            placeholder="Your Name"
                            autoComplete="off" required></input>

                    </div>
                    <div className="input-div">
                        <input type="email" name="email" placeholder="Your Email" autoComplete="off" required></input>
                    </div>
                    <textarea placeholder="Write a message..." name="message" autoComplete="off" required></textarea>
                </div>

                <div className="btn-div">
                    <button className="btn btn-send" type="submit" id="submit_btn">Send Message</button>
                </div>
            </form>



        </>
    )
}