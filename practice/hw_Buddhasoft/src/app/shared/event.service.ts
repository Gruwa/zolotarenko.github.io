import { Http } from '@angular/http';
import { setTimeout } from 'timers';
import { NumberValueAccessor } from '@angular/forms/src/directives';
import { Injectable } from '@angular/core';

@Injectable()

export class EventService {

    // doneItem: boolean = false; 
    // hideItem: boolean;
    // starItem: boolean = false;
    product: IEvents;

    constructor() {

    }

    getEvents() {
        
        return EVENTS;
    }

    getEvent(id:number) {
        return EVENTS.find(event => event.id === id);
    }

    newProduct(event: IEvents) {

        if(EVENTS[EVENTS.length - 1] === undefined) {
            event.id = 1;
        } else {
            event.id = EVENTS[EVENTS.length - 1].id + 1;
        }
        EVENTS.push(event);
    }

    productFunc(product: IEvents) {
        this.product = product;
    }

    editProduct(product: IEvents) {
        console.log(product);
        
        // EVENTS[EVENTS.indexOf(product)].splice(0,0, product);
    }

    // deleteEvent(event: IEvents) {
    //     EVENTS.splice(EVENTS.indexOf(event), 1);
    // }

    // newItems(item: IEventsItem, event: IEvents) {
    //     if(event.items[event.items.length - 1] === undefined) {
    //         item.id = 1;
    //     } else {
    //         item.id = event.items[event.items.length - 1].id + 1;
    //     }
    //     event.items.push(item);        
    // }

    // deleteItem(item: IEventsItem, event: IEvents) {
    //     let elementSearch = EVENTS[EVENTS.indexOf(event)].items;
    //     elementSearch.splice(elementSearch.indexOf(item), 1);
    // }
    
    // doneItemFunc(item: IEventsItem, done: boolean) {
    //     item.done = done;
    // }

    // starItemFunc(starItem: boolean, item: IEventsItem, event: IEvents) {
    //     if(starItem === true) {
    //         this.deleteItem(item, event);
    //         EVENTS[EVENTS.indexOf(event)].items.splice(0,0, item);
    //         item.star = starItem;
    //     }

    // }

    // searchItems(searchTerm: string) {
    //     let term = searchTerm.toLocaleLowerCase();
    //     let results: IEventsItem[] = [];

    //     EVENTS.forEach(event => {
    //         let matchingSessions = event.items.filter(
    //             item => item.name.toLocaleLowerCase().indexOf(term) > -1);
    //         matchingSessions = matchingSessions.map((item: any) => {
    //             item.eventId = event.id;
    //             return item;
    //         })
    //         results = results.concat(matchingSessions);
    //     })

    //     let emitter = new EventEmitter(true);
    //     setTimeout(() => {
    //         emitter.emit(results);
    //     }, 100);
        
    //     return emitter;
    // }

}

export interface IEvents {
    id: number;
    title: string;
    imageUrl: string;
    description: string;
    price: number;
    }


const EVENTS = [
    { 
    id: 1,
    title: 'Apple',
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxHZ7A5oyikmiipk8iKigeHdwVCxOv1GojecGZInCGuO2lT_hw",
    description: "The apple tree is a deciduous tree in the rose family best known for its sweet, pomaceous fruit, the apple. ",
    price: 0.97           

    },
    { 
    id: 2,
    title: 'Orange',
    imageUrl: "https://previews.123rf.com/images/atoss/atoss1205/atoss120500041/13623365-Orange-fruit-isolated-on-white-background-Stock-Photo.jpg",
    description: "The orange is the fruit of the citrus species Citrus × sinensis in the family Rutaceae. It is also called sweet orange",
    price: 0.97           
    },
    { 
    id: 3,
    title: 'Mandarin',
    imageUrl: "https://freshbroccoli.ru/bitrix/templates/aspro_mshop_freshbroccoli/images/magic-mandarin-sm.png",
    description: "The mandarin orange also known as the mandarin or mandarine, is a small citrus tree with fruit resembling other oranges.",
    price: 0.97            
    }
    ,
    { 
    id: 4,
    title: 'Lemon',
    imageUrl: "http://dreamatico.com/data_images/lemon/lemon-7.jpg",
    description: "The lemon, Citrus limon (L.) Osbeck, is a species of small evergreen tree in the flowering plant family Rutaceae,",
    price: 0.12            
    },
    { 
    id: 5,
    title: 'Cherry',
    imageUrl: "http://tutknow.ru/uploads/posts/2013-06/1370787634_vishnya.jpg",
    description: "A cherry is the fruit of many plants of the genus Prunus, and is a fleshy drupe (stone fruit). ",
    price: 0.48            
    },
    { 
    id: 6,
    title: 'Watermelon',
    imageUrl: "http://edaplus.info/food_pictures/watermelon.jpg",
    description: "Watermelon Citrullus lanatus var. lanatus is a scrambling and trailing vine in the flowering plant",
    price: 15.74            
    },
    { 
    id: 7,
    title: 'Apricot',
    imageUrl: "http://honeygarden.ru/plants/apricot/apricot.jpg",
    description: "An apricot is a fruit, or the tree that bears the fruit, of several species in the genus Prunus (stone fruits).",
    price: 13.11            
    },
    { 
    id: 8,
    title: 'Plum',
    imageUrl: "http://edaplus.info/food_pictures/plum.jpg",
    description: "A plum is a fruit of the subgenus Prunus of the genus Prunus. ",
    price: 18.17            
    }
];


