interface IPosition {
  coords: {
    latitude: number,
    longitude: number,
  }
}

export const getCurrentPosition = () => new Promise<IPosition>((resolve, reject) => {
  navigator.geolocation.getCurrentPosition(resolve, reject);
});
