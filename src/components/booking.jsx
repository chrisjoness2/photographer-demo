import bookImg from '../images/bookphoto.webp';


function SubmitClicked() {
        alert("Thank you for booking with Agathi Photograpgy")
};

function Book() {
    return (
        <>
        <img className='bookingBackgroundImg' src={bookImg} alt="photographerImg" />
        <div>
            
            <form className='form'> 
            <h1 className='bookingTitle'> Booking & Pricing Information </h1>
            <div className='bookingPrice'>
               <p className='costs'> Maternity: $250 | 1 Hour </p>
               <p className='costs'> Wedding: $500 | 3 Hours</p>
               <p className='costs'> Other: Pricing depends on your wants/needs. Specify below in message box</p>
            </div>

               <label for='firstname'> Full Name  </label> <input type='text' id="fName"/>
               <br/>
               <label for='phonenumber'> Phone Number </label> <input type='text' id="number"/>
               <br/>
               <label for='email'> Email </label> <input type='text' id="email"/>
               <br/>
               <label for='date'> Date </label> <input type='date' id="date"/>
               <br/>
               <label for='firstname'> Type of Photo Shoot: </label> 
               <select id="photoshootOptions">
                <option value="maternity"> Maternity</option>
                <option value="wedding"> Wedding</option>
                <option value="other"> Other</option>
                <br/>
                </select> 
                <br/>
                <label id="txtArea"> Description of your wants </label>
                <br/>
                <textarea name="message" rows="3" cols="50"> </textarea>
                <br/>

            <button onClick={SubmitClicked}    className='submitBtn'> Submit</button>
            </form>
        </div>
        </>
    )
};

export default Book;