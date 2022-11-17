import { config } from 'dotenv'
import axios from 'axios'
import Period from './enums/period'
import { Candle } from './models/candle'

config()

const readMarketPrice = async (): Promise<number> => {
  const result = await axios.get(String(process.env.PRICES_API))
  const data = result.data
  const price = data.bitcoin.usd
  return price
}

const generateCandles = async () => {
  while (true) {
    const loopTimes = Period.ONE_MINUTE / Period.TEN_SECONDS
    const candle = new Candle('BTC')

    console.log('---\nGenerating new Candle\n---')
    
    for (let i = 0; i < loopTimes; i++) {
      const price = await readMarketPrice()
      candle.addValue(price)
      console.log(`Market price #${i + 1} of ${loopTimes}`)
      await new Promise((resolve) => setTimeout(resolve, Period.TEN_SECONDS))
    }

    candle.closeCandle()
    console.log('Candle closed')
    console.log(candle.toSimpleObject())
  }
}

generateCandles()
