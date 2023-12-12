import bookImg from '../images/bookphoto.webp';


function SubmitClicked() {
        alert("Thank you for booking with Agathi Photograpgy")
};

function Book() {
    return (
        <>
        <img className='bookingImg' src={bookImg} alt="photographerImg" />
        <div>
            
            <form className='form'> 
            <h1 className='bookingTitle'> Booking Information </h1>
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
                <input className='sumbitBtn' type="submit"/>
                </select> 
                <br/>
            <button onClick={SubmitClicked}    className='submitBtn'> Submit</button>
            </form>
        </div>
        </>
    )
};

export default Book;