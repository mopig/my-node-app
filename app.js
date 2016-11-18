require('dotenv').config();
const PORT = process.env.PORT || 3000;

const koa = require('koa');
const app = new koa();

app.use((ctx, next) => {
  const start = new Date();
  return next().then(() => {
    const ms = new Date() - start;
    console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
  });
});

// reponse

app.use(ctx => {
    ctx.body = 'Hello Koa';
});

app.listen(PORT);
