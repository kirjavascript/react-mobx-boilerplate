import { action, computed, observable } from 'mobx';

class Store {
    @observable text = 'hello world';
    @computed get upper() {
        return ((x,y,z,a=' ᴬᴮᶜᴰᴱᶠᴳᴴᴵᴶᴷᴸᴹᴺᴼᴾQᴿˢᵀᵁⱽᵂˣʸᶻᵃᵇᶜᵈᵉᶠᵍʰⁱʲᵏˡᵐⁿᵒᵖqʳˢᵗᵘᵛʷˣʸᶻ⁰¹²³⁴⁵⁶⁷⁸⁹⁰'.split(''),b=' ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'.split(''))=>x.split('').map((d) => a[b.indexOf(d)]).join(''))(this.text);
    }

    @action clear() {
        this.text = 'ok';
    }
}

let store = new Store;

export default store;