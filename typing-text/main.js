import sine from 'Gibberish'

let color = 'red'

view Main {
  let sex = 'I love you <3... I\'d like to fuck you'
  <h1>{sex}</h1>

  <div class="center">
    <Cock />
    <Circle class="moreLeft" />
    <Circle />
  </div>

  $ = { margin: 'auto' }
  $center = { textAlign: 'center' }
}

view Circle {
  $ = {
    width: 100,
    height: 100,
    background: color,
    margin: ['auto'],
    marginTop: -50,
    borderRadius: 50,
    opacity: 0.7,
    flexDirection: '',
    display: 'inline-block'
  }
}

view Cock {
  var length = 100

  setInterval(() => {
    length += wave.sine(100)

    console.log(length)
  }, 1)


  $ = {
    width: 44,
    height: length,
    background: color,
    margin: 'auto',
    borderRadius: 22
  }
}