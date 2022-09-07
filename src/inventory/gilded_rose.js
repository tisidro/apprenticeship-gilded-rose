// Item constructor. DO NOT MODIFY OR THE GOBLIN WILL EAT YOU!
export function Item(name, sell_in, quality) {
  this.name = name;
  this.sell_in = sell_in;
  this.quality = quality;
}

/*
* Update inventory
* @param {Item[]} items - an array of Items representing the inventory to be updated
* Example usage:

const items = [
  new Item('+5 Dexterity Vest', 10, 20),
  new Item('Aged Brie', 2, 0),
  new Item('Elixir of the Mongoose', 5, 7),
  new Item('Sulfuras, Hand of Ragnaros', 0, 80),
  new Item('Backstage passes to a TAFKAL80ETC concert', 15, 20),
  new Item('Conjured Mana Cake', 3, 6),
];

updateQuality(items);
*/

 const qualityIncWithAge = ['Aged Brie'];
    const qualityIncFastAsExpiring = ['Backstage passes to a TAFKAL80ETC concert'];
    const constantQuality = ['Sulfuras, Hand of Ragnaros'];

export function updateQuality(items) {
    //combine these into quality changer--takes in a + or - number and you can get BOTH increase or decrease in quality
    const qualityUpdater = (item, change_Amount) =>{
       if (item.quality < 50 && item.quality >0){
      item.quality = item.quality + change_Amount
    }
    }

  for (var i = 0; i < items.length; i++) {

   //------VARIABLES-----//
   
    //create item variables to simplify & improve readability, decrease repetition, 
    const item = items[i]

    if (!qualityIncWithAge.includes(item.name)&& !qualityIncFastAsExpiring.includes(item.name)) {
        if (!constantQuality.includes(item.name)){
          qualityUpdater(item,-1)
        }
      }
    else {
     if (item.quality < 50) {
        item.quality = item.quality + 1
        if (qualityIncFastAsExpiring.includes(item.name)) {
          if (item.sell_in < 11) {
           qualityUpdater(item,1)
          }
          if (item.sell_in < 6) {
           qualityUpdater(item,1)
          }
        }
      }
    }
    if (!constantQuality.includes(item.name)) {
      item.sell_in = item.sell_in - 1;
    }

    //where items expire
  
    
    if (item.sell_in < 0) {

      if (qualityIncWithAge.includes(item.name)) {
    
        qualityUpdater(item, 1)
        
      }

      else if (!qualityIncWithAge.includes(item.name)) {
        if (qualityIncFastAsExpiring.includes(item.name)) {
        //backstage passes go to zero after concert
        item.quality = item.quality - item.quality
          }
          //condition for when it IS Sufuras 
        } else if (constantQuality.includes(item.name)){
          return //return nothing: no quality change for him
        }
        else {
           
             qualityUpdater(item, -1)
            
        }
      } 

//closes for loop
    }

//updateQuality() outermost function bracket
  }
  
 
 

