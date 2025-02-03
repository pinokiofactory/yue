module.exports = async (kernel) => {
  const port = await kernel.port()
  return {
    daemon: true,
    run: [
      {
        method: "shell.run",
        params: {
          env: {
            SERVER_PORT: port
          },
          venv: "../env",                // Edit this to customize the venv folder path
          path: "app/inference",                // Edit this to customize the path to start the shell from
          message: [
            "python gradio_server.py {{args.mode}} --profile {{args.profile}}",
          ],
          on: [{
            // The regular expression pattern to monitor.
            // When this pattern occurs in the shell terminal, the shell will return,
            // and the script will go onto the next step.
            "event": "/http:\/\/\\S+/",   

            // "done": true will move to the next step while keeping the shell alive.
            // "kill": true will move to the next step after killing the shell.
            "done": true
          }]
        }
      },
      {
        // This step sets the local variable 'url'.
        // This local variable will be used in pinokio.js to display the "Open WebUI" tab when the value is set.
        method: "local.set",
        params: {
          // the input.event is the regular expression match object from the previous step
          url: "{{input.event[0]}}"
        }
      }
    ]
  }
}
