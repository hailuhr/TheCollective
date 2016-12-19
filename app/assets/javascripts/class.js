function Location(attributes) {
  this.name = attributes["name"];
  this.address = attributes["address"];
  this.city = attributes["city"];
  this.state = attributes["state"];

  Location.prototype.name = function() {
    return (this.name);
  };


  Location.prototype.makeHtml = function(){
    var string = `<h1>Name: ${this.name}</h1><h2>Address: ${this.address}</h2><h3>City: ${this.city}</h3><h4>State: ${this.state}</h4>`
    // var string = `<p>Name: ${data.name}.</p><p> Address: ${data.address}.</p><p>City: ${data.city}.</p><p>State: ${data.state}</p>`
    return string
  }
}
