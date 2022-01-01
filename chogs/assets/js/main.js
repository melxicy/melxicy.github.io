const openMenu = {
    hideAll: () => {
        document.getElementById("town").style.display = 'none'
        document.getElementById("forest").style.display = 'none'
    },
    town: () => {
        openMenu.hideAll()
        document.getElementById("town").style.display = 'initial'
    },
    forest: () => {
        openMenu.hideAll()
        document.getElementById("forest").style.display = 'initial'
    }
}