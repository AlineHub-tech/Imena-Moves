export const load = (key, fallback) => {
  try {
    const data = localStorage.getItem(key);
    if (!data) return fallback;
    return JSON.parse(data);
  } catch {
    return fallback;
  }
};

export const save = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
};