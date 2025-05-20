document.addEventListener('DOMContentLoaded', function() {
  setInterval(() => {
    const usersContainer = document.getElementById('users');
    if (!usersContainer) {
      console.error('لم يتم العثور على العنصر ذي المعرف "users".');
      return;
    }

    const paragraphsToCheck = usersContainer.querySelectorAll('div');
    const elementsToAddAhmed = [];

    paragraphsToCheck.forEach(paragraph => {
      const hasDre = paragraph.textContent.includes('드');
      const hasAhmedClass = paragraph.classList.contains('ahmed');

      if (hasDre && !hasAhmedClass) {
        elementsToAddAhmed.push(paragraph);
      } else if (!hasDre && hasAhmedClass) {
        paragraph.classList.remove('ahmed');
      }
    });

    elementsToAddAhmed.forEach(element => {
      element.classList.add('ahmed');
    });

    const ahmedElementsToHide = usersContainer.querySelectorAll('.uzr.ahmed span.uhash, .active.ahmed fl.ustat, .uzr.ahmed img.co, .uzr.ahmed .ustat, .fl.mini.u-co');
    ahmedElementsToHide.forEach(el => {
      el.style.display = 'none';
    });

  }, 9000);
});

// يمكنك إضافة هذا الجزء ديناميكيًا باستخدام JavaScript أيضًا إذا كنت تفضل ذلك.
const styleElement = document.createElement('style');
styleElement.textContent = `
#users .uzr.ahmed .mini.u-msg {
    width: 170px!important;
    font-size: 14px!important;
    text-align: right!important;
    margin-top: 3px!important;
  background-image: url('https://www.babup.com/do.php?img=91354');
  background-size: 170px 40px!important;
    background-repeat: no-repeat;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
        }

#users .uzr.ahmed {
      background-image: url('https://www.babup.com/do.php?img=127482');
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
 #users .uzr.ahmed .fitimg.u-pic {
 border-radius: 4px 4px 4px 4px!important;
  margin-left: 8px!important;
 margin-top: 6px!important;
 height: 57px!important;
    perspective: 500px!important;
      transform-style: preserve-3d!important;
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
