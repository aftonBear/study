<template>
  <div>
    {{text}} Nice to meet Vue.

    <ul>
      <ol v-for="item in items">
        {{item}}
      </ol>
    </ul>

    <h3>Type here:</h3> <textarea v-model="message" class="message" rows="5" maxlength="72"></textarea><br>
    <p class="booktext">{{ message }} </p>

    <p>
      <button @click="increment">+</button>
      {{counter}}
    </p>

    <div id="demo" :style="{backgroundColor: 'hsl(${x}, 80%, 50%)'}" @mousemove="xCoordinate">
      <p>
        <button @click="increment">+</button>
        {{ counter2 }}
        <button @click="decrement">-</button>
        <button class="inc" @click="counter > 0 ? counter -= 1 : 0">-</button>
        <span class="quant-text">Quantity: {{ counter }}</span>
        <button class="inc" @click="counter += 1">+</button>
      </p>
      <p>Pixels across: {{ x }}</p>
    </div>
  </div>
</template>

<script>
  export default{
    data(){
      return {
        text: 'Hello World!',
        items: [
          'thingie',
          'another thingie',
          'lots of stuff',
          'yadda yadda'
        ],
        message: 'This is a good place to type things.',
        counter: 0,
        counter2: 0,
        x: 0
      }
    },
    methods: {
      increment(){
        this.counter2++;
      },
      decrement(){
        this.counter2--;
      },
      xCoordinate(e){
        this.x = e.clientX;
      }
    }
  }
</script>

<style>
  body {
    font-size: 40px;
  }

  /* Google Fonts */
  @import url(https://fonts.googleapis.com/css?family=Open+Sans);

  /* set global font to Open Sans */
  body {
    font-family: 'Open Sans', 'sans-serif';
    background-image: url(http://benague.ca/files/pw_pattern.png);
  }

  button {
    border-radius: 5px;
    padding: 15px 25px;
    font-size: 22px;
    text-decoration: none;
    margin: 20px;
    color: #fff;
    position: relative;
    display: inline-block;
    background-color: #55acee;
    box-shadow: 0px 5px 0px 0px #3C93D5;
    border: none 0;
  }

  button:active {
    transform: translate(0px, 5px);
    box-shadow: 0px 1px 0px 0px;
    outline: none 0;
  }

  button:hover {
    background-color: #6FC6FF;
  }

  button:focus {
    outline: none 0;
  }

  p {
    text-align: center;
  }

  /* Google Fonts */
  @import url(https://fonts.googleapis.com/css?family=Open+Sans);

  /* set global font to Open Sans */
  body {
    font-family: 'Open Sans', 'sans-serif';
    background-image: url(http://benague.ca/files/pw_pattern.png);
  }

  button {
    border-radius: 5px;
    padding: 15px 25px;
    font-size: 22px;
    text-decoration: none;
    margin: 20px;
    color: #fff;
    position: relative;
    display: inline-block;
    background-color: #55acee;
    box-shadow: 0px 5px 0px 0px #3C93D5;
    border: none 0;
  }

  button:active {
    transform: translate(0px, 5px);
    box-shadow: 0px 1px 0px 0px;
    outline: none 0;
  }

  button:hover {
    background-color: #6FC6FF;
  }

  button:focus {
    outline: none 0;
  }

  p {
    text-align: center;
  }

  #demo {
    width: 100vw;
    height: 100vh;
    padding: 15vmin;
    font-size: 30px;
    transition: 0.2s background-color ease;
  }
</style>
