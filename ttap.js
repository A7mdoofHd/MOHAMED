setInterval(() => {
  const paragraphsToCheck = document.querySelectorAll('#users div');
  const elementsToAddMoh = [];

  paragraphsToCheck.forEach(paragraph => {
    if (paragraph.textContent.includes('css') && !paragraph.classList.contains('ahmed')) {
      elementsToAddMoh.push(paragraph);
    } else if (!paragraph.textContent.includes('css') && paragraph.classList.contains('ahmed')) {
      paragraph.classList.remove('ahmed');
    }
  });

  elementsToAddMoh.forEach(element => {
    element.classList.add('ahmed');
  });

  $("#users .uzr.ahmed span.uhash, #users .active.ahmed fl.ustat, #users .uzr.ahmed img.co, #users .uzr.ahmed .ustat, .fl.mini.u-co").hide();

}, 9000);

const styleElement = document.createElement('style');
styleElement.textContent = `
#users .uzr.ahmed {
     background-image: url('https://www.babup.com/do.php?img=127625');
     background-size: 100% auto;
     box-shadow: 2px 2px 4px rgba(188,188,188,0.2),
              -2px -2px 4px rgba(255,255,255,0.3)!important;
     border-bottom:2px solid;
     margin-bottom:2px;
     border-top:2px solid;
     margin-top:2px;
     border-color:#D6D6D6;
     background-repeat: no-repeat;
     background-position: center;
     border-radius: 5px!important;
}
 #users .uzr.ahmed .fitimg.u-pic {
  border-radius: 25px 25px 25px 25px!important;
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
#users .uzr.ahmed .u-topic {
  margin-left: 5px;
}
`;
document.head.appendChild(styleElement);
