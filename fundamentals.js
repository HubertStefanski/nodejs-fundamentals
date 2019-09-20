let aCar = {
    owner: 'Joe bloggs',
    address: '3 walkers lane',
    previous_owners: [
        {
            name: 'Pat Smith ',
            address: '1 Main Street'
        },
        {
            name: 'Sheila Dwyer',
            address: '2 High Street'
        },
    ],
    type: {
        make: 'Toyota',
        model: 'Corrola',
        cc: '1.8'
    },
    registration: { year: 10, county: 'WD', number: 1058 }
};
//new Property
aCar.mileage = '80000';
aCar.color = {
    exterior: 'red',
    interior: {
        texture: 'leather',
        shade: 'cream',
    },

}


console.log(aCar.owner + ' drives a ' + aCar.type.make + ' ' + aCar.type.model);
console.log('it is a ' + aCar.color.exterior + ' car ' + aCar.mileage + ' mileage, and with ' + aCar.color.interior.texture + ' interior ');
console.log('First owner: ' + aCar.previous_owners[0].name + '-' + aCar.previous_owners[0].address)