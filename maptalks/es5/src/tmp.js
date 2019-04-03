var _proto = {};
function Size(x, y) {
    this.x = x;
    this.y = y;
}
Size.prototype.add = function add(x, y) {
    var w, h;

    if (x instanceof Size) {
      w = this.width + x.width;
      h = this.height + x.height;
    } else {
      w = this.width + x;
      h = this.height + y;
    }

    return new Size(w, h);
  };
