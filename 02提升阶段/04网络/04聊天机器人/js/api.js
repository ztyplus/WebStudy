var API = (function () {
  const BASE_URL = "https://study.duyiedu.com/api/";
  const TOKEN_KEY = "token";

  async function get(path) {
    const headers = {};
    const token = localStorage.getItem(TOKEN_KEY);
    if (token) {
      headers.authorization = `Bearer ${token}`;
    }
    const resp = await fetch(BASE_URL + path, { headers });
    return await resp.json();
  }

  async function post(path, data) {
    const headers = {
      "Content-Type": "application/json",
    };
    const token = localStorage.getItem(TOKEN_KEY);
    if (token) {
      headers.authorization = `Bearer ${token}`;
    }

    const resp = await fetch(BASE_URL + path, {
      method: "POST",
      headers,
      body: JSON.stringify(data),
    });
    const result = await resp.json();
    const authorization = resp.headers.get("authorization");
    if (result.code === 0 && authorization) {
      localStorage.setItem(TOKEN_KEY, authorization);
    }
    return result;
  }

  function reg(userInfo) {
    return post("user/reg", userInfo);
  }

  function login(loginInfo) {
    return (result = post("user/login", loginInfo));
  }

  function exists(loginId) {
    return get("user/exists?loginId=" + loginId);
  }

  function profile() {
    return get("user/profile");
  }

  function sendChat(content) {
    return post("chat", { content });
  }

  function getHistory() {
    return get("chat/history");
  }

  function logOut() {
    localStorage.removeItem(TOKEN_KEY);
  }

  return {
    get,
    post,
    reg,
    login,
    exists,
    profile,
    sendChat,
    getHistory,
    logOut,
  };
})();
