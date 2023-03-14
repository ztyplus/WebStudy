// 完成表单验证

/**
 * 验证账号
 */
function validateLoginId() {
  var div = document.getElementById("loginId");
  var inp = div.querySelector("input");
  var msg = div.querySelector(".msg");
  var loginId = inp.value.trim();
  if (!loginId) {
    div.className = "form-item err";
    msg.innerHTML = "请输入账号";
    return false;
  } else {
    div.className = "form-item";
    msg.innerHTML = "";
    return true;
  }
}

/**
 * 验证密码
 */
function validatePassword() {
  var div = document.getElementById("loginPass");
  var inp = div.querySelector("input");
  var msg = div.querySelector(".msg");
  var loginPass = inp.value.trim();
  if (!loginPass) {
    div.className = "form-item err";
    msg.innerHTML = "请输入密码";
    return false;
  } else {
    div.className = "form-item";
    msg.innerHTML = "";
    return true;
  }
}

/**
 * 验证整个表单，设置内容和状态
 * @return {boolean} 验证通过返回true
 */
function validateForm() {
  var login = validateLoginId();
  var pass = validatePassword();
  return login && pass;
}

var loginId = document.querySelector("#loginId input");
var passWd = document.querySelector("#loginPass input");
loginId.addEventListener("input", validateLoginId);
passWd.addEventListener("input", validatePassword);

var form = document.querySelector(".form-container");
form.addEventListener("submit", function (e) {
  var result = validateForm();
  if (!result) {
    e.preventDefault();
  }
});
