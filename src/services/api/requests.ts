export const fetchValue = (value = "") => {
  return new Promise(resolve =>
    setTimeout(() => resolve({ data: value }), 2000)
  );
};
