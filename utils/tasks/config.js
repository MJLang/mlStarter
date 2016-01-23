"use strict";
const development = "build/development";

module.exports = {
  clean: ["./server.js", "./server/**/*.js", "build/**/*"],
  copy: {
    serverViews: {
      development: {
        src: ["./server/views/**/*.jade"],
        dest: development + "/server/views"
      }
    }
  },
  typescript: {
    server: {
      tsconfig: "./tsconfig.json",
      development: {
        dest: development
      }
    }
  }
}
