const charikotLocation ={
    city: "charikot",
    country: "nepal",
};

const user = {
    name: "Ghanashyam",
    email: "ghanashyam@gmail.com"
};

const completeUSer = {... user, ...charikotLocation}

/*
Explanation: 
... (spread) copies object properties.

completeUser merges user + charikotLocation.
*/