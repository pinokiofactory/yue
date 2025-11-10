module.exports = async (kernel) => {
  const port = await kernel.port()
  return {
    daemon: true,
    run: [
      {
        method: "shell.run",
        params: {
          venv: "../env",
          env: { 
            SERVER_PORT: port
          },
          path: "app/inference",
          message: [
            "python gradio_server.py --profile {{args.profile}} {{args.icl ? '--icl' : ''}} {{args.compile ? '--compile' : ''}}",
          ],
          on: [{
            "event": "/http:\/\/\\S+/",
            "done": true
          }]
        }
      },
      {
        method: "local.set",
        params: {
          url: "{{input.event[0]}}"
        }
      }
    ]
  }
}
