const generateItems = (count, cb) => {
  return Array.from(new Array(count), (_, idx) => cb(idx));
};

export { generateItems };
