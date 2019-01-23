document.addEventListener('DOMContentLoaded', () => {
  const navigation = document.querySelector('.navigation')
  const logo = document.querySelector('.sd-logo')
  const home = document.querySelector('.home')
  const about = document.querySelector('.about')
  const projects = document.querySelector('.projects')
  const blog = document.querySelector('.blog')
  navigation.style.marginTop="16%"

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
          if(parseInt(current) === 16){
            clearInterval(changer)
          } else {
            current+= .05
            navigation.style.marginTop = `${current}%`
          }
      }, 3)
    }

}); // end of DOMContentLoaded
