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
  bundle: {
    app: {
      template: "./server/views/application.handlebars",
      development: {
        templateDest: "./../server/views/application.handlebars",
        entry: "./client/src/app.ts",
        dest: development + "/client"
      }
    }
  },
  server: {
    nodemon: {
      server: development + "/server.js",
      watch: development + "/server/**/*"
    }
  },
  typescript: {
    server: {
      tsconfig: "./tsconfig.json",
      development: {
        src: ["./server.ts", "./server/**/*.ts"],
        dest: development
      }
    },
    client: {
      tsconfig: "./client/tsconfig.json",
      development: {
        src: ["./client/**/*.ts"],
        dest: development + "/client"
      }
    }
  }
}
