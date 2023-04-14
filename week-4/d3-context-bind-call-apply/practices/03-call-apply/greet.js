// DO NOT MODIFY THE say FUNCTION
function say(name) {
  console.log(`${this.message} ${name}!`);
}

helloMessage = { message: 'Hello,' };
heyThereMessage = { message: 'Hey there,' };

applyReturn = helloMessage.call

say.call(helloMessage, "John");
say.call(heyThereMessage, "Michael");

