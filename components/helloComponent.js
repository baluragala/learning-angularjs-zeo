angular.module("comp")
  .component("helloComponent",{
    template: "<h1> Hello {{ hc.makeUpper() }}</h1>",
    controller: function() {
      console.log(this)
      var self = this;
      self.makeUpper = function(){
        return this.username.toUpperCase();
      },

      self.$onInit = function(){
        this.username = this.username + "-A"
      }

      self.$onChanges = function(changesObj){
        console.log(changesObj)
      }
    },
    controllerAs: 'hc',
    bindings:{
      username: '='
    }
  })
