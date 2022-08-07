import cron from "node-cron";
import bot from "./bot.js"

function init() {
    cron.schedule('* * * * *', () => {
        bot.message()
    });
}

export default {
    init,
}
