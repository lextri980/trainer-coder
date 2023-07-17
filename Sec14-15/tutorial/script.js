const userDetail = {
  firstName: "Le Van",
  lastName: "A",
  age: 23,
  address: {
    country: "Vietnam",
    province: "Ha noi",
    district: "Dong Da",
  },
  phoneNumber: "0987654321",
  favouriteFlower: ["rose", "sunflower"],
};

// cau a
console.log(userDetail.favouriteFlower);
console.log(userDetail.favouriteFlower[1]);

//cau b
const fullName = userDetail.firstName + " " + userDetail.lastName;
const fullName2 = `${userDetail.firstName} ${userDetail.lastName}`;
console.log(fullName);
console.log(fullName2);

//cau c
userDetail.address.ward = "Phuong Mai";
console.log(userDetail);

//cau d
userDetail.favouriteFlower.unshift("lavender");
console.log(userDetail);

//cau e
const phoneNumber = userDetail.phoneNumber;
if (phoneNumber.length === 10 || phoneNumber.length === 11) {
  console.log("valid");
} else {
  console.log("invalid");
}
