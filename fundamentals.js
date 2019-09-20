let aCar ={
    owner: 'Joe bloggs',
    type : {
        make: 'Toyota Corrola',
        cc: '1.8'},
    registration:'10WD1058'
};
//new Property
aCar.mileage = '80000';
aCar.color = {
    exterior: 'red',
    interior : {
        texture: 'leather',
        shade: 'cream',
    },

}


console.log(aCar.owner + ' drives a ' + aCar.type.make);
console.log('it is a ' + aCar.color.exterior + ' car '+ aCar.mileage + ' mileage, and with ' + aCar.color.interior.texture + ' interior ');