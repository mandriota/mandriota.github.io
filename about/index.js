const checkAndRedirect = () => 
    "portrait-primary portrait-secondary".includes(screen.orientation.type) ?
        window.location.replace("https://mandriota.github.io/")
        : undefined;

checkAndRedirect();

addEventListener("orientationchange", checkAndRedirect);
