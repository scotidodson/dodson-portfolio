document.addEventListener('DOMContentLoaded', () => {
  const about = document.querySelector('.about')
  const blog = document.querySelector('.blog')
  const email = document.querySelector('.email')
  const github = document.querySelector('.github')
  const home = document.querySelector('.home')
  const linkedin = document.querySelector('.linkedin')
  const logo = document.querySelector('.sd-logo')
  const medium = document.querySelector('.medium')
  const navigation = document.querySelector('.navigation')
  const projects = document.querySelector('.projects')
  const ruby = document.querySelector('.ruby')
  const scoti = document.querySelector('.sd-photo')
  const sheetLink = document.querySelector('#stylesheet')
  const social = document.querySelector('.social-icons')
  const themeToggle = document.querySelector('.theme-toggle')
  const toggle = document.querySelector('.toggle')
  const twitter = document.querySelector('.twitter')
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
          window.open('https://drive.google.com/file/d/1Tm4DTI_M8JdYUoufDwubisBKz6ph4fNk/view?usp=sharing');
          break;
        default:

      }
    })

    social.addEventListener('mouseover', (event) => {
      switch (event.target.alt) {
        case 'github':
          github.src="./images/icons/github_gold.png"
          break;
        case 'linkedin':
          linkedin.src="./images/icons/linkedin_gold.png"
          break;
        case 'twitter':
          twitter.src="./images/icons/twitter_gold.png"
          break;
        case 'medium':
          medium.src="./images/icons/medium_gold.png"
          break;
        case 'email':
          email.src="./images/icons/email_gold.png"
          break;
        default:
          break;
      }
    })

    social.addEventListener('mouseout', (event) => {
      if (document.querySelector('#stylesheet').href.includes('dark.css')) {
        switch (event.target.alt) {
          case 'github':
            github.src="./images/icons/github_gray.png"
            break;
          case 'linkedin':
            linkedin.src="./images/icons/linkedin_gray.png"
            break;
          case 'twitter':
            twitter.src="./images/icons/twitter_gray.png"
            break;
          case 'medium':
            medium.src="./images/icons/medium_gray.png"
            break;
          case 'email':
            email.src="./images/icons/email_gray.png"
            break;
          default:
            break;
        }
      } else {
        switch (event.target.alt) {
          case 'github':
            github.src="./images/icons/github_red.png"
            break;
          case 'linkedin':
            linkedin.src="./images/icons/linkedin_red.png"
            break;
          case 'twitter':
            twitter.src="./images/icons/twitter_red.png"
            break;
          case 'medium':
            medium.src="./images/icons/medium_red.png"
            break;
          case 'email':
            email.src="./images/icons/email_red.png"
            break;
          default:
            break;
        }
      }
    })

    logo.addEventListener('mouseover', (event) => {
      let onDark = document.querySelector('#stylesheet').href.includes('dark.css')
      let altLogo
      if (onDark) {
        altLogo = Math.floor(Math.random() * 6) + 1
      } else {
        altLogo = Math.floor(Math.random() * 4)
      }
      logo.src=`./images/sd${altLogo}.png`
    })

    logo.addEventListener('mouseout', (event) => {
      logo.src=`./images/sd1.png`
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

}); // end of DOMContentLoaded
