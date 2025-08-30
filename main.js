  document.getElementById("background").playbackRate = 0.35;
  if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }

    function goLeft() {
      // Cover all engines
      document.documentElement.scrollLeft = 0;
      document.body.scrollLeft = 0;
      window.scrollTo({ left: 0, top: 0 });
    }

    // Normal loads
    window.addEventListener('load', () => {
      // wait a tick in case layout shifts (e.g., video metadata)
      requestAnimationFrame(() => requestAnimationFrame(goLeft));
    });

    // Back/forward cache restores
    window.addEventListener('pageshow', goLeft);
    document.getElementById("element1").style = "color: gray;"
    count = 0;
    function next(x)
    {
        count = x
         document.getElementById("element1").style = "color: white;"
          document.getElementById("element2").style = "color: white;"
           document.getElementById("element3").style = "color: white;"
            document.getElementById("element4").style = "color: white;"
        document.getElementById("element"+x).style = "color: gray;"
        if(count == 1)
        {
            document.querySelector("main").children[1].innerHTML = "Smarter Intelligence For Real Progress"
            document.querySelector("main").children[2].innerHTML = "Where advanced technology meets human creativity."
            document.getElementById("one").innerHTML = "🔺"
            document.getElementById("two").innerHTML = "🔺"
            document.getElementById("one").style = "font-size: 5vw;left:0vw;top:0vw;"
            document.getElementById("two").style = "left:0.2vw"
            document.getElementById("three").innerHTML = "🔺"
            document.getElementById("emojis").style = "left:24vw;"
        }
        if(count == 2)
        {
            document.querySelector("main").children[1].innerHTML = "Seamless Connectivity For A Faster World"
              document.querySelector("main").children[2].innerHTML = "Where powerful networks meet everyday possibilities."
            document.getElementById("one").innerHTML = "🌐"
            document.getElementById("two").innerHTML = "🌐"
            document.getElementById("one").style = "font-size: 2vw;left:2.3vw;top:3vw;"
               document.getElementById("two").style = "left:-0.2vw"
            document.getElementById("three").innerHTML = "🌐"
            document.getElementById("emojis").style = "left:27vw;"
           
        }
        if(count == 3)
        {
            
            document.querySelector("main").children[1].innerHTML = "Stronger Security For Safer Futures"
            document.querySelector("main").children[2].innerHTML = "Where advanced protection meets peace of mind."
            document.getElementById("one").innerHTML = "💪"
            document.getElementById("two").innerHTML = "💪"
            document.getElementById("one").style = "font-size: 2vw;left:2.3vw;top:3vw;"
            document.getElementById("two").style = "left:-0.2vw"

            document.getElementById("three").innerHTML = "💪"
            document.getElementById("emojis").style = "left:28vw;"
        }
        if(count == 4)
        {
                document.querySelector("main").children[1].innerHTML = "Bold Innovation For Lasting Impact"
            document.querySelector("main").children[2].innerHTML = "Where visionary ideas meet real-world change."
            document.getElementById("one").innerHTML = "⭐"
            document.getElementById("two").innerHTML = "⭐"
            document.getElementById("one").style = "font-size: 2vw;left:2.3vw;top:3vw;"
            document.getElementById("two").style = "left:-0.2vw"

            document.getElementById("three").innerHTML = "⭐"
            document.getElementById("emojis").style = "left:47vw;"
        }
    }

    setInterval(() => {
        next(count+1)
    }, 20000);