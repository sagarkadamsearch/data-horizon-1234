import axios from "axios";


const debounce = (delay) => {
    let timeoutId;
  
    return function (searchFunction) {
      // Clear the previous timeout
      console.log('inside debounce')
      clearTimeout(timeoutId);
      // Get all parameters as an object
     
      // Set a new timeout
      timeoutId = setTimeout(() => {
        searchFunction();
      }, delay);
    };
  };


  export default debounce;