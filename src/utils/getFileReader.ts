export const getFileReader = (file: File) => {
  const reader = new FileReader();
  reader.readAsText(file);
  return reader;
};
