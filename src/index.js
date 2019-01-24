document.addEventListener('DOMContentLoaded', () => {
  const navigation = document.querySelector('.navigation')
  const logo = document.querySelector('.sd-logo')
  const home = document.querySelector('.home')
  const about = document.querySelector('.about')
  const projects = document.querySelector('.projects')
  const blog = document.querySelector('.blog')
  const scoti = document.querySelector('.sd-photo')
  const ruby = document.querySelector('.ruby')
  const zelda = document.querySelector('.zelda')
  navigation.style.marginTop="12%"

  // ------------------------- LISTENERS ------------------------------------

    navigation.addEventListener('click', (event) => {
      switch (event.target.dataset.id) {
        case 'home':
          navDown()
          home.hidden = false
          about.hidden = true
          projects.hidden = true
          blog.hidden = true
          break;
        case 'about':
          navUp()
          home.hidden = true
          about.hidden = false
          projects.hidden = true
          blog.hidden = true
          break;
        case 'projects':
          navUp()
          home.hidden = true
          about.hidden = true
          projects.hidden = false
          blog.hidden = true
          break;
        case 'blog':
          navUp()
          home.hidden = true
          about.hidden = true
          projects.hidden = true
          blog.hidden = false
          break;
        case 'resume':
          window.open('https://drive.google.com/file/d/1OLpYbvGF9rcMHzVW8KRfVxD0SWmE_Kfb/view?usp=sharing');
          break;
        default:

      }
    })

    logo.addEventListener('mouseover', (event) => {
      console.log('over logo');
      const altLogo = Math.floor(Math.random() * 7)
      logo.src=`./images/sd${altLogo}.png`
    })

    // ruby.addEventListener('mouseover', (event) => {
    //   console.log('over scoti');
    //   showImage(`./images/ruby.JPG`)
    // })
    //
    // zelda.addEventListener('mouseover', (event) => {
    //   console.log('over scoti');
    //   showImage(`./images/zelda.JPG`)
    // })
    //
    // ruby.addEventListener('mouseout', (event) => {
    //   hideImage()
    // })
    //
    // zelda.addEventListener('mouseout', (event) => {
    //   hideImage()
    // })

  // ------------------------- FUNCTIONS ------------------------------------

    function navUp() {
      let current = parseInt(navigation.style.marginTop)
      let changer = setInterval(()=>{
          if(parseInt(current) === 5){
            clearInterval(changer)
          } else {
            current-= .05
            navigation.style.marginTop = `${current}%`
          }
      }, 3)
    }

    function navDown() {
      let current = parseInt(navigation.style.marginTop)
      let changer = setInterval(()=>{
          if(parseInt(current) === 12){
            clearInterval(changer)
          } else {
            current+= .05
            navigation.style.marginTop = `${current}%`
          }
      }, 3)
    }

    // function showImage(src) {
    //     const img = document.getElementById('.pop-up-img');
    //     const div = document.getElementById('.pop-up');
    //     img.src = src;
    //     div.style.display = "block";
    // }
    //
    // function hideImage() {
    //     document.getElementById('popup').style.display = "none";
    // }

}); // end of DOMContentLoaded
