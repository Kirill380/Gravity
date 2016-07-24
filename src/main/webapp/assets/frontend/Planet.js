"use strict";

export default function Planet(options) {
    var opt = options || {};
    var name = opt.name || "Unnamed";

    function showName() {
        alert(name);
    }

    this.showName = showName;

}