module.exports = {
  "@vuepress/pwa": {
    serviceWorker: true,
    popupComponent: "AstericsSWUpdatePopup",
    updatePopup: {
      message: "New content is available.",
      buttonText: "Refresh"
    }
  }
};
