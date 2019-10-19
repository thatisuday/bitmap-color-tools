import React from 'react';

// local dependencies
import * as converter from 'utils/number-converter';

export const ColorValues = ( { color } ) => {
    return (
        <div className='bm-color-values'>

            {/* plain values */}
            <div className='bm-color-values__section'>
                <div className='bm-color-values__section__title'>Plain Values</div>
                <div className='bm-color-values__section__values'>
                    {/* RGBA */}
                    <div className='bm-color-values__section__values__item'>
                        <div className='bm-color-values__section__values__item__title'>RGBA</div>
                        <div className='bm-color-values__section__values__item__value'>
                            { converter.plainRGBA( color ) }
                        </div>
                    </div>

                    {/* HSLA */}
                    <div className='bm-color-values__section__values__item'>
                        <div className='bm-color-values__section__values__item__title'>HSLA</div>
                        <div className='bm-color-values__section__values__item__value'>
                            { converter.plainHSLA( color ) }
                        </div>
                    </div>
                </div>
            </div>

            {/* CSS values */}
            <div className='bm-color-values__section'>
                <div className='bm-color-values__section__title'>CSS Values</div>
                <div className='bm-color-values__section__values'>
                    {/* RGBA */}
                    <div className='bm-color-values__section__values__item'>
                        <div className='bm-color-values__section__values__item__title'>RGBA</div>
                        <div className='bm-color-values__section__values__item__value'>
                            { converter.cssRGBA( color ) }
                        </div>
                    </div>

                    {/* HSLA */}
                    <div className='bm-color-values__section__values__item'>
                        <div className='bm-color-values__section__values__item__title'>HSLA</div>
                        <div className='bm-color-values__section__values__item__value'>
                            { converter.cssHSLA( color ) }
                        </div>
                    </div>
                </div>
            </div>

            {/* 24-bit Bitmap Values */}
            <div className='bm-color-values__section'>
                <div className='bm-color-values__section__title'>24-bit Bitmap Values</div>
                <div className='bm-color-values__section__values'>
                    {/* Decimal */}
                    <div className='bm-color-values__section__values__item'>
                        <div className='bm-color-values__section__values__item__title'>Decimal (BGR)</div>
                        <div className='bm-color-values__section__values__item__value'>
                            { converter.bmp24Decimal( color ) }
                        </div>
                    </div>

                    {/* Binary */}
                    <div className='bm-color-values__section__values__item'>
                        <div className='bm-color-values__section__values__item__title'>Binary (BGR)</div>
                        <div className='bm-color-values__section__values__item__value'>
                            { converter.bmp24Binary( color ) }
                        </div>
                    </div>

                    {/* Hex */}
                    <div className='bm-color-values__section__values__item'>
                        <div className='bm-color-values__section__values__item__title'>Hex (BGR)</div>
                        <div className='bm-color-values__section__values__item__value'>
                            { converter.bmp24Hex( color ) }
                        </div>
                    </div>

                    {/* Prefixed Hex */}
                    <div className='bm-color-values__section__values__item'>
                        <div className='bm-color-values__section__values__item__title'>Prefixed Hex (BGR)</div>
                        <div className='bm-color-values__section__values__item__value'>
                            { converter.bmp24Hex( color, true ) }
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};
