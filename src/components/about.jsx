import me from '../images/aggieselfie.jpg';



function About(){
    return (
        <div>
        
            <div className='aboutMeImgDiv'>
                <p><img className="AggieSelfieImg" src={me} alt="aggieselfie" /> 
                    Hello everyone and thank you for visiting my page. I wanted to let you know who you 
                    will be working with if you book with me. My name is Agatha and I am from Whitestone, New York.
                    I started getting into photography after getting some portraits taken of myself. I fell
                    in love with how professional photos captured every mood and aspect of people and the world. 
                    I have been a photographer for 8 years now and I honestly can't see myself doing anything else.
                    <br/>
                    I want to capture moments of your life you will cherish forever! Can't wait to meet you!
                </p>
            </div>
        </div>
        
        

    )
};

export default About