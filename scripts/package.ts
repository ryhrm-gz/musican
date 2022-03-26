import { build } from "electron-builder";

build({
  config: {
    productName: "musican",
    copyright: "Copyright © 2022 Ryo Hirama and other contributors",
    files: ["dist/**/*"],
    directories: {
      output: "release/",
    },
    mac: {
      target: "dmg",
    },
  },
});
