fetch("https://discounts.texas.aaa.com/merchants")
  .then(response => response.text())
  .then(text => {
    if (text.includes(window.location.hostname) || text.includes(document.title)) {
      alert("This website is on the AAA Discounts list!");
    }
  });

