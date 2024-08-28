export const timeToMinutes = (time: string) => {
  const [hours, minuts] = time.split(':').map(Number);
  return hours * 60 + minuts;
};
export const minutesToTime = (minutes: number) => {
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;
  return `${String(hours).padStart(2, '0')}:${String(mins).padStart(2, '0')}`;
};
