import { useState } from "react"

export default function Contact({toggleContact,setToggleContact}) {
   
    return (
        <>


    
                <form action="https://formspree.io/f/mzblbggv" method="POST" id="myForm" className={toggleContact?"form-show":""}>
                <i class="fa-solid fa-x" ></i>

                    <img src="https://sushirainbow.files.wordpress.com/2020/11/wp-1605470582609.gif" className="gif"></img>
                    <p class>Hey there! Want to Message Us?</p>
                    <div class="form-padding">
                        <div class="input-div" >
                            <input type="text" name="email" placeholder="Your Name" autocomplete="off" required></input>
                            {/* <input type="text" placeholder="Your Name" name="name" autocomplete="off" required> */}
                        </div>
                        <div class="input-div">
                            <input type="email" name="email" placeholder="Your Email" autocomplete="off" required></input>
                        </div>
                        <textarea placeholder="Write a message..." name="message" autocomplete="off" required></textarea>
                    </div>

                    <div className="btn-div">
                        <button className="btn btn-send" type="submit" id="submit_btn">Send Message</button>
                    </div>
                </form>
      


        </>
    )
}