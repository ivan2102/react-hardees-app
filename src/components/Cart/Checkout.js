import classes from './Checkout.module.css';
import { useRef, useState } from 'react';


const isEmpty = value => value.trim() === '';
const isNotFiveCharacters = value => value.trim().length !== 5;



const Checkout = props => {

    const [formInputsValidity, setFormInputsValidity] = useState({
      
        firstName: true,
        lastName: true,
        address: true,
        city: true,
        zipCode: true

    });

    const firstNameInputRef = useRef();
    const lastNameInputRef = useRef();
    const addressInputRef = useRef();
    const cityInputRef = useRef();
    const zipCodeInputRef = useRef();

    const confirmHandler = (event) => {

        event.preventDefault();

        const enteredfirstName = firstNameInputRef.current.value;
        const enteredlastName = lastNameInputRef.current.value;
        const enteredAddress = addressInputRef.current.value;
        const enteredCity = cityInputRef.current.value;
        const enteredzipCode = zipCodeInputRef.current.value;

        const enteredfirstNameIsValid = !isEmpty(enteredfirstName);
        const enteredlastNameIsValid = !isEmpty(enteredlastName);
        const enteredAddressIsValid = !isEmpty(enteredAddress);
        const enteredCityIsValid = !isEmpty(enteredCity);
        const enteredzipCodeIsValid = !isNotFiveCharacters(enteredzipCode);

        setFormInputsValidity({

            firstName: enteredlastNameIsValid,
            lastName: enteredlastNameIsValid,
            address: enteredAddressIsValid,
            city: enteredCityIsValid,
            zipCode: enteredzipCodeIsValid
        });

        const formIsValid = 
        enteredfirstNameIsValid && 
        enteredlastNameIsValid && 
        enteredAddressIsValid && 
        enteredCityIsValid && 
        enteredzipCodeIsValid;

        if(!formIsValid) {

           return;
        }

        props.onConfirm({

            firstName: enteredfirstName,
            lastName: enteredlastName,
            address: enteredAddress,
            city: enteredCity,
            zipCode: enteredzipCode
        });
    };

   return(

       <form onSubmit={confirmHandler} className={classes.form}>
       <div className={`${classes.control} ${formInputsValidity.firstName ? '' : classes.invalid}`}>
       <label htmlFor="firstName">First Name</label>
       <input type="text" ref={firstNameInputRef} id="firstName"/>
       {!formInputsValidity.firstName && <p>Please enter a valid first name field.</p>}
       </div>

        <div className={`${classes.control} ${formInputsValidity.lastName ? '' : classes.invalid}`}>
       <label htmlFor="lastName">Last Name</label>
       <input type="text" ref={lastNameInputRef} id="lastName"/>
       {!formInputsValidity.lastName && <p>Please enter a valid last name field.</p>}
       </div>

      <div className={`${classes.control} ${formInputsValidity.address ? '' : classes.invalid}`}>
       <label htmlFor="address">Address</label>
       <input type="text" ref={addressInputRef} id="address"/>
       {!formInputsValidity.address && <p>Please enter a valid address field.</p>}
       </div>

        <div className={`${classes.control} ${formInputsValidity.city ? '' : classes.invalid}`}>
       <label htmlFor="city">City</label>
       <input type="text" ref={cityInputRef} id="city"/>
       {!formInputsValidity.city && <p>Please enter a valid city field.</p>}
       </div>

        <div className={`${classes.control} ${formInputsValidity.zipCode ? '' : classes.invalid}`}>
       <label htmlFor="code">Zip Code</label>
       <input type="text" ref={zipCodeInputRef} id="zip_code"/>
       {!formInputsValidity.zipCode && <p>Please enter a valid zip code field.</p>}
       </div>

       <div className={classes.actions}>
       <button type="button"  onClick={props.onCancel}>Cancel</button>
       <button className={classes.submit}>Confirm</button>
       </div>
       </form>
   )
}

export default Checkout;