"use strict"

function Location(attributes) {
  this.id = attributes.id;
  this.name = attributes.name;
  this.address = attributes.address;
  this.city = attributes.city;
  this.state = attributes.state;


  Location.prototype.name = function() {
    return (this.name);
  };


  Location.prototype.makeHtml = function(){
    var string = `<h1>Name: ${this.name}</h1><h2>Address: ${this.address}</h2><h3>City: ${this.city}</h3><h4>State: ${this.state}</h4>`
    // var string = `<p>Name: ${data.name}.</p><p> Address: ${data.address}.</p><p>City: ${data.city}.</p><p>State: ${data.state}</p>`
    return string
  }


  Location.prototype.indexHtml = function(){
    var link = $(document.createElement("a"))
    link.attr('href', `/locations/${this.id}`)
    link.attr('class', `location`)
    link.attr('value', "link")
    link.attr('id', `${this.id}`)
    link.text(this.name)
    return link
  }
}


class Experience {
  constructor(attributes){
    this.id = attributes.id
    this.story = attributes.story
    this.user_id = attributes.user_id
    this.location_id = attributes.location_id
  }

  makeHtml(){
    var string = `<p>${this.story}</p>`
    return string
  }


}
