const { getTodaySchedule } = require('./schedule');
const { bot } = require('./bot');

exports.setCommands = function () {
    bot.command('schedule', (ctx) => {
        const schedule = getTodaySchedule();
        ctx.reply(schedule);
    });

    const jokes = ['Быстрее бы 23 февраля, а то у меня шампунь заканчивается', "Детство - это когда кот старше тебя", 'Собака тебя любит, а кот с тобой чисто из-за денег'];

    bot.command('giveJoke', (ctx) => {
        const jokeIndex = Math.floor(Math.random() * jokes.length);
        const joke = jokes[jokeIndex];
        ctx.reply(joke);
    });

    const photos = ['https://picsum.photos/200/300/', 'https://www.1zoom.ru/big2/582/255388-svetik.jpg', 'https://s1.1zoom.ru/big0/955/263198-werecat.jpg', 'https://im0-tub-ru.yandex.net/i?id=c0d0ce165474a15bdee716f23b66a08e&ref=rim&n=33&w=333&h=188']

    bot.command('replyWithPhoto', (ctx) => {
        const photoIndex = Math.floor(Math.random() * photos.length);
        const photo = photos[photoIndex];
        ctx.replyWithPhoto(photo);
    });
}