
function generatePassword(length, includeLowercase, includeUppercase, includeNumbers, includeSymbols){
     const lowercasechars = "qwertyuiopasdfghjkl;zxcvbnm";
     const uppercasechars = "QWERTYUIOPASDFGHJKLZXCVBNM";
     const numberchars = "0123456789";
     const symbolschars = "!@#$%^&*()_+=?>-<>|"

     let allowedshars = "";
     let password = "";
     
     allowedshars += includeLowercase ? lowercasechars : "";
     allowedshars += includeUppercase ? uppercasechars : "";
     allowedshars += includeNumbers ? numberchars : "";
     allowedshars += includeSymbols ? symbolschars : "";

     if(length <= 0){
        return `(password length must be at least 1)`;
     }
     if(allowedshars.length === 0){
        return `(At least 1 set of character needs to be selected)`;
     }

     for(let i = 0; i < length; i++){
        const randomIndex = Math.floor(Math.random() * allowedshars.length);
        password += allowedshars[randomIndex];
     }

     return password;
}

    const passwordLenghth = 12;
    const includeLowercase = true;
    const includeUppercase = true;
    const includeNumbers = true;
    const includeSymbols = true;

    const password = generatePassword(passwordLenghth,
                                     includeLowercase,
                                     includeUppercase,
                                     includeNumbers,
                                     includeSymbols);

    console.log(`Generated password: ${password}`);