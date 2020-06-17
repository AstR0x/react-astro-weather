interface Props {
  coords: {
    latitude: number,
    longitude: number,
  }
}

export const getCurrentPosition = () => new Promise<Props>(resolve => {
  navigator.geolocation.getCurrentPosition(resolve);
});
