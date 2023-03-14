/**
 * 根据协议的多选框是否选中设置注册按钮状态
 */
function setSubmitButtonStatus() {
  var agree = document.querySelector(".policy input");
  var btn = document.querySelector("button[type='submit']");
  // if (agree.checked) {
  //   btn.disabled = false;
  // } else {
  //   btn.disabled = true;
  // }
  btn.disabled = !agree.checked;
}

/**
 * 根据手机号文本框中的文本，设置发送验证码按钮的状态
 */
function setSendCodeButtonStatus() {
  var phone = document.querySelector(".phone input");
  var btn = document.querySelector(".captcha button");
  btn.disabled = !phone.length === 11;
}

/**
 * 根据当前选中的爱好，设置已选择爱好文本
 */
function setSelectedLoves() {}
