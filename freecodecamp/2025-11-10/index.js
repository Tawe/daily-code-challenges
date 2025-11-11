function getExtension(filename) {
  const parts = filename.split('.');
  const last = parts.pop();          // take last segment
  return (parts.length === 0 || last === '') ? 'none' : last;
}

const x = getExtension("README")