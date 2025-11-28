export function nowDateTime() {
  const d = new Date();
  const date = d.toISOString().slice(0, 10);
  const time = d.toTimeString().slice(0, 8);
  return `${date} ${time}`;
}