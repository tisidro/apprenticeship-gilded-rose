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

export function updateQuality(items) {
  //--variables --//
  const constantQuality =['Sulfuras, Hand of Ragnaros'];
  const improvesWithAge = ['Aged Brie', 'Backstage passes to a TAFKAL80ETC concert']

  //--helper functions--//

  for (let i = 0; i < items.length; i++) {
    
    if (!improvesWithAge.includes(items[i].name)) {
      if (items[i].quality > 0) {
        if (!constantQuality.includes(items[i].name)) {
          items[i].quality = items[i].quality - 1
        }
      }
    } else {
      function isMaxQuality(quality){
        return quality >=50;
      }
      if (items[i].quality < 50) {
        items[i].quality = items[i].quality + 1
        if (items[i].name == 'Backstage passes to a TAFKAL80ETC concert') {
          if (items[i].sell_in < 11) {
            if (items[i].quality < 50) {
              items[i].quality = items[i].quality + 1
            }
          }
          if (items[i].sell_in < 6) {
            if (items[i].quality < 50) {
              items[i].quality = items[i].quality + 1
            }
          }
        }
      }
    }
    if (items[i].name != constantQuality.includes(items[i].name)) {
      items[i].sell_in = items[i].sell_in - 1;
    } 
    const isExpired = () => {
//check for being expired or not--if (not expired)
if (items[i].sell_in<0){//is sell-in less than zero (expired)--true/false
return true; 
}
} 

    if (isExpired()) {
      if (!constantQuality.includes(items[i].name)||improvesWithAge.includes(items[i].name)) {
        if (items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
          if (items[i].quality > 0) {
              items[i].quality = items[i].quality - 1
          }
        } else {
          items[i].quality = items[i].quality - items[i].quality
        }
      } else {
        if (items[i].quality < 50) {
          items[i].quality = items[i].quality + 1
        }
      }
    }
  }
}
