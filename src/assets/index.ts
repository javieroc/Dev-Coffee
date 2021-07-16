function importAll() {
  const promises = import.meta.glob('./*.jpg');
  const images: any = {};
  /* eslint-disable */
  for (const path in promises) {
    promises[path]().then((image) => images[path.replace(/^.*[\\/]/, '').replace(/\.[^/.]+$/, '')] = image);
  }
  return images;
}

export const images = importAll();
