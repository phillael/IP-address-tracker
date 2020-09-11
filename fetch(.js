fetch(" http://api.db-ip.com/addrinfo?api_key=<your api key>&addr=<ip address>")
  .then((response) => response.json())
  .then((json) => {
    document.getElementById("search-box").value = json.address;
    search();
  });
