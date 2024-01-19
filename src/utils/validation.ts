interface ValidationInput {
  value: string;
  error?: string;
  valid?: boolean;
  focus?: () => void;
}

export function validateEmail(username: ValidationInput): boolean {
  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (emailRegex.test(username.value)) {
    username.error = "";
    return true;
  } else {
    username.error = "Please enter a valid email address";
    username.focus();
    return false;
  }
}

export function validatePassword(password: ValidationInput): boolean {
  const passwordRegex =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;

  if (password.value.length < 8 || !passwordRegex.test(password.value)) {
    password.error =
      "Password should be a minimum of 8 characters and include at least one uppercase letter, one number, and one symbol.";
    password.focus();
    return false;
  } else {
    password.error = "";
    return true;
  }
}
