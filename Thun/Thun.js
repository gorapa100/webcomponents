(function () {
  class Thun {
    constructor() {}
    static init() {
      console.log("바로실행");
    }
  }

  window["$t"] = Thun;
  $t.init();
})();
