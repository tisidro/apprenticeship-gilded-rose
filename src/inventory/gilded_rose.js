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
////-----STILL to DO: get conjured item working/tests passing and in updateQuality pull out functionality for update default item and update Sulfuras

const qualityIncWithAge = ['Aged Brie'];
const qualityIncFastAsExpiring = ['Backstage passes to a TAFKAL80ETC concert'];
const constantQuality = ['Sulfuras, Hand of Ragnaros'];

const qualityUpdater = (item, change_Amount) => {
  if (item.quality === 0) {
    return;
  }
  if (item.sell_in > 0 && item.quality > 0 && item.quality <= 50) {
    item.quality = item.quality + change_Amount;
    return;
  } 
  if (item.sell_in < 0) {
    item.quality = item.quality - 2 * (change_Amount);
    return;
  }
};
const itemExpired = (item) => {
  if (item.sell_in < 0) {
    return true;
  }
};

const sell_inDefault = (item) => {
  item.sell_in = item.sell_in - 1;
};


//for Aged Brie
const agedBrieUpdater = (item) => {
  if (item.quality < 50){
  qualityUpdater(item, 1);
}
}

//for Backstage Pass
const backstagePassUpdater = (item) => {
  if (item.sell_in < 6) {
    qualityUpdater(item, 3);
  } else if (item.sell_in < 11) {
    qualityUpdater(item, 2);
  } else {
    qualityUpdater(item, 1);
  }
};

//for conjured item
const conjuredItemUpdater = (item) => {
  qualityUpdater(item, -2);
}

//for default item
const defaultItemUpdater = (item) => {
  if (!qualityIncWithAge && !qualityIncFastAsExpiring && !constantQuality) {
    qualityUpdater(item, 1);
  };
}

export function updateQuality(items) {
  for (var i = 0; i < items.length; i++) {
    const item = items[i];
 
    //update quality for Aged Brie
    if (item.name === 'Aged Brie') {
      //update aged brie here
      agedBrieUpdater(item);
      //stop here and go to next item in array,
      continue;
    }

       
    //update quality for Conjured Item
    if (item.name === 'Conjured Item'){
      conjuredItemUpdater(item);
      continue;
    }

    //update quality for Backstage Pass
    if (!qualityIncFastAsExpiring.includes(item.name)) {
      if (!constantQuality.includes(item.name)) {
        qualityUpdater(item, -1);
        
      }
    } else if (item.quality < 50) {
      backstagePassUpdater(item);
    } 

    //sell_in for all items (decrease by one each day)
    if (!constantQuality.includes(item.name)) {
      sell_inDefault(item);
    }

    //where items expire
    if (itemExpired(item)) {
      if (!qualityIncWithAge.includes(item.name)) {
        if (qualityIncFastAsExpiring.includes(item.name)) {
          //backstage passes go to zero after concert
          item.quality = item.quality - item.quality;
        }
        //condition for when it IS Sufuras
      } else if (constantQuality.includes(item.name)) {
        return; //return nothing: no quality change for him
      } 
      //default items
      qualityUpdater(item, 1);
     
    }

  }

}
