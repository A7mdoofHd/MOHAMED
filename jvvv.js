setInterval(() => {
  const paragraphsToCheck = document.querySelectorAll('#users div');
  const elementsToAddMoh = [];

  paragraphsToCheck.forEach(paragraph => {
    if (paragraph.textContent.includes('555') && !paragraph.classList.contains('moh')) {
      elementsToAddMoh.push(paragraph);
    } else if (!paragraph.textContent.includes('555') && paragraph.classList.contains('moh')) {
      paragraph.classList.remove('moh');
    }
  });

  elementsToAddMoh.forEach(element => {
    element.classList.add('moh');
  });

  $("#users .uzr.moh span.uhash, #users .active.moh fl.ustat, #users .uzr.moh img.co, #users .uzr.moh .ustat, .fl.mini.u-co").hide();

}, 9000);


const styleElement = document.createElement('style');
styleElement.textContent = `


#users .uzr.hm {
     background-image: url('https://www.babup.com/do.php?img=127625');
     box-shadow: 2px 2px 4px rgba(188,188,188,0.2),
              -2px -2px 4px rgba(255,255,255,0.3)!important;
     border-bottom:2px solid;
     margin-bottom:2px;
     border-top:2px solid;
     margin-top:2px;
     border-color:#D6D6D6;
     background-repeat: no-repeat;
     background-size: cover;
     background-position: center;
     height: 73px!important;
     border-radius: 5px!important;
}
 #users .uzr.hm .fitimg.u-pic {
  border-radius: 20px 20px 20px 20px!important;
   margin-left: 8px!important;
  margin-top: 6px!important;
  height: 57px!important;
   perspective: 500px!important;
     ransform-style: preserve-3d!important;
  box-shadow: 2px 2px 4px rgba(0,0,0,0.2),
              -2px -2px 4px rgba(255,255,255,0.4)!important;
   margin: 0 auto;
border-bottom:2px solid;
     margin-bottom:2px;
     border-top:2px solid;
     margin-top:2px;
     border-color:#bababa;
}
#users .uzr.hm .u-topic {
  margin-left: 5px;
}
`;
document.head.appendChild(styleElement);
