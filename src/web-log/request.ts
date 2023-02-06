export default function (url: string, data: any) {
  const blob = new Blob([JSON.stringify(data)], {
    type: 'application/json; charset=UTF-8',
  });
  navigator.sendBeacon(url, blob);
}
