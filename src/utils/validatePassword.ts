function validatePassword(password: string): boolean {
  const minSix = password.length >= 6;

  return minSix;
}

export default validatePassword;
