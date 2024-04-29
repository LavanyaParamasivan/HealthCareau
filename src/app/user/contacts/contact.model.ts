export interface Contact {
  id: string,
  email: string,
  name: string,
  password:string,
  favoritesRanking: number | null,
  phones: Phone[],
  address: Address,
}

export interface Phone {
  phoneNumber: string,
  phoneType: string,
  preferred:boolean,
}

export interface Address {
  streetAddress: string,
  city: string,
  state: string,
  postalCode: string,
  addressType: string,
}

export const PhoneTypeValue = [
  {
title:'Mobile', value:'mobile'
},
{title:'Work', value:'work'
},
{
  title:'Other', value:'other' 
},
]

export const AddressTypeValue = [
  {
title:'Home', value:'home'
},
{title:'Work', value:'work'
},
{
title:'Other', value:'other' 
},
]