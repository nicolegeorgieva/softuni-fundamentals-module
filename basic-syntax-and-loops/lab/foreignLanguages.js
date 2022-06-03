function foreignLanguages(country) {
    if (country === 'England' || country === 'USA') {
        console.log('English');
    } else if (country === 'Argentina' || country === 'Mexico' || country === 'Spain') {
        console.log('Spanish');
    } else {
        console.log('unknown');
    }
}

foreignLanguages('USA');
foreignLanguages('Argentina');
foreignLanguages('Mexico');
foreignLanguages('Spain');
foreignLanguages('Germany');
foreignLanguages('Bulgaria');