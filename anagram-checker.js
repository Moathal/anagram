module.exports = function (text, str) {
 
  text = text.replace(/\s|\|&;\$%@"<>\(\)\+|\,/g, "");
  text = text.toLowerCase();
  str = str.replace(/\s|\|&;\$%@"<>\(\)\+|\,/g, "");
  str = str.toLowerCase();
  if (str.length !== text.length) return false;
  for (let i = 0; i < text.length; i++) {
    if (!str.includes(text[i])) return false;
    for (let j = 0; j <= str.length; j++) {
      if (str[j] == text[i]) {
        str = str.replace(str[j],"");
        break;
      }
    }
  }
  return true;
};