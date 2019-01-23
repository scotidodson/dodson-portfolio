document.addEventListener('DOMContentLoaded', () => {
  const navigation = document.querySelector('.navigation')
  const logo = document.querySelector('.sd-logo')

  // ------------------------- LISTENERS ------------------------------------

    navigation.addEventListener('click', (event) => {
      // check for value & change page accordingly
      console.log('clicked nav');
    })

    logo.addEventListener('mouseover', (event) => {
      console.log('over logo');
      const altLogo = Math.floor(Math.random() * 7)
      logo.src=`./images/sd${altLogo}.png`
    })


}); // end of DOMContentLoaded
