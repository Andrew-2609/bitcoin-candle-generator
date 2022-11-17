import { Channel, connect } from 'amqplib'
import { config } from 'dotenv'

export const createMessageChannel = async (): Promise<Channel> => {
  config()

  try {
    const connection = await connect(process.env.AMQP_SERVER)
    const channel = await connection.createChannel()
    await channel.assertQueue(process.env.QUEUE_NAME)

    console.log('Connected to RabbitMQ')

    return channel
  } catch (error) {
    console.error(`An error occurred while trying to connect to RabbitMQ`, error)
  }
}
