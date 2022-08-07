import { Telegraf } from 'telegraf'
import cron from './cron.js'


const bot = new Telegraf("5544848709:AAG0FsiIJQ-RrCoD5nYG2D77suGFT-25Ncs")
cron.init()

const button =  { 
    reply_markup: { 
      inline_keyboard: [ 
        [ 
          { 
            text: "click me", 
            callback_data:" process.env.CHANNEL_SUBSCRIBE_CHECK", 
          } 
        ]
      ]
    } 
  }

bot.start((ctx) => {
    ctx.reply('Welcome')
})

function message() {
    const message = bot.telegram.sendMessage("@PutinZdohhhhh", "еще не сдох", button)
}

bot.launch()

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))


export default {
    message,
}
