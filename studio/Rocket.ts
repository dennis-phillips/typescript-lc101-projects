import {Payload} from './Payload';
import { Astronaut } from './Astronaut';
import { Cargo } from './Cargo';
export class Rocket{
    name: string;
    totalCapacityKg: number;
    cargoItems: Cargo[] = [];
    astronauts: Astronaut[] = [];
    constructor(name: string, totalCapacityKg: number){
        this.name=name;
        this.totalCapacityKg=totalCapacityKg;
    }
    sumMass( items: Payload[] ): number{
        let sum: number = 0;
        
        for (let i = 0; i < items.length; i++){
           sum+=items[i].massKg;
        }
        return sum;
    }
    currentMassKg(): number{
        //console.log(this.cargoItems, "is this defined!!!!");
        return this.sumMass(this.astronauts) + this.sumMass(this.cargoItems)
    }
    canAdd(item: Payload): boolean{
        //console.log(this.currentMassKg(),"item from canAdd");
        return (this.currentMassKg() + item.massKg) <= this.totalCapacityKg;
            
    }
    addCargo(cargo: Cargo): boolean {
        if (this.canAdd(cargo)){
            this.cargoItems.push(cargo);
            return true;
        } 
            return false;
        
    }
    addAstronaut(astronaut: Astronaut): boolean {
        
        if(this.canAdd(astronaut)){
            this.astronauts.push(astronaut);
            //console.log(this.astronauts, "this is the astronaut");
            return true;
        }
            //console.log("this cantAdd");
            return false;
        
        
    }

}
