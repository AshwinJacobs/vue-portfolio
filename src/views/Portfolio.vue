<template>
  <div class="Portfolio">
    <h1>This is an about page</h1>
  </div>
  <div class="Neon Header">
    <header class="Neon-Bottom"><h1>Love Neon</h1></header>
  </div>

  <div class="Neon Content">
    <div class="Neon-Bottom Content-Body">
      <p>
        Webtwo ipsum voxy skype eduvant convore ning waze jaiku zimbra kippt,
        diigo kippt kno yoono insala zooomr. Geni cloudera kno convore cloudera,
        plickers tumblr trulia blekko fleck, quora yuntaa gsnap. Lanyrd chartly
        hulu, quora groupon knewton, loopt. Imeem dogster odeo oovoo cotweet
        chartly prezi vuvox, yuntaa hulu dopplr reddit zappos kno. Yoono gsnap
        blyve wikia geni, sococo odeo kiko. Zynga hulu xobni dopplr napster hulu
        zappos yuntaa, mozy zillow vimeo handango ngmoco kno. Spock greplin
        jiglu divvyshot balihoo, zanga zimbra. Edmodo zoosk squidoo joost zlio,
        dopplr twones wakoopa. Voxy blippy oooj jiglu cuil, grockit palantir.
      </p>
      <p>
        Greplin handango etsy plickers rovio jumo, kiko voki heroku. Vimeo bitly
        squidoo eduvant, trulia. Skype lanyrd zappos lala yoono weebly, dogster
        omgpop napster. Greplin zooomr insala wikia zapier twitter, vuvox
        hipmunk kiko plickers. Voxy greplin yoono appjet foodzie empressr,
        balihoo movity loopt mozy glogster, twones bitly plugg bitly.
      </p>
      <p>
        whrrl. Movity reddit omgpop handango, ideeli scribd. Ebay zooomr imeem
        quora prezi stypi, grockit empressr cuil plaxo, joukuu wakoopa mog
        vuvox. Joukuu lanyrd convore, wikia. Ifttt mozy spotify zlio balihoo,
        dropio ideeli sclipo. Klout revver yuntaa heekya zapier whrrl revver
        ngmoco, blippy wakoopa grockit boxbe wufoo napster. Heroku flickr
        hipmunk yoono meebo foodzie, cloudera trulia dogster. Gooru hulu fleck
        twitter whrrl jajah, heekya blippy jajah mzinga. Tumblr ning chartly
        hojoki nuvvo, woopra wufoo plugg. foodzie zapier. Glogster babblely
        yuntaa ning blippy blyve bitly, spock voxy sifteo voki spotify. etsy
        weebly knewton. Odeo akismet zinch jiglu, mzinga. Nuvvo zanga zinch
        woopra etsy joost, empressr tumblr jiglu. Zynga cloudera joyent bubbli
        quora, zappos zillow voki.
      </p>
    </div>
  </div>
  <div class="Neon Footer"></div>
  <div class="Neon-Bottom"><p>Some contact information and legalese</p></div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=ZCOOL+QingKe+HuangYou");

body {
  background: #35494a;
  color: white;
  font-family: "ZCOOL QingKe HuangYou", sans-serif;
  font-size: 18px;
  letter-spacing: 3px;
  line-height: 1.4;
}
p {
  color: white;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0 0 0.5rem;
  position: relative;
  text-shadow: 0 0 15px darkgray;
}
h1:after {
  background: #d7fc00;
  border: 2.5px solid #d7fc00;
  border-radius: 50px;
  box-shadow: 0 0 15px darkgrey;
  content: "";
  position: absolute;
  bottom: -6px;
  left: -2.5px;
  width: 100%;
}

header h1 {
  display: inline-block;
  margin: 0 0 calc(0.5rem + 5px);
}

.Neon {
  margin: 5vw;
  position: relative;
}
.Neon:before,
.Neon:after {
  background: #fe2d79;
  border: 2.5px solid #fe2d79;
  border-radius: 50px;
  box-shadow: 0 0 15px #a37c8f;
  content: "";
  display: block;
  height: calc(100% + 2.5vw);
  position: absolute;
  left: 0;
  top: 0;
  width: 0;
}
.Neon:after {
  left: auto;
  right: 0;
}
.Neon-Bottom {
  height: 100%;
  margin: 0 5vw;
  position: relative;
}
.Neon-Bottom:after {
  background: #fe2d79;
  border: 2.5px solid #fe2d79;
  border-radius: 50px;
  box-shadow: 0 0 15px #a08793;
  content: "";
  display: block;
  height: 0;
  position: absolute;
  left: -5vw;
  bottom: calc(-2.5vw - 5px);
  width: calc(100% + 10vw - 5px);
}

.Neon.Header {
  margin: 5vw 5vw 0;
}
.Neon.Header:before,
.Neon.Header:after {
  background: #fe2d79;
  border: 2.5px solid #fe2d79;
  box-shadow: 0 0 15px #a37c8f;
  height: calc(100% + 2.5vw);
}

.Neon.Content {
  margin: 5vw;
  position: relative;
}
.Neon.Content:before,
.Neon.Content:after {
  background: #d7fc00;
  border: 2.5px solid #d7fc00;
  box-shadow: 0 0 15px darkgray;
}
.Neon-Bottom.Content-Body {
  height: 100%;
  margin: 10vw 5vw 5vw;
  position: relative;
}
.Neon-Bottom.Content-Body:after {
  background: #d7fc00;
  border: 2.5px solid #d7fc00;
  box-shadow: 0 0 15px darkgray;
  position: absolute;
}

.Neon.Footer {
  margin: 5vw 5vw 10vw;
  position: relative;
}
.Neon.Footer:before,
.Neon.Footer:after {
  background: #00d2ff;
  border: 2.5px solid #00d2ff;
  box-shadow: 0 0 15px #80a9c4;
}
footer.Neon-Bottom {
  height: 100%;
  margin: 10vw 5vw 5vw;
  position: relative;
}
footer.Neon-Bottom:after {
  background: #00d2ff;
  border: 2.5px solid #00d2ff;
  box-shadow: 0 0 15px #80a9c4;
  position: absolute;
}
</style>
