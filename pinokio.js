const path = require('path')
module.exports = {
  version: "3.6",
  title: "YuE",
  description: "[NVIDIA ONLY] YuEGP--A Web UI for YuE, an Open Full-song Generation Foundation Model (10G VRAM required), via https://github.com/deepbeepmeep/YuEGP",
  icon: "icon.png",
  menu: async (kernel, info) => {
    let installed = info.exists("app/env")
    let running = {
      install: info.running("install.js"),
      start: info.running("start.js"),
      update: info.running("update.js"),
      reset: info.running("reset.js")
    }
    if (running.install) {
      return [{
        default: true,
        icon: "fa-solid fa-plug",
        text: "Installing",
        href: "install.js",
      }]
    } else if (installed) {
      if (running.start) {
        let local = info.local("start.js")
        if (local && local.url) {
          return [{
            default: true,
            icon: "fa-solid fa-rocket",
            text: "Open Web UI",
            href: local.url,
          }, {
            icon: 'fa-solid fa-terminal',
            text: "Terminal",
            href: "start.js",
          }, {
            icon: "fa-regular fa-folder-open",
            text: "Output Files",
            href: "app/inference/output",
            fs: true
          }]
        } else {
          return [{
            default: true,
            icon: 'fa-solid fa-terminal',
            text: "Terminal",
            href: "start.js",
          }]
        }
      } else if (running.update) {
        return [{
          default: true,
          icon: 'fa-solid fa-terminal',
          text: "Updating",
          href: "update.js",
        }]
      } else if (running.reset) {
        return [{
          default: true,
          icon: 'fa-solid fa-terminal',
          text: "Resetting",
          href: "reset.js",
        }]
      } else {
        return [{
          icon: "fa-solid fa-power-off",
          text: "16G VRAM Generate",
          href: "start.js",
          params: {
            profile: 1
          }
        }, {
          icon: "fa-solid fa-power-off",
          text: "16G VRAM Reference",
          href: "start.js",
          params: {
            profile: 1,
            icl: true
          }
        }, {
          icon: "fa-solid fa-power-off",
          text: "12G VRAM Generate",
          href: "start.js",
          params: {
            profile: 3
          }
        }, {
          icon: "fa-solid fa-power-off",
          text: "12G VRAM Reference",
          href: "start.js",
          params: {
            profile: 3,
            icl : true
          }
        }, {
          icon: "fa-solid fa-power-off",
          text: "10G VRAM Generate",
          href: "start.js",
          params: {
            profile: 4
          }
        }, {
          icon: "fa-solid fa-power-off",
          text: "10G VRAM Reference",
          href: "start.js",
          params: {
            profile: 4,
            icl: true
          }
        }, {
          icon: "fa-regular fa-folder-open",
          text: "Output Files",
          href: "app/inference/output",
          fs: true
        }, {
          icon: "fa-solid fa-plug",
          text: "Update",
          href: "update.js",
        }, {
          icon: "fa-solid fa-plug",
          text: "Install",
          href: "install.js",
        }, {
          icon: "fa-regular fa-circle-xmark",
          text: "Reset",
          href: "reset.js",
        }]
      }
    } else {
      return [{
        default: true,
        icon: "fa-solid fa-plug",
        text: "Install",
        href: "install.js",
      }]
    }
  }
}
