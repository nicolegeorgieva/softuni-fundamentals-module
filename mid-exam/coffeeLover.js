function coffeeLover(arr) {
    let coffees = arr.shift().split(' ');
    let numberCommands = arr.shift();

    let selectedCoffees = coffees;

    let commands = arr
    for (currentCommand of commands) {
        let splittedCommand = currentCommand.split(' ');
        let keyword = splittedCommand[0]
        switch (keyword) {
            case 'Include':
                //Include, TurkishCoffee
                let coffeeToInclude = splittedCommand[1];
                selectedCoffees = cInclude(selectedCoffees, coffeeToInclude);
                break;
            case 'Remove':
                //Remove first 2
                selectedCoffees = cRemove(selectedCoffees, splittedCommand[1], splittedCommand[2]);
                break;
            case 'Prefer':
                //Prefer 1 3
                selectedCoffees = cPrefer(selectedCoffees, splittedCommand[1], splittedCommand[2]);
                break;
            case 'Reverse':
                //Reverse
                selectedCoffees = cReverse(selectedCoffees);
                break;
        }
    }

    console.log("Coffees:")
    console.log(selectedCoffees.join(' '))


    //--------------------------------------

    function cInclude(selectedCoffees, coffeeToInclude) {
        selectedCoffees.push(coffeeToInclude)
        return selectedCoffees;
    }

    //modifier - first / last
    function cRemove(selectedCoffees, modifier, numberOfCoffees) {
        if (selectedCoffees.length < numberOfCoffees) {
            return selectedCoffees; //skip command
        }

        if (modifier == "first") {
            selectedCoffees.splice(0, numberOfCoffees)
            return selectedCoffees
        } else {
            //last
            selectedCoffees.splice(-numberOfCoffees)
            return selectedCoffees;
        }
    }


    function cPrefer(selectedCoffees, index1, index2) {
        if (selectedCoffees[index1] === undefined) {
            return selectedCoffees // skip command
        }

        if (selectedCoffees[index2] === undefined) {
            return selectedCoffees // skip commands
        }

        let firstCoffee = selectedCoffees[index1]
        let secondCoffee = selectedCoffees[index2]

        selectedCoffees[index1] = secondCoffee
        selectedCoffees[index2] = firstCoffee

        return selectedCoffees;
    }

    function cReverse(selectedCoffees) {
        return selectedCoffees.reverse()
    }
}

coffeeLover(['Arabica Liberica Charrieriana Magnistipula Robusta BulkCoffee StrongCoffee',
    '5', 'Include TurkishCoffee', 'Remove first 2', 'Remove last 1', 'Prefer 3 1', 'Reverse']);
