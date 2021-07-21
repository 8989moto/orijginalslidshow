let count = 0;
const mainElement = document.querySelector("div.main>img");
const url = [
"https://2.bp.blogspot.com/-z8M4Iqgiu88/W0xYwolc9yI/AAAAAAABNbY/k8DHWZ5Osvsq85nbCKoV0EfITJQGhcH8wCLcBGAs/s400/baseball_hit_man.png",
"https://3.bp.blogspot.com/-fzZlGKeAIjs/WPsEEGer3II/AAAAAAABD1s/zKA4JgqyP58He7HVO4ilJPv67Vx0FI6YgCLcB/s450/sports_ouen_baseball.png",
"https://1.bp.blogspot.com/-nFKrRtKvtzQ/WD_cdkySKbI/AAAAAAABAG0/R99JOmTIJAoxyVZVYDIYzTjfhPBvdgLrwCLcB/s180-c/golf_settai.png",
"https://1.bp.blogspot.com/-tVeC6En4e_E/X96mhDTzJNI/AAAAAAABdBo/jlD_jvZvMuk3qUcNjA_XORrA4w3lhPkdQCNcBGAsYHQ/s400/onepiece01_luffy.png",
"https://4.bp.blogspot.com/-vNWAqceM3a4/XLAde7hE1_I/AAAAAAABSY0/x6xuysVAp-c6eyzZk5fDQ_tjgOdiccsiQCLcBGAs/s180-c/sweets_pafe_parfait_ichigo.png",
"https://2.bp.blogspot.com/--yCZ9NOGK0Q/W1a5NUMb33I/AAAAAAABNko/KdbkLvHkltYeMpCG-TWtmStiAbT1p-MCACLcBGAs/s180-c/sushi_oke_nigiri.png",
"https://1.bp.blogspot.com/-UbN0yy2MMrM/XaKa5_0WWUI/AAAAAAABVj8/-YGIDDkzgPUkGRe9odTWisMXeIZBTK9wgCNcBGAsYHQ/s450/food_curryrice_white.png",
"https://2.bp.blogspot.com/-Yt5flW6JRco/Whu14FFXQDI/AAAAAAABIds/N8kwAOuy3HQs1x-Z0EaHxx35Q6ei1X4jgCLcBGAs/s600/bg_taki.jpg",
"https://2.bp.blogspot.com/--XyGmSuFJtk/XOPXPWcaKTI/AAAAAAABS6s/9zxLQUKTqzUs9NW4mJWhUvdaG8P_Ab66ACLcBGAs/s400/hanabi_sky.png",
"https://4.bp.blogspot.com/-_ul31RoWA9M/UrEhodv9stI/AAAAAAAAb7g/GBVEIJ0P2oY/s800/yakiniku_party.png",
"https://2.bp.blogspot.com/-UaRA1uGULPQ/U6gMioXOUxI/AAAAAAAAhpM/PGtbUKTyiOE/s800/bbq.png",
"https://1.bp.blogspot.com/-1xD_XApwF30/WCqdigOwVzI/AAAAAAAA_i0/L7skWxaXsk0v-83IjXq18p0_5Mg8Dx-wQCLcB/s800/shopping_bag_man.png",
"https://2.bp.blogspot.com/-GbkDTUCCK68/W6nZCRHlfOI/AAAAAAABPEc/bzLRZbYRjwI0TOnHd9QAS2ZIfBZBrLN3gCLcBGAs/s500/ofuro_sauna_loyly.png",
"https://1.bp.blogspot.com/-utdhhepfdW8/W-VEgX1lSGI/AAAAAAABQGI/JDxWaIYo_LQURXddfUOR6K-yGi0XRsrjwCLcBGAs/s400/ofuro_sentou_man.png",
"https://1.bp.blogspot.com/-KQRcV035KfU/X5OceapDSNI/AAAAAAABb_I/j2pXWjjmUYAxYbim6klZ5QYoHfVHgNcFACNcBGAsYHQ/s450/photo_smartphone_man.png",
];

function left() {
  // console.log(count);
  count--;
  if (count <= 0) {
    count = url.length-1;
  }
  mainElement.setAttribute('src', url[count]);
}
function right() {
  count++;
  if (count >= url.length) {
    count = 0;
  }
  mainElement.setAttribute('src',　url[count]);
}

let timer;
let nowPlaying = false;

function autoPlay() {
  right();
  timer = setTimeout(function() {
    autoPlay();
  }, 200);
}

function play() {
  if (nowPlaying) {
    return;
  }
  nowPlaying = true;
  autoPlay();
}

function stop() {
  clearTimeout(timer);
  nowPlaying = false;
}

function reset() {
  stop();
  mainElement.setAttribute('src', url[0]);
  count = 0;
}
