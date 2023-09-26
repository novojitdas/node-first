class Superhero {
      constructor(name){
            this.name = name;
      }
      getName(){
            return this.name;
      }
      setName(name){
            this.name = name;
      }
}
/* for avoiding caching bug, we should export the class itself
not the new object */
module.exports = Superhero;