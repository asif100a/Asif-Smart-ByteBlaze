const setThemeToLS = (theme) => {
    localStorage.setItem("theme", theme);
    const getTheme = localStorage.getItem("theme")
    document.querySelector('html').setAttribute('data-theme', getTheme);
};

export {setThemeToLS}