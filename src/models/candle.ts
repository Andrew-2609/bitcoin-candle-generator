import CandleColor from "../enums/candle-color"

export class Candle {
  low: number
  high: number
  open: number
  close: number
  color: CandleColor
  finalDateTime: Date
  values: number[]
  currency: string

  constructor(currency: string) {
    this.currency = currency
    this.low = Infinity
    this.high = 0
    this.open = 0
    this.close = 0
    this.color = CandleColor.UNDETERMINED
    this.values = []
  }

  addValue(value: number): void {
    this.values.push(value)

    if (this.values.length === 1) {
      this.open = value
    }

    if (this.low > value) {
      this.low = value
    }

    if (this.high < value) {
      this.high = value
    }
  }

  closeCandle(): void {
    if (!this.values.length) return

    this.close = this.values.at(-1)
    this.finalDateTime = new Date()

    this.color = this.open > this.close ? CandleColor.RED : CandleColor.GREEN

    if (this.open === this.close) {
      this.color = CandleColor.UNDETERMINED
    }
  }

  toSimpleObject(): object {
    const { values, ...finalObj } = this
    return finalObj
  }
}
