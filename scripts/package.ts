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
      target: {
        target: "dmg",
        arch: ["x64", "arm64"],
      },
      icon: "../musican.icns",
    },
  },
});
