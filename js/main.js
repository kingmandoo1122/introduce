window.onload=function(){


    let article = document.querySelectorAll("main>*")
    let introduce = document.querySelector(".introduce")
    let bg_gradient = document.querySelector(".bg_gradient")
    let about= document.querySelector(".about")
    let cloud = document.querySelectorAll(".cloud_frame")
    let about_imgframe = document.querySelector(".about .imgframe")
    let about_txtframe = document.querySelector(".about .txtframe")
    let redesign_imgframe = document.querySelectorAll(".redesign_1 .imgframe")
    let redesign_txtframe = document.querySelectorAll(".redesign_1 .txtframe")
    let paths = document.querySelectorAll("path.naming")
    let redesign_1 = document.querySelector(".redesign_1")
    let redesign_2 = document.querySelector(".redesign_2")
    let end = document.querySelector(".end")
    let contact = document.querySelector(".contact")
    let geturl_tous = document.querySelector(".redesign_1 .geturl a")
    let geturl_thecaffe = document.querySelector(".redesign_2 .geturl a")
    let viewtypes = document.querySelectorAll(".viewtype>ul>li>a")

  let imgs = document.querySelectorAll(".redesign_1 .frame .imgframe>h1>img")

console.log(viewtypes)
// for(let i=0; i<viewtypes.length;i++){
//   viewtypes[i].addEventListener("click",function(){

//     let viewportwidth = window.innerWidth
//     window.open(this.href, `_blank`, `width=1920`)

//   })
// }
geturl_tous.addEventListener("click",function(e){
  e.preventDefault()
  window.navigator.clipboard.writeText("https://kingmandoo1122.github.io/touslesjours/")
  alert("클립보드에 복사되었습니다.")
})

geturl_thecaffe.addEventListener("click",function(e){
  e.preventDefault()
  window.navigator.clipboard.writeText("https://kingmandoo1122.github.io/thecaffe/")
  alert("클립보드에 복사되었습니다.")
})






viewtypes[0].addEventListener("click",function(e){
  e.preventDefault()

  window.open(this.href, `_blank`, `width=1920, height=1000`)

})


viewtypes[1].addEventListener("click",function(e){
  e.preventDefault()
  window.open(this.href, `_blank`, `width=1023, height=1000`)

})

viewtypes[2].addEventListener("click",function(e){
e.preventDefault()
  window.open(this.href, `_blank`, `width=450, height=1000`)
})
viewtypes[3].addEventListener("click",function(e){
  e.preventDefault()

  window.open(this.href, `_blank`, `width=1920, height=1000`)

})


viewtypes[4].addEventListener("click",function(e){
  e.preventDefault()
  window.open(this.href, `_blank`, `width=1023, height=1000`)

})

viewtypes[5].addEventListener("click",function(e){
e.preventDefault()
  window.open(this.href, `_blank`, `width=450, height=1000`)
})







//   open_submit_franchise.addEventListener("click",function(e){
    
//     e.preventDefault()

//     if (matchMedia("screen and (max-width: 768px)").matches) {
//         window.open(this.href, `_blank`, `width=${viewportwidth}, height=1000`);
//     return false;
//     }
//     else{
//         window.open(this.href, `_blank`, `width=1200, height=1000`);
//     return false;
//     }
    

// })













// Playwrite AU NSW


    for(let i=0;i<paths.length;i++){
      paths[i].style.strokeDashoffset = paths[i].getTotalLength()
      paths[i].style.strokeDasharray = paths[i].getTotalLength()
      paths[i].style.animation = `naming_ani ${1 + i*0.1}s linear 2s forwards`
    }

    function wheelDown(article, baseElementTop, clientHeight) {
      console.log(baseElementTop,clientHeight)
        for (let i = 1; i < article.length; i++) {
            
            if(baseElementTop === clientHeight*5){
                cloud[0].style.transform = `translateX(-100%)`
                cloud[1].style.transform = `translateX(100%)`
                setTimeout(function(){
                  introduce.classList.add("open")
                  about_imgframe.classList.remove("downtoup")
                  about_txtframe.classList.remove("downtoup")
                },700)
                
                setTimeout(function(){
                    scrollTo({
                        top: clientHeight * 1,
                        behavior : "instant"
                    })
                    about.classList.add("close")
                  
                },1600)
                setTimeout(function(){
                  about_imgframe.classList.add("downtoup")
                  about_txtframe.classList.add("downtoup")
                },2100)
            }

            if(baseElementTop === clientHeight*4){
              // about.classList.remove("close")
              setTimeout(function(){
                // about.classList.add("open")
              },10)
                    
              scrollTo({
                top: clientHeight * 2,
                behavior : "smooth"
            })
                        setTimeout(function(){
                          
                        redesign_imgframe[0].classList.add("downtoup")
                        redesign_txtframe[0].classList.add("downtoup")
                        // about.classList.remove("open")
                        // redesign_1.classList.add("close")
                        },500)
                        
                    }

            if(baseElementTop === clientHeight*3){
                scrollTo({
                    top: clientHeight * 3,
                    behavior : "smooth"
                })
                // setTimeout(function(){
                //   redesign_imgframe[0].classList.remove("downtoup")
                //   redesign_txtframe[0].classList.remove("downtoup")
                // },1000)
                setTimeout(function(){

                  redesign_imgframe[1].classList.add("downtoup")
                redesign_txtframe[1].classList.add("downtoup")
                },500)
                

            }

            if(baseElementTop === clientHeight*2){
              // redesign_2.classList.remove("close")

              scrollTo({
                top: clientHeight * 4,
                behavior : "smooth"
            })
              setTimeout(function(){
                
                // redesign_2.classList.add("open")
              },100)
              
              setTimeout(function(){
                // redesign_2.classList.remove("open")
                // contact.classList.add("close")
              
              },900)
                
            }

            if(baseElementTop === clientHeight*1){
                scrollTo({
                  top: clientHeight *5,
                  behavior : "smooth"
              })
                
            }
            
              }
            }



      function wheelUp(article, baseElementTop, clientHeight) {
        console.log(baseElementTop,clientHeight)
        for (let i = 0; i < article.length - 1; i++) {
          
          if(baseElementTop === clientHeight*4){
            introduce.style.opacity = `1`
            bg_gradient.style.opacity = `0`
            cloud[0].style.transform = `translateX(0)`
            cloud[1].style.transform = `translateX(0)`
            introduce.classList.remove("open")
            about.classList.remove("close")
            scrollTo({
              top: clientHeight *0,
              behavior : "smooth"
          })
           
        
          }

          if(baseElementTop === clientHeight*3){
            console.log("하하하하")
            // redesign_1.classList.remove("close")
            // about.classList.remove("open")
            scrollTo({
              top: clientHeight *1,
              behavior : "smooth"
          })
              
                        setTimeout(function(){
                          about_imgframe.classList.add("downtoup")
                          about_txtframe.classList.add("downtoup")
                        
                        // redesign_1.classList.remove("open")
                        // about.classList.add("close")
                        // redesign_imgframe[0].classList.remove("downtoup")
                        // redesign_txtframe[0].classList.remove("downtoup")
                        },500)
                        
        }
        

        if(baseElementTop === clientHeight*2){
          scrollTo({
              top: clientHeight * 2,
              behavior : "smooth"
          })

          // setTimeout(function(){
          //   redesign_imgframe[0].classList.add("downtoup")
          //   redesign_txtframe[0].classList.add("downtoup")
          // },600)
          // setTimeout(function(){
          //   redesign_imgframe[1].classList.remove("downtoup")
          //   redesign_txtframe[1].classList.remove("downtoup")
          // },900)
          
      }




      if(baseElementTop === clientHeight*1){
          // contact.classList.remove("close")
        // setTimeout(function(){
        //   contact.classList.add("open")
        // },10)

        scrollTo({
          top: clientHeight *3,
          behavior : "smooth"
      })
        // setTimeout(function(){
        // contact.classList.remove("open")
        // redesign_2.classList.add("close")
        // },900)
         
        // setTimeout(function(){
        //   redesign_imgframe[1].classList.add("downtoup")
        //   redesign_txtframe[1].classList.add("downtoup")
        // },1000)
      }
      if(baseElementTop === Math.floor(clientHeight*0.75)){
        // contact.classList.remove("close")
      // setTimeout(function(){
      //   contact.classList.add("open")
      // },10)

      scrollTo({
        top: clientHeight *4,
        behavior : "smooth"
    })
      // setTimeout(function(){
      // contact.classList.remove("open")
      // redesign_2.classList.add("close")
      // },900)
       
      // setTimeout(function(){
      //   redesign_imgframe[1].classList.add("downtoup")
      //   redesign_txtframe[1].classList.add("downtoup")
      // },1000)
    }
      // setTimeout(function(){
      // contact.classList.remove("open")
      // redesign_2.classList.add("close")
      // },900)
       
      // setTimeout(function(){
      //   redesign_imgframe[1].classList.add("downtoup")
      //   redesign_txtframe[1].classList.add("downtoup")
      // },1000)
    }








        
      }



      // function wheelUp(article, baseElementTop, clientHeight) {
      //   for (let i = 0; i < article.length - 1; i++) {
      //     if (baseElementTop === clientHeight * i) {
      //       scrollTo({
      //         top: clientHeight * (4 - i),
      //         behavior: "smooth",
      //       });
      //     }
      //   }

    
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


