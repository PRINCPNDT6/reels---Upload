 const btnUpload = document.getElementById('btnUpload')
 const uploadBox = document.querySelector('.uploadBox')
//  const deletePage = document.querySelector('.deletePage')
//  const toggleDel = document.getElementById('toggleDel')
//  const delreel = document.getElementById('delreel')
 const inputFile = document.getElementById('inputFile')
 const uploadreels = document.getElementById('uploadReels')
 const videoContainer = document.querySelector('.videoBox')
 


 btnUpload.addEventListener('click', (e) =>{
    e.stopPropagation()
    uploadBox.style.display = uploadBox.style.display === "block" ? "none" : "block"
   //  deletePage.style.display = "none"

 })

 document.addEventListener('click', () =>{
        uploadBox.style.display = "none"
      //   deletePage.style.display = "none"
        
        
      })
      
      uploadBox.addEventListener('click', (e) =>{
         e.stopPropagation()
         
      })
      
      // toggleDel.addEventListener('click', (e) =>{
      //    e.stopPropagation();
      //    deletePage.style.display =   deletePage.style.display === "none" ? "block" : "none"
      //    uploadBox.style.display = "none"
      // })

//  deletePage.addEventListener('click', (e) =>{
//    e.stopPropagation();
//  })

//  delreel.addEventListener('click', ()=>{
//    inputFile.remove();
//    deletePage.style.display = "none"
   
//  })

 
 uploadreels.addEventListener('click', () =>{
   inputFile.click();
 })

/////////////////////


  inputFile.addEventListener('change', () =>{
   const file = inputFile.files[0]

   if(!inputFile) return;


   const videoDiv = document.createElement('div')
   videoDiv.className = "videoDiv"
   videoContainer.appendChild(videoDiv)
   const video = document.createElement("video")
   video.className = "reel"
   videoDiv.appendChild(video)
   
   const reader = new FileReader()
   reader.onload = (e) =>{
      video.src = e.target.result
      video.autoplay = true
      video.muted = true
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

    const imgAry = ["heart.png","chat.png", "refresh.png","save-instagram.png"]
    imgAry.forEach((url) =>{
      const image = document.createElement('img')
      image.src = `img/${url}`
      sidebar.appendChild(image)

    })
    const toggle = document.createElement('span')
    toggle.innerHTML = "⋮"
    sidebar.appendChild(toggle)

    const songimage = document.createElement('img')
    songimage.src = "img/song.jpg"
    sidebar.appendChild(songimage)
    
   })

   


  

    
     
 
 


 