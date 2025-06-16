module.exports = {
  run: [
    // Edit this step to customize the git repository to use
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
    // Delete this step if your project does not use torch
    {
      method: "script.start",
      params: {
        uri: "torch.js",
        params: {
          venv_python: "3.11",
          venv: "env",                // Edit this to customize the venv folder path
          path: "app",                // Edit this to customize the path to start the shell from
          // xformers: true   // uncomment this line if your project requires xformers
        }
      }
    },
    // Edit this step with your custom install commands
    {
      method: "shell.run",
      params: {
        venv: "env",                // Edit this to customize the venv folder path
        path: "app",                // Edit this to customize the path to start the shell from
        message: [
          "uv pip install -r requirements.txt",
          "uv pip install gradio"
        ]
      }
    },
    {
      method: "shell.run",
      params: {
        venv: "env",                // Edit this to customize the venv folder path
        path: "app",                // Edit this to customize the path to start the shell from
        message: [
          "uv pip install git+https://github.com/cocktailpeanut/transformers"
        ]
      }
    },
//    {
//      method: "fs.link",
//      params: {
//        venv: "app/env"
//      }
//    }
  ]
}
