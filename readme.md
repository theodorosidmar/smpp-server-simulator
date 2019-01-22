> Simulates an SMPP server.

Simulates an SMPP server with a **1 in 10** chance of returning error status on **submit_sm** (SMS sending) requests.

```
1. Clone the repository
2. Run npm install
3. Run npm start
4. Connect and send smpp commands to it
```

## TODO
* Set success and error percentage via configuration (maybe env variables)
* Inbox simulation
* Liveness check (?)
* Readiness check (?)
* Gracefully shutdown (?)
* Testing all smpp callbacks

## License
MIT