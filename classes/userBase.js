class UserBase {
  constructor(names) {
    this.users = names;
  }

  count() {
    return this.users.length;
  }

  getNames() {
    return this.users.map(u => u.getName());
  }

  getIntroductions() {
    return this.users.map(u => u.getIntroduction());
  }

  getIntroductionsTwo() {
    return this.users.reduce
    ((arr, u) => [...arr, u.getIntroduction()], 
    [],
    );
  }
}

module.exports = UserBase;
