import React, { useState } from 'react'

// function Demo() {
//     const[number, setNumber] = useState(15)
//     const submit = () => {
//         setNumber(20)
//     }
//   return (
//     <div>
//         <p>{number}</p>
//         <button onClick={submit}>Click</button>
//     </div>
//   )
// }

 function Demo() {
    const [name, setName] = useState({ firstName: '', lastName: '' });

    const handlefirstNameChange = (event) => {
    //   const { name: inputName, value } = event.target;
      setName((prevName) => ({
        ...prevName,
        firstName:event.target.value,
      }));
    };

    const handlesSecondNameChange = (event) => {
        //   const { name: inputName, value } = event.target;
          setName((prevName) => ({
            ...prevName,
            lastName:event.target.value,
          }));
        };
  
    return (
      <div>
        <label>First Name:</label>
        <input
        //   id="firstNameInput"
        //   type="text"
        //   name="firstName"
          value={name.firstName}
          onChange={handlefirstNameChange}
        />
        <br />
        <label>Last Name:</label>
        <input
        //   id="lastNameInput"
        //   type="text"
        //   name="lastName"
          value={name.lastName}
          onChange={handlesSecondNameChange}
        />
        <br />
        <p>
          Hello, {name.firstName} {name.lastName}!
        </p>
      </div>
    );
  }


export default Demo