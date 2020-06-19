export const processTemperature = (temperature: number): string => {
  const integer = Math.round(temperature);

  if (temperature > 0) {
    return `+${integer}`;
  }

  if (temperature < 0) {
    return `-${integer}`;
  }

  return integer.toString();
};
