import cron from "node-cron";
import bot from "./bot.js"

function init() {
    cron.schedule('20 15 * * *', () => {
        bot.message()
    });
}

export default {
    init,
}
