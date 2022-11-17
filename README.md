# Bitcoin Candle Generator

## About the project
This simple project uses data from [Coin Gecko](https://www.coingecko.com/)'s API to generate candles. Then, these candles are enqueued in RabbitMQ to be consumed by another API.

### What are Candles?
Candles are the base elements of a Candlestick Chart. 

According to [Groww](https://groww.in/blog/how-to-read-candlestick-charts), "Candlesticks are a visual representation of the size of price fluctuations. Traders use these charts to identify patterns and gauge the near-term direction of price".

### What is [RabbitMQ](https://www.rabbitmq.com)?
RabbitMQ is an open-source message-broker software (sometimes called message-oriented middleware) that originally implemented the Advanced Message Queuing Protocol (AMQP) and has since been extended with a plug-in architecture to support Streaming Text Oriented Messaging Protocol (STOMP), MQ Telemetry Transport (MQTT), and other protocols.

### Used technologies
This project is made with **TypeScript**, and the application connects to a RabbitMQ **Docker** container using **docker-compose**.

---

This project was made based on [Sidney Sousa](https://www.youtube.com/c/SidneySousa)'s course "Criando uma aplicação financeira com Node.js e RabbitMQ".

Thanks for reading 🍷🗿!