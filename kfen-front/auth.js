
export const basicAuthHeader = () => {
  const username = "andre";
  const password = "1337";
  const encoded = btoa(`${username}:${password}`);
  return { Authorization: `Basic ${encoded}` };
};
