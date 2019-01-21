> Simulates a SMPP server.

Simulates a SMPP server and receive **90%** of success and **10%** of errors on **submit_sm** (SMS sending) request.

```
1. Clone the repository
2. Run npm install
3. Run npm start
4. Connect and send smpp commands to it
```

## TODO
* Set success and errors percentage via configuration (maybe env variables)
* Liveness check (?)
* Readiness check (?)
* Gracefully shutdown (?)
* Testing all smpp callbacks

## License
MIT