function importAll(r) {
  return r.keys().map(r);
}

export default importAll(
  require.context("./../assets/images", false, /^[^@]+\.(png|jpe?g|svg)$/)
);
