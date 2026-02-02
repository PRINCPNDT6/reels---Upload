 const btnUpload = document.getElementById('btnUpload')
 const uploadBox = document.querySelector('.uploadBox')
  
  const inputFile = document.getElementById('inputFile')
 const uploadreels = document.getElementById('uploadReels')
 const videoContainer = document.querySelector('.videoBox')
 


 btnUpload.addEventListener('click', (e) =>{
    e.stopPropagation()
    uploadBox.style.display = uploadBox.style.display === "block" ? "none" : "block"
    // deletePage.style.display = "none"

 })

 document.addEventListener('click', () =>{
        uploadBox.style.display = "none"
        // deletePage.style.display = "none"
        
        
      })
      
      uploadBox.addEventListener('click', (e) =>{
         e.stopPropagation()
         
      })
      
    


 
 uploadreels.addEventListener('click', () =>{
   inputFile.click();
 })

/////////////////////


  inputFile.addEventListener('change', () =>{
   const file = inputFile.files[0]

   if(!inputFile) return;
   if(!file.type.startsWith('video/')){
    alert('Please upload only video')
    inputFile.value = '';
    return;
   }


   const videoDiv = document.createElement('div')
   videoDiv.className = "videoDiv"
   videoContainer.appendChild(videoDiv)
   const video = document.createElement("video")
   video.className = "reel"
   video.autoplay = true
   video.loop = true
   videoDiv.appendChild(video)
   
   const reader = new FileReader()
   reader.onload = (e) =>{
     video.src = e.target.result
      
      
   }

   reader.readAsDataURL(file)
    inputFile.value = "";

    
    const profilebar = document.createElement('div')
    profilebar.className = "profilebar"
    videoDiv.appendChild(profilebar)
    
    const img = document.createElement('img')
    img.src = "img/01_myportfolio.jpg"
    profilebar.appendChild(img)
    const profilename = document.createElement('span')
    profilename.innerHTML = "Prishu"
    profilebar.appendChild(profilename)
    
    const sidebar = document.createElement('div')
    sidebar.className = "sideBar"
    videoDiv.appendChild(sidebar)
    
  let isDblClick = false;
    const imgAry =  ["heart.png", "chat.png", "refresh.png","save-instagram.png"]
    imgAry.forEach((url) =>{
      const image = document.createElement('img')
      image.src = `img/${url}`
      sidebar.appendChild(image)

      //////////////////////
      if(url === "heart.png"){

        image.dataset.liked = "false";
        
        image.addEventListener('click', (e) =>{
          e.stopPropagation();
        // url === "heart.png" ? "img/like.png" : "img/heart.png"
        if(image.dataset.liked === "false"){
          image.src = "img/like.png"
          image.dataset.liked = "true"
           } else{
             image.src = "img/heart.png"
             image.dataset.liked  = "false"
            }
            })
          }

             /////////////////////double click like/////////////

const i = document.createElement('i')
 i.className = "ri-heart-3-fill"
 videoDiv.appendChild(i)

 video.addEventListener('dblclick', (e) =>{
   isDblClick = true;
   // if(e.target.tagName)
   if (e.target.tagName !== 'VIDEO' && e.target.tagName !== 'img') return;
   e.preventDefault();
   e.stopPropagation();
   i.style.transform = 'translate(-50%, -50%) scale(1)'
   i.style.opacity = 0.8;
   console.log(isDblClick);
   
   setTimeout(()=>{
     i.style.transform = 'translate(-50%, -50%) scale(0)'
     i.style.opacity = 0;
    },1000)
    if(image.dataset.liked === "false"){
      image.src = "img/like.png"
      image.dataset.liked = "true"
    }
    

   

     
           setTimeout(() =>{
            isDblClick = false;
           },250)

  
  
 })

          if(url === "save-instagram.png"){
            image.dataset.saved = "false"

            image.addEventListener('click', (e) =>{
              e.stopPropagation();
              if(image.dataset.saved === "false"){
                image.src = "img/bookmark.png"
                  image.dataset.saved = "true"
              } else{
                image.src = "img/save-instagram.png"
                image.dataset.saved = "false"
              }


            })
          }
      ////////////////////////// play pause
      
      
    })
        

    const toggle = document.createElement('span')
    toggle.innerHTML = "⋮"
    sidebar.appendChild(toggle)

    const songimage = document.createElement('img')
    songimage.src = "img/song.jpg"
    sidebar.appendChild(songimage)

//      /////////////////////double click like/////////////

// const i = document.createElement('i')
//  i.className = "ri-heart-3-fill"
//  videoDiv.appendChild(i)

//  videoDiv.addEventListener('dblclick', (e) =>{
//   e.preventDefault();
//   e.stopPropagation();
//    i.style.transform = 'translate(-50%, -50%) scale(1)'
//    i.style.opacity = 0.8;
//    console.log('dblclick');
   
//    setTimeout(()=>{
//      i.style.transform = 'translate(-50%, -50%) scale(0)'
//      i.style.opacity = 0;
//   },1000)

  
  
//  })

 ///
    

    const deletePage = document.createElement('div')
    deletePage.className = "deletePage"

    const ul = document.createElement('ul')
    deletePage.appendChild(ul)
    ul.className = "ul"

    const li = ["Report","Delete", "Follow", "Go to post", "Copy link", "About this account"]
    li.forEach((text) =>{
      const li = document.createElement('li')
      li.className = "li"
      li.innerHTML = text
      deletePage.appendChild(li)

      if(text === "Report" ){
        li.id = "report"
      }
      if(text === "Delete" ){
              li.id = "delete"
            
            li.addEventListener('click', () =>{
            videoDiv.remove();
            deletePage.style.display = "none"
            })
          }
      
    })

 

    videoDiv.appendChild(deletePage)

    
///////////////////////////////////////////////////////
//     const delreel = document.getElementById('delete')
//  delreel.addEventListener('click', ()=>{
//    videoDiv.remove();
//    deletePage.style.display = "none"
   
//  })

 //////////////////////////////




    deletePage.addEventListener('click', (e) =>{
   e.stopPropagation();
 })

   toggle.addEventListener('click', (e) =>{
         e.stopPropagation();
         deletePage.style.display =   deletePage.style.display === "none" ? "block" : "none"
         uploadBox.style.display = "none"
      })

 deletePage.addEventListener('click', (e) =>{
   e.stopPropagation();
 })

 document.addEventListener('click', ()=>{
  deletePage.style.display = "none"
})

btnUpload.addEventListener('click', () =>{
   deletePage.style.display = "none"

 })

 ///////////////////////
 const playIconBox = document.createElement('div')
 playIconBox.className = 'playIconBox'

const playIcon = document.createElement('img')
  playIcon.src = "img/play.png"
  playIcon.className = "playIcon"
 

 video.addEventListener('click',() =>{
  if(isDblClick) return;
    // video.paused ? video.play() :video.pause()
    if(video.paused){
      video.play();
      playIconBox.classList.remove('show')

    } else{
      video.pause()
      playIconBox.classList.add('show')
    }

 })

 videoDiv.appendChild(playIconBox)
 playIconBox.appendChild(playIcon)
    

 /////////////muted
let ismuted = true;
video.muted = ismuted;
 const muteBox = document.createElement('div')
 muteBox.className = "muteBox"
 
 const mute = document.createElement('img')
 mute.src = "img/mute.png"
 mute.className = "mute"
 
 const unmute = document.createElement('img')
 unmute.src = "img/unmute.png"
 unmute.className = "unmute"
 
 muteBox.appendChild(mute)
 muteBox.appendChild(unmute)
 videoDiv.appendChild(muteBox)

    mute.style.pointerEvents = ismuted ? 'auto' : 'none';
    unmute.style.pointerEvents = ismuted ? 'none' : 'auto';
    mute.style.display = ismuted ? "block" : "none"
    unmute.style.display = ismuted ? "none" : "block"
    
    muteBox.addEventListener('click', () =>{

      ismuted = !ismuted;

      document.querySelectorAll('video').forEach(v =>
        v.muted = ismuted 
      )
      
      
      document.querySelectorAll('.muteBox').forEach(box => {
        console.log(box);
        const mute = box.querySelector('.mute');
        const unmute = box.querySelector('.unmute');
        

      
        if (mute && unmute) {   
            mute.style.display = ismuted ? 'block' : 'none';
            unmute.style.display = ismuted ? 'none' : 'block';
            mute.style.pointerEvents = ismuted ? 'auto' : 'none';
            unmute.style.pointerEvents = ismuted ? 'none' : 'auto';

        }
      })
      
    })

 
 ////////////////////////
 /////////auto play
//  const observer = new IntersectionObserver((entries) => {
//     entries.forEach(entry => {
//         const video = entry.target
    
//         if (entry.isIntersecting) {
//             document.querySelectorAll('.reel').forEach(v => {
//                 if (v !== video) v.pause()
//               })
//             video.play()
             
//           } else {
//               video.pause()

//             }
//           })
//         }, { threshold: 0.7 })
        
//         observer.observe(video)

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    const video = entry.target;
    const videoDiv = video.parentElement;
    const playIconBox = videoDiv.querySelector('.playIconBox');
    const muteBox = videoDiv.querySelector('.muteBox');

    if (entry.isIntersecting) {
      
      document.querySelectorAll('.reel').forEach(v => {
        if (v !== video) {
          v.pause();

           
          const otherDiv = v.parentElement;
          const otherPlay = otherDiv.querySelector('.playIconBox');
          const otherMute = otherDiv.querySelector('.muteBox');
          if (otherPlay) otherPlay.classList.remove('show');
          if (otherMute) otherMute.style.display = 'none';
        }
      });

      
      video.play();

      
      if (playIconBox) playIconBox.classList.remove('show');
      if (muteBox) muteBox.style.display = 'block'; 

    } else {
      video.pause();

      
      if (playIconBox) playIconBox.classList.add('show');
      if (muteBox) muteBox.style.display = 'none'; 
    }
  });
}, { threshold: 0.7 });
 
document.querySelectorAll('.reel').forEach(video => {
  observer.observe(video);
});

        
        
      })

////////////media visibilty , visibility API 
    document.addEventListener('visibilitychange', () => {
  document.querySelectorAll('video').forEach(video => {
    if (document.hidden) {
      video.pause();
    } else {
      video.play(); // optional
    }
  });
});

     
 
 


 