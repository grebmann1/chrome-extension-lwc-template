import { LightningElement } from 'lwc';
import { getHostAndSession } from 'util/session';
export default class App extends LightningElement {

    title = 'Hello the world'
    cookie;

    async connectedCallback(){
        this.cookie = await getHostAndSession();
    }


    get domain(){
        return this.cookie?.domain || 'empty';
    }

    get session(){
        return this.cookie?.session || 'empty';
    }


    

}