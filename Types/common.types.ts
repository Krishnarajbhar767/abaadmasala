import { StaticImageData } from "next/image";

export interface INavLink {
  title: string;
  link?: string; // optional because parent can have subLinks only
  subLinks?: INavLink[];
}


  export interface HeroProductElement { 
    leftElem1:StaticImageData,
    leftElem2:StaticImageData,
    bowl:StaticImageData,
    bowlBottomElem?:StaticImageData,
    rightElem1:StaticImageData,
    rightElem2:StaticImageData,
    rightElem3:StaticImageData,
    rightElem4:StaticImageData,
    heading:string,
    subheading:{
      text1:string,
      text2:string,
    },
    headingColorCode:string,
  } 
  export interface HeroProduct {
  product:StaticImageData,
  productName:string,
  supportingElement:HeroProductElement
  }  