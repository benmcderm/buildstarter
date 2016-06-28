const SessionApiUtil = {
  signUp(user, success, error) {
    $.ajax({
      url: "/api/user",
      type: "POST",
      dataType: "json",
      data: { user },
      success,
      error(err) {
        const errors = err.responseJSON;
        error("login", errors);
      }
    });
  },

  logIn(user, success, error) {
    $.ajax({
      url: "/api/session",
      type: "POST",
      data: { user },
      success,
      error(err) {
        const errors = err.responseJSON;
        error("login", errors);
      }
    });
  },

  logOut(success) {
    $.ajax({
      url: "/api/session",
      method: "DELETE",
      success,
      error: function() {
        console.log("Error in SessionApiUtil#logout");
      }
    });
  }
}

module.exports = SessionApiUtil;
