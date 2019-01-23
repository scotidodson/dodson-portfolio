document.addEventListener('DOMContentLoaded', () => {
  const navigation = document.querySelector('.navigation')
  const logo = document.querySelector('.sd-logo')
  const home = document.querySelector('.home')
  const about = document.querySelector('.about')
  const projects = document.querySelector('.projects')
  const blog = document.querySelector('.blog')

  // ------------------------- LISTENERS ------------------------------------

    navigation.addEventListener('click', (event) => {
      // check for value & change page accordingly
      console.log('clicked nav');
      switch (event.target.dataset.id) {
        case 'home':
          document.querySelector('.navigation').style.marginTop="20%"
          home.hidden = false
          about.hidden = true
          projects.hidden = true
          blog.hidden = true
          break;
        case 'about':
          document.querySelector('.navigation').style.marginTop="5%"
          home.hidden = true
          about.hidden = false
          projects.hidden = true
          blog.hidden = true
          break;
        case 'projects':
          document.querySelector('.navigation').style.marginTop="5%"
          home.hidden = true
          about.hidden = true
          projects.hidden = false
          blog.hidden = true
          break;
        case 'blog':
          document.querySelector('.navigation').style.marginTop="5%"
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

    
}); // end of DOMContentLoaded
