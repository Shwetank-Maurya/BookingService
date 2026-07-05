const amqp = require("amqplib");

async function test() {
  try {
    const conn = await amqp.connect("amqp://guest:guest@localhost:5672");
    console.log("Connected!");
    await conn.close();
  } catch (err) {
    console.error(err);
  }
}

test();