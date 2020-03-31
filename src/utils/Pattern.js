export const regName = name => {
  let result = new RegExp("^[A-Za-z0-9_\\-.]+$");
  return result.test(name);
};

export const regPassword = password => {
  let result = new RegExp("^([a-zA-Z0-9]{10,})+$");
  return result.test(password);
};

export const regPhone = phone => {
  let result = new RegExp("(^(\\+)\\d{12})+$");
  return result.test(phone);
};

export const regEmail = email => {
  let result = new RegExp(
    "^([A-Za-z0-9_\\-.])+@([A-Za-z0-9_\\-.])+\\.([A-Za-z]{2,4})$"
  );
  return result.test(email);
};
