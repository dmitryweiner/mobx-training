import {computed, observable, action} from "mobx";
import {generateId} from "./utils";

class Store {
  @observable creatures = [];

  @computed get creaturesCount () {return this.creatures.length};

  @action addCreature(type, name) {
    this.creatures.push({
      id: generateId(),
      type,
      name
    });
  }

  @action deleteCreature(id) {
    this.creatures = this.creatures.filter((element) => element.id !== id);
  }
}

export default new Store();
