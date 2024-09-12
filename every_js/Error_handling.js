// Error = An Object that is created to represent a problem that occurs
//              Occur often with user input or establishing a connection

// try { } = Encloses code that might potentially cause an error
// catch { } = Catch and handle any thrown Errors from try { }
// finally { } = (optional) Always executes. Used mostly for clean up
//                    ex. close files, close connections, release resources




try{
  console.log("Hello");
    // NETWORK ERRORS
    // PROMISE REJECTION
    // SECURITY ERRORS
}       
            
catch(error){
  console.error(error);
}                
                     
finally{
   //  close files,
   //  close connections,
   //  release resources
 console.log("This always executes");
   
}

console.log("welcome to my website a simble ");

// try {
//     let result = someFunction(); // إذا كانت هناك مشكلة في هذه الدالة
//   } catch (error) {
//     console.error("حدث خطأ: ", error); // يتم التقاط الخطأ هنا
//   } finally {
//     console.log("يتم تنفيذ هذه الكتلة دائمًا، سواء حدث خطأ أم لا.");
//   }

try{
    const dividend = Number(window.prompt("Enter a dividend: "));
    const divisor = Number(window.prompt("Enter a divisor: "));

    if(divisor == 0){
        throw new Error("You cnt't divide by zero! ")
    }

    if(isNaN(dividend) || isNaN(divisor)){
        throw new Error("Values must be a number  | يجب أن تكون القيم عبارة عن رقم")
    }
    const result = dividend / divisor;
    console.log(result);
}
catch(error){
    console.error(error);
}

console.log("you have reached the end!");
