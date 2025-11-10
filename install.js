module.exports = {
  run: [
    {
      method: "shell.run",
      params: {
        message: [
          "git clone https://github.com/deepbeepmeep/YuEGP app",
        ]
      }
    },
    {
      method: "shell.run",
      params: {
        path: "app/inference",
        message: [
          "git clone https://huggingface.co/m-a-p/xcodec_mini_infer",

        ]
      }
    },
    {
      method: "script.start",
      params: {
        uri: "torch.js",
        params: {
          venv_python: "3.11",
          venv: "env",
          path: "app",
          // xformers: true,
          triton: true
        }
      }
    },
    {
      method: "shell.run",
      params: {
        venv: "env",
        path: "app",
        message: [
          "uv pip install -r requirements.txt",
          "uv pip install hf-xet"
        ]
      }
    },
    {
      method: "shell.run",
      params: {
        venv: "env",
        path: "app",
        message: [
          "uv pip install git+https://github.com/cocktailpeanut/transformers"
        ]
      }
    },
    {
      method: "notify",
      params: {
        html: "Installation successful! Click the 'start' tab to get started."
      }
    }
  ]
}
