'use strict';
/*
  Each element in the array is the data for
  a page of the onboarding screen.
  Each page displays:
    An image at the top
    A section of larger title text below the image
    A section of smaller paragraph text below the title
    A button to go to the next page which requires :
      A CrushButton style preset
      A title to display on the button
*/
export default [
  {
    image : require('App/Assets/Images/Onboarding1.png'),
    messages : {
      header : "Accomplish Your Goals",
      body : "Creating new habits doesn’t have to be a drag. " +
        "Crush 5 makes it easy to flow between different habits " +
        "each day It’s an easy way to take small steps towards big progress!",
    },
    button : {
      type : 'minimalButton',
      title : "Next",
    },
  },
  {
    image : require('App/Assets/Images/Onboarding2.png'),
    messages : {
      header : "Keep Your Focus",
      body : "Tap on the example habits to edit or remove them." +
        "You can have as many habits as you want, but we recommend" +
        "between 7 and 10 to keep focus on the habits which are most important to you!",
    },
    button : {
      type : 'pinkButton',
      title : " Let’s Crush It!",
    },
  }
];
