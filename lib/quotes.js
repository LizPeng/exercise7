module.exports = function (str) {
  // TODO
  return str.match(/"[^"]*"/g)
  //贪婪匹配和惰性匹配
  //str.match(/".*?"/g)
}