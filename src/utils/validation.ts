export const validations = (values: any) => {
  let errors: any = {};

  Object.keys(values).map(item => {
    if (!values[item]) {
      return errors[item] = 'Field is required';
    }
    return true;
  });

  return errors;
};


export const validateForm = (inputs: any) => {
  //check for null values before validation
  for (let i = 0; i < inputs.length; i++) {
    const input = inputs[i];
    if (input.value === null) {
      alert('All fields are required!');
      return false;
    } else {
      switch (input.type) {
        case 'email':
          const emailRegEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          if (!emailRegEx.test(input.value)) {
            alert('Please enter a valid email address!');
            return false;
          }
          break;
        case 'text':
          const regex = /^[a-zA-Z ]*$/;
          if (!regex.test(input.value)) {
            alert('Please enter valid characters!');
            return false;
          }
      }
    }
  }
  return true;
};

