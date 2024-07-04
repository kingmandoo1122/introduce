window.onload=function(){


    let article = document.querySelectorAll("section")
    let introduce = document.querySelector(".introduce")
    let bg_gradient = document.querySelector(".bg_gradient")
    let about= document.querySelector(".about")
    let cloud = document.querySelectorAll(".cloud_frame")
    let about_imgframe = document.querySelector(".about .imgframe")
    let about_txtframe = document.querySelector(".about .txtframe")
    let redesign_imgframe = document.querySelectorAll(".redesign_1 .imgframe")
    let redesign_txtframe = document.querySelectorAll(".redesign_1 .txtframe")

    function wheelDown(article, baseElementTop, clientHeight) {
        for (let i = 1; i < article.length; i++) {
            
            if(baseElementTop === clientHeight*5){
                console.log("ddd")
                cloud[0].style.transform = `translateX(-100%)`
                cloud[1].style.transform = `translateX(100%)`
                introduce.classList.add("open")
                setTimeout(function(){
                    scrollTo({
                        top: clientHeight * 1,
                        behavior : "instant"
                    })
                    about.classList.add("close")
                    about_imgframe.classList.add("downtoup")
                    about_txtframe.classList.add("downtoup")
                },1700)
            }

            if(baseElementTop === clientHeight*4){
                        scrollTo({
                            top: clientHeight * 2,
                            behavior : "smooth"
                        })
                        redesign_imgframe[0].classList.add("downtoup")
                        redesign_txtframe[0].classList.add("downtoup")
                    }

            if(baseElementTop === clientHeight*3){
                scrollTo({
                    top: clientHeight * 3,
                    behavior : "smooth"
                })
                redesign_imgframe[1].classList.add("downtoup")
                redesign_txtframe[1].classList.add("downtoup")
            }

            if(baseElementTop === clientHeight*2){
                scrollTo({
                    top: clientHeight * 4,
                    behavior : "smooth"
                })
            }

            if(baseElementTop === clientHeight*1){
                scrollTo({
                    top: clientHeight *5,
                    behavior : "smooth"
                })
            }
            
              }
            }
            
        //   if (baseElementTop === clientHeight * (article.length - i)) {
        //         scrollTo({
        //             top: clientHeight * i,
        //             behavior: "",
        //           });
        //     }
            
        //   }




      function wheelUp(article, baseElementTop, clientHeight) {
        for (let i = 0; i < article.length - 1; i++) {
          if (baseElementTop === clientHeight * i) {
            scrollTo({
              top: clientHeight * (article.length - 2 - i),
              behavior: "smooth",
            });
          }
          if(baseElementTop === clientHeight*4){
            introduce.style.opacity = `1`
            bg_gradient.style.opacity = `0`
            cloud[0].style.transform = `translateX(0)`
            cloud[1].style.transform = `translateX(0)`
            introduce.classList.remove("open")
            about.classList.remove("close")
            setTimeout(function(){
                about_imgframe.classList.remove("downtoup")
                about_txtframe.classList.remove("downtoup")
            },1000
        )
            


          }
        }
      }


    
      document.addEventListener("wheel", (event) => {
        let clientHeight = window.innerHeight;
        let baseElementTop =
          article[article.length - 1].getBoundingClientRect().top;
      
        if (event.deltaY > 0) {
          wheelDown(article, baseElementTop, clientHeight);
        }
        if (event.deltaY < 0) {
          wheelUp(article, baseElementTop, clientHeight);
        }
      });







}


