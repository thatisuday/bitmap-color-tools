import { round } from 'lodash';

/*****************************/

// convert decimal number to binary
const _decToBinary = ( num ) => {
    return ( '00000000' + num.toString( 2 ) ).substr( -8 );
};

// convert decimal number to hexadecimal
const _decToHex = ( num, prefix = false ) => {
    let hex = num.toString( 16 ).toUpperCase();

    // add `0` to make 8-bit HEX value
    if( 1 === hex.length ) {
        hex = '0' + hex;
    }

    // add `0x` prefix
    if( prefix ) {
        hex = '0x' + hex;
    }

    return hex;
};

/*****************************/

// get plain RGBA color values
export const plainRGBA = ( { rgb } ) => {
    return `Red: ${ rgb.r } | Green: ${ rgb.g } | Blue: ${ rgb.b } | Alpha: ${ round( rgb.a, 2 ) }`;
};

// get plain HSLA color value
export const plainHSLA = ( { hsl } ) => {
    return `Hue: ${ round( hsl.h, 2 ) } | Saturation: ${ round( hsl.s, 2 ) } | Lightness: ${ round( hsl.l, 2 ) } | Alpha: ${ round( hsl.a, 2 ) }`;
};

// get CSS RGBA `color` property values
export const cssRGBA = ( { rgb } ) => {
    return `color: rgba( ${ rgb.r }, ${ rgb.g }, ${ rgb.b }, ${ round( rgb.a, 2 ) });`;
};

// get CSS HSLA `color` property values
export const cssHSLA = ( { hsl } ) => {
    return `color: hsla( ${ round( hsl.h, 2 ) }, ${ round( hsl.s, 2 ) }, ${ round( hsl.l, 2 ) }, ${ round( hsl.a, 2 ) } );`;
};


/************************** 24-bit Bitmap ***************************/

// get 24-bit decimal BMP values
export const bmp24Decimal = ( { rgb } ) => {
    return `${ rgb.b } ${ rgb.g } ${ rgb.r }`;
};

// get 24-bit binary BMP values
export const bmp24Binary = ( { rgb } ) => {
    return `${ _decToBinary( rgb.b ) } ${ _decToBinary( rgb.g ) } ${ _decToBinary( rgb.r ) }`;
};

// get 24-bit hexadecimal BMP values
export const bmp24Hex = ( { rgb }, prefix ) => {
    return `${ _decToHex( rgb.b, prefix ) } ${ _decToHex( rgb.g, prefix ) } ${ _decToHex( rgb.r, prefix ) }`;
};
