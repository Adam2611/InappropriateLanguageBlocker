replaceText(document.body);

function replaceText(element) {
  if (element.hasChildNodes()) {
    element.childNodes.forEach(replaceText);
  } else if (element.nodeType === Text.TEXT_NODE) {
    //bad words here yikes
    //dont look here

    element.textContent = element.textContent.replace(/damn/gi, "████");
    element.textContent = element.textContent.replace(/ ass /gi, "████");
    element.textContent = element.textContent.replace(/ hell /gi, "████");
    element.textContent = element.textContent.replace(/sex/gi, "████");
    element.textContent = element.textContent.replace(/shitting/gi, "████");
    element.textContent = element.textContent.replace(/shat/gi, "████");
    element.textContent = element.textContent.replace(/ sexual /gi, "████");
    element.textContent = element.textContent.replace(/pervert/gi, "████");
    element.textContent = element.textContent.replace(/perveted/gi, "████");
  //  element.textContent = element.textContent.replace(/'f*ck'/gi, "████");
  //  element.textContent = element.textContent.replace(/sh*t/gi, "████");
  //  element.textContent = element.textContent.replace(/b*tch/gi, "████");
  //  element.textContent = element.textContent.replace(/son of a b*tch/gi, "████");
    element.textContent = element.textContent.replace(/frickin/gi, "████");
    element.textContent = element.textContent.replace(/fricking/gi, "████");
    element.textContent = element.textContent.replace(/shit/gi, "████");
    element.textContent = element.textContent.replace(/fuck/gi, "████");
    element.textContent = element.textContent.replace(/fucking /gi, "████");
    element.textContent = element.textContent.replace(/fucked/gi, "████");
    element.textContent = element.textContent.replace(/piss/gi, "████");
    element.textContent = element.textContent.replace(/bastard/gi, "████");
  //  element.textContent = element.textContent.replace(/son of a bitch/gi, "████");
    element.textContent = element.textContent.replace(/bitch/gi, "████");
    element.textContent = element.textContent.replace(/cunt/gi, "████");
    element.textContent = element.textContent.replace(/slut/gi, "████");
    element.textContent = element.textContent.replace(/whore/gi, "████");
    element.textContent = element.textContent.replace(/ hoe /gi, "████");
    element.textContent = element.textContent.replace(/ poof /gi, "████");
    element.textContent = element.textContent.replace(/asshole/gi, "████");
    element.textContent = element.textContent.replace(/ dick /gi, "████");
    element.textContent = element.textContent.replace(/penis/gi, "████");
    element.textContent = element.textContent.replace(/vagina /gi, "████");
    element.textContent = element.textContent.replace(/ thot /gi, "████");
    element.textContent = element.textContent.replace(/sexual/gi, "████");
    element.textContent = element.textContent.replace(/orgasm/gi, "████");
    element.textContent = element.textContent.replace(/fucked/gi, "████");
    element.textContent = element.textContent.replace(/wtf/gi, "████");
    element.textContent = element.textContent.replace(/wtff/gi, "████");
    element.textContent = element.textContent.replace(/erotic/gi, "████");
    element.textContent = element.textContent.replace(/sensual/gi, "████");
    element.textContent = element.textContent.replace(/genital/gi, "████");
    element.textContent = element.textContent.replace(/porn/gi, "████");
    element.textContent = element.textContent.replace(/fap/gi, "████");
    element.textContent = element.textContent.replace(/masturbate/gi, "████");
    element.textContent = element.textContent.replace(/fapping/gi, "████");
    element.textContent = element.textContent.replace(/masturbated/gi, "████");
    element.textContent = element.textContent.replace(/pornography/gi, "████");
    element.textContent = element.textContent.replace(/masturbation/gi, "████");
    element.textContent = element.textContent.replace(/condom/gi, "████");
    element.textContent = element.textContent.replace(/gangbang/gi, "████");
    element.textContent = element.textContent.replace(/tampon/gi, "████");
    element.textContent = element.textContent.replace(/fuckin/gi, "████");
    element.textContent = element.textContent.replace(/fag/gi, "████");
    element.textContent = element.textContent.replace(/faggot/gi, "████");
    element.textContent = element.textContent.replace(/jerkoff/gi, "████");
    element.textContent = element.textContent.replace(/ gay /gi, "████");

                  }
                }
