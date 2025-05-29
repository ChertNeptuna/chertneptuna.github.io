// Run: npm run critical
import { generate } from 'critical';


generate({
    base: './',
    src: 'index.html',
    target: {
        // Output file
        css: 'css/critical.min.css',
    },
    width: 1980,
    height: 1100,
    inline: true,
    ignore: {
        atrule: ['@font-face'],
    },
})
    .then(() => {
        console.log('Critical CSS сгенерирован!');
    })
    .catch(err => {
        console.error('Ошибка:', err);
    });