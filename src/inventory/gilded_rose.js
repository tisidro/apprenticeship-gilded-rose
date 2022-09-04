/*
* Update inventory
* @param {Item[]} items - an array of Items representing the inventory to be updated
* Example usage:
3
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

// Item constructor. DO NOT MODIFY OR THE GOBLIN WILL EAT YOU!
export function Item(name, sell_in, quality) {
  this.name = name;
  this.sell_in = sell_in;
  this.quality = quality;
}

export function updateQuality(items) {
  //--variables --//
  const itemHasConstantQuality =['Sulfuras, Hand of Ragnaros'];
  const itemImprovesWithAge = ['Aged Brie', 'Backstage passes to a TAFKAL80ETC concert']

  
  for (let i = 0; i < items.length; i++) {
      //--helper functions--//
  const itemHasMaxQuality = (item) => {
        return items[i].quality >=50;
      }

    const qualityDecreasesByOne = (item) =>{
      return items[i].quality = items[i].quality - 1
    }

    const qualityIncreasesByOne = (item) =>{
      return items[i].quality = items[i].quality + 1
    }

    if (!itemImprovesWithAge.includes(items[i].name)) {
      if (items[i].quality > 0 && !itemHasConstantQuality.includes(items[i].name)) {
        qualityDecreasesByOne(items)
        }
      
    } else{

      if (!itemHasMaxQuality()) {
        
        if (items[i].name == 'Backstage passes to a TAFKAL80ETC concert') {
          if (items[i].sell_in < 11) {
              qualityIncreasesByOne(items)
          }
          if (items[i].sell_in < 6) {
              items[i].quality = items[i].quality + 1
          }
        } qualityIncreasesByOne(items)
      }
    }
    if (items[i].name != itemHasConstantQuality.includes(items[i].name)) {
      items[i].sell_in = items[i].sell_in - 1;
    } 
    const itemIsExpired = (item) => {
//check for being expired or not--if (not expired)
if (items[i].sell_in<0){//is sell-in less than zero (expired)--true/false
return true; 
}
} 

    if (itemIsExpired()) {
      if (!itemHasConstantQuality.includes(items[i].name)||itemImprovesWithAge.includes(items[i].name)) {
        if (items[i].name != 'Backstage passes to a TAFKAL80ETC concert' && items[i].quality > 0) {
              qualityDecreasesByOne(items)
        } else {
          items[i].quality = items[i].quality - items[i].quality
        }
      } else {
        if (items[i].quality < 50) {
          qualityIncreasesByOne(items)
        }
      }
    }
  }
}
