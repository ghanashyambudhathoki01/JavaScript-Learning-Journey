const charikotLocation ={
    city: "charikot",
    country: "nepal",
    province: "bagmati",
    district: "dolakha"
    //there are many... 
};
const user = {
    name: "ghanashyam",
    email: "ghanashyam@gmail.com"
};

// rest operator 
const {city, country, ...rest} = charikotLocation

/*
Explanation : 
Rest operator (...) collects the remaining properties of an object after extracting some.

city and country are extracted, rest contains everything else.
*/