(function () {
  function getCurrentSeason() {
    var now = new Date();
    var currentYear = now.getFullYear();

    if (now == new Date(currentYear, 9, 31)) {
      
      return 'halloween';
    }

    if (now < new Date(currentYear, 2, 20)) {
      // [Jan 1 ~ Mar 1)
      return 'winter';
    }
    if (now < new Date(currentYear, 5, 15)) {
      // [Mar 1 ~ Jun 1)
      return 'spring';
    }
    if (now < new Date(currentYear, 8, 15)) {
      // [Jun 1 ~ Sep 1)
      return 'summer';
    }
    if (now < new Date(currentYear, 11, 18)) {
      // [Sep 1 ~ Dec 1)
      return 'autumn';
    }
    // [Dec 1 ~ Dec 31]
    return 'christmas';
  }



  let header = document.getElementById('header');
  let a = document.getElementsByTagName("a");
  let nav = document.getElementById('main_nav');



  switch (getCurrentSeason()) {
    case 'winter':
      if (header) {
        header.style.backgroundImage = "linear-gradient( rgba(86, 156, 230, 0.9), rgba(192, 63, 234, 0.9) ), url('/images/bgs/winter.gif')";
      }
      if (nav) {
        nav.style.backgroundImage = "linear-gradient(to right, rgba(86, 156, 230, 1), rgba(192, 63, 234, 1) ), url('/images/bgs/winter.gif')";
      }
      for (let i = 0; i < a.length; i++) {
        a[i].style.color = "rgb(6, 156, 230)";
      }
      break;
    case 'spring':
      if (header) {
        header.style.backgroundImage = "linear-gradient( rgba(67, 160, 145, 0.7), rgba(138, 142, 42, 0.9) ), url('/images/bgs/spring.gif')";
      }
      if (nav) {
        nav.style.backgroundImage = "linear-gradient( to right, rgba(67, 160, 145, 1), rgba(138, 142, 22, 1) ), url('/images/bgs/spring.gif')";
      }
      for (let i = 0; i < a.length; i++) {
        a[i].style.color = "rgb(19, 153, 86)";
      }
      break;
    case 'summer':
      if (header) {
        header.style.backgroundImage = "linear-gradient( rgba(229, 209, 119, 0.7), rgba(142, 42, 79, 0.9) ), url('/images/bgs/summer.gif')";
      }
      if (nav) {
        nav.style.backgroundImage = "linear-gradient( to right, rgb(188, 150, 0), rgba(142, 42, 79, 1) ), url('/images/bgs/summer.gif')";
      }
      for (let i = 0; i < a.length; i++) {
        a[i].style.color = "rgb(142, 42, 79)";
      }
      break;
    case 'autumn':
      if (header) {
        header.style.backgroundImage = "linear-gradient( rgba(150, 103, 87, 0.7), rgba(132, 45, 126, 0.9) ), url('/images/bgs/autumm.gif')";
      }
      if (nav) {
        nav.style.backgroundImage = "linear-gradient( to right, rgba(150, 103, 87, 1), rgba(132, 45, 126, 1) ), url('/images/bgs/autumm.gif')";
      }
      for (let i = 0; i < a.length; i++) {
        a[i].style.color = "rgb(132, 45, 126)";
      }
      break;
    case 'christmas':
    if (header) {
      header.style.backgroundImage = "linear-gradient( rgba(38, 81, 46, 0.65), rgba(122, 18, 46, 0.65) ), url('/images/bgs/christmas.gif')";
    }

    if (nav) {
      nav.style.backgroundImage = "linear-gradient( to right, rgba(30, 110, 10, 1), rgba(160, 12, 73, 1) ), url('/images/bgs/christmas.gif')";
    }

    for (let i = 0; i < a.length; i++) {
      a[i].style.color = "rgb(122, 18, 46)";
    }
    break;

    case 'halloween':
    if (header) {
      header.style.backgroundImage = "linear-gradient( rgba(46, 30, 68, 0.65), rgba(130, 86, 26, 0.65) ), url('/images/bgs/halloween.gif')";
    }

    if (nav) {
      nav.style.backgroundImage = "linear-gradient( to right, rgba(46, 30, 68, 1), rgba(130, 86, 26, 1) ), url('/images/bgs/halloween.gif')";
    }

    for (let i = 0; i < a.length; i++) {
      a[i].style.color = "rgb(122, 18, 46)";
    }
    break;

  }

})();





function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}