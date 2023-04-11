/* function findUser(userID) {
  for (let i = 1; i < model.users.length; i++) {
    if (model.users[i].userId == userID) {
      console.log(model.users[i]);
      return model.users[i];
    } else {
      return null;
    }
  }
} */
function findUser(userID) {
  for (let user of model.users) {
    if (user.userId == userID) {
      return user;
    }
  }
  return null;
}
