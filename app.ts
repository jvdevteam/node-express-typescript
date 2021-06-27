import express from 'express';
const app = express();

app.use('Apiを呼び出す');

// 3000番ポートでAPIサーバーで起きる
app.listen(3000, () => {
    console.log("Start on port 3000.")
})

export default app;