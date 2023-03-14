var container = document.querySelector(".content");
var text = container.innerHTML;

var reg = /\s+.+/g;

var newHtml = text.replace(reg, function (s) {
  s = s.replace(/\s/, "");
  return "<p>" + s + "</p>";
});

container.innerHTML = newHtml;
