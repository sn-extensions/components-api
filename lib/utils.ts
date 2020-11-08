declare global {
  interface Window { msCrypto: any; }
}

export const generateUUID = () => {
  const crypto = window.crypto || window.msCrypto;

  if (crypto) {
    const buffer = new Uint32Array(4);
    crypto.getRandomValues(buffer);
    let index = -1;
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (character) => {
      index++;
      const r = (buffer[index>>3] >> ((index%8)*4))&15;
      const v = character === 'x' ? r : (r&0x3|0x8);
      return v.toString(16);
    });
  }

  let date = new Date().getTime();

  if (window.performance && typeof window.performance.now === "function") {
    date += performance.now(); // Use high-precision timer if available.
  }

  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (character) => {
    const r = (date + Math.random() * 16) % 16 | 0;
    date = Math.floor(date / 16);
    return (character === 'x' ? r : (r&0x3|0x8)).toString(16);
  });
}