const Year = new Date();
let YearNow = Year.getFullYear();

function Footer() {
    return (
        <footer>
            <h1 className="copyRight">&copy; Agathi Photography {YearNow} </h1> 
        </footer>
            
       
    )
};

export default Footer;