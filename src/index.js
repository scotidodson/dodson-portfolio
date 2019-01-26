document.addEventListener('DOMContentLoaded', () => {
  const navigation = document.querySelector('.navigation')
  const sheetLink = document.querySelector('#stylesheet')
  const themeToggle = document.querySelector('.theme-toggle')
  const github = document.querySelector('.github')
  const linkedin = document.querySelector('.linkedin')
  const twitter = document.querySelector('.twitter')
  const medium = document.querySelector('.medium')
  const email = document.querySelector('.email')
  const toggle = document.querySelector('.toggle')
  const logo = document.querySelector('.sd-logo')
  const home = document.querySelector('.home')
  const about = document.querySelector('.about')
  const projects = document.querySelector('.projects')
  const blog = document.querySelector('.blog')
  const scoti = document.querySelector('.sd-photo')
  const ruby = document.querySelector('.ruby')
  const zelda = document.querySelector('.zelda')

  // ------------------------- LISTENERS ------------------------------------

    navigation.addEventListener('click', (event) => {
      switch (event.target.dataset.id) {
        case 'home':
          // navigation.style.marginTop="12%"
          home.hidden = false
          about.hidden = true
          projects.hidden = true
          blog.hidden = true
          break;
        case 'about':
          // navigation.style.marginTop="0%"
          home.hidden = true
          about.hidden = false
          projects.hidden = true
          blog.hidden = true
          break;
        case 'projects':
          // navigation.style.marginTop="0%"
          home.hidden = true
          about.hidden = true
          projects.hidden = false
          blog.hidden = true
          break;
        case 'blog':
          // navigation.style.marginTop="0%"
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
      let onDark = document.querySelector('#stylesheet').href.includes('dark.css')
      let altLogo
      if (onDark) {
        altLogo = Math.floor(Math.random() * 6) + 1
      } else {
        altLogo = Math.floor(Math.random() * 4)
      }
      logo.src=`./images/sd${altLogo}.png`
    })

    themeToggle.addEventListener('click', (event) => {
      let onDark = document.querySelector('#stylesheet').href.includes('dark.css')
      if (onDark) {
        toggle.innerText = "DARK THEME"
        github.src="./images/icons/github_red.png"
        linkedin.src="./images/icons/linkedin_red.png"
        twitter.src="./images/icons/twitter_red.png"
        medium.src="./images/icons/medium_red.png"
        email.src="./images/icons/email_red.png"
        sheetLink.href='light.css'
        logo.src=`./images/sd1.png`
      } else {
        toggle.innerText = "LIGHT THEME"
        github.src="./images/icons/github_gray.png"
        linkedin.src="./images/icons/linkedin_gray.png"
        twitter.src="./images/icons/twitter_gray.png"
        medium.src="./images/icons/medium_gray.png"
        email.src="./images/icons/email_gray.png"
        sheetLink.href='dark.css'
        logo.src=`./images/sd1.png`
      }
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
          if(parseInt(current) === 0){
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
