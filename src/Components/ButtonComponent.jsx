
import Button from "react-bootstrap/Button";

const ButtonComponent = ({ variant, buttonText,toggleModule,name,onClick }) => {
  
    return (
        <Button variant={variant} onClick={toggleModule || onClick }  name="fullName" > {buttonText} </Button>
    )
}


export default ButtonComponent;
