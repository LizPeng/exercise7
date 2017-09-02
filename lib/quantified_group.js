module.exports = function (str) {
  // TODO
  const match = str.match(/\b0x(\w{2})\b/g)
  return match.length == 8 ? true :false;
  //str.test(/^(0x[A-Fa-z0-9]{2}\s+){8}$/) 老师的做法
}