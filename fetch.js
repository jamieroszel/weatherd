class Fetch {
    async getCurrent(input) {
      const myKey = "15ff99dd07f18bda25869ab24d06891e";
  
      //make request to url
  
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${input}&units=imperial&appid=${myKey}`
      );
  
      const data = await response.json();
  
      console.log(data);
  
      return data;
    }
  }